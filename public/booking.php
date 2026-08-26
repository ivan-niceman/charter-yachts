<?php

/**
 * Обработчик формы бронирования для ООО «Абсолют-Тур»
 * Отправка заявок в Telegram Bot и на Электронную Почту (Email)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Метод не поддерживается. Используйте POST.'], JSON_UNESCAPED_UNICODE);
  exit();
}

if (!function_exists('logDebug')) {
  function logDebug($message)
  {
    $logFile = __DIR__ . '/booking-debug.log';
    $line = '[' . date('Y-m-d H:i:s') . '] ' . $message . PHP_EOL;
    @file_put_contents($logFile, $line, FILE_APPEND | LOCK_EX);
  }
}

if (!function_exists('loadEnvFile')) {
  function loadEnvFile($filePath)
  {
    if (!file_exists($filePath)) {
      return;
    }
    $lines = file($filePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
      $line = trim($line);
      if (empty($line) || strpos($line, '#') === 0) {
        continue;
      }
      if (strpos($line, '=') !== false) {
        list($name, $value) = explode('=', $line, 2);
        $name = trim($name);
        $value = trim($value, " \t\n\r\0\x0B\"'");
        putenv("{$name}={$value}");
        $_ENV[$name] = $value;
        $_SERVER[$name] = $value;
      }
    }
  }
}

if (!function_exists('getEnvConfig')) {
  function getEnvConfig($key, $default = '')
  {
    $val = getenv($key);
    if ($val !== false && $val !== '') {
      return $val;
    }
    if (isset($_ENV[$key]) && $_ENV[$key] !== '') {
      return $_ENV[$key];
    }
    if (isset($_SERVER[$key]) && $_SERVER[$key] !== '') {
      return $_SERVER[$key];
    }
    return $default;
  }
}

if (!function_exists('tgHtmlEscape')) {
  function tgHtmlEscape($text)
  {
    return str_replace(['&', '<', '>'], ['&amp;', '&lt;', '&gt;'], (string)$text);
  }
}

if (!function_exists('sendTelegramRequest')) {
  if (!defined('TELEGRAM_FALLBACK_IP')) {
    define('TELEGRAM_FALLBACK_IP', '149.154.167.220');
  }

  function sendTelegramRequest($url, $data, $pinnedIp = null)
  {
    $jsonPayload = json_encode($data);
    if (function_exists('curl_init')) {
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_POST, true);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonPayload);
      curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
      curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 6);
      curl_setopt($ch, CURLOPT_TIMEOUT, 10);
      curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
      curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
      curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
      curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
      curl_setopt($ch, CURLOPT_FORBID_REUSE, true);
      if (defined('CURL_IPRESOLVE_V4')) {
        curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
      }
      if ($pinnedIp) {
        // Аналог curl --resolve: подключаться к конкретному IP,
        // TLS-проверка (SNI) при этом всё равно идёт по имени api.telegram.org.
        curl_setopt($ch, CURLOPT_RESOLVE, ["api.telegram.org:443:{$pinnedIp}"]);
      }
      $res = curl_exec($ch);
      $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
      $err = curl_error($ch);
      curl_close($ch);

      // code === 0 значит, что соединение не установилось на сетевом уровне
      // (таймаут/недоступный IP) — это не ошибка от Telegram, а сетевая.
      // Только в этом случае пробуем ещё раз с закреплённым IP.
      if ($code === 0 && !$pinnedIp) {
        logDebug("Telegram: основной путь не сработал ({$err}), пробуем закреплённый IP " . TELEGRAM_FALLBACK_IP);
        return sendTelegramRequest($url, $data, TELEGRAM_FALLBACK_IP);
      }

      return ['code' => $code, 'body' => $res, 'error' => $err];
    } else {
      $opts = [
        'http' => [
          'header'  => "Content-Type: application/json\r\nConnection: close\r\n",
          'method'  => 'POST',
          'content' => $jsonPayload,
          'timeout' => 10
        ],
        'ssl' => [
          'verify_peer'      => false,
          'verify_peer_name' => false,
        ]
      ];
      $res = @file_get_contents($url, false, stream_context_create($opts));
      return ['code' => ($res !== false ? 200 : 0), 'body' => $res, 'error' => ($res === false ? 'file_get_contents error' : '')];
    }
  }
}

if (!function_exists('sendSmtpEmailFallback')) {
  function sendSmtpEmailFallback($host, $port, $user, $pass, $from, $to, $subject, $body, &$debugErr = '')
  {
    $timeout = 5;
    $context = stream_context_create([
      'ssl' => [
        'verify_peer'       => false,
        'verify_peer_name'  => false,
        'allow_self_signed' => true
      ]
    ]);

    $remote = ($port === 465) ? "ssl://{$host}:{$port}" : "tcp://{$host}:{$port}";
    $socket = @stream_socket_client($remote, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT, $context);

    if (!$socket) {
      $debugErr = "Socket error: [{$errno}] {$errstr}";
      return false;
    }

    stream_set_timeout($socket, 5);

    $read = function () use ($socket) {
      $res = '';
      while ($line = fgets($socket, 512)) {
        $res .= $line;
        if (substr($line, 3, 1) === ' ') break;
      }
      return $res;
    };

    $write = function ($cmd) use ($socket) {
      fputs($socket, $cmd . "\r\n");
    };

    $read();
    $write("EHLO " . gethostname());
    $read();

    if ($port === 587) {
      $write("STARTTLS");
      $read();
      @stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
      $write("EHLO " . gethostname());
      $read();
    }

    if (!empty($user) && !empty($pass)) {
      $write("AUTH LOGIN");
      $read();
      $write(base64_encode($user));
      $read();
      $write(base64_encode($pass));
      $authRes = $read();
      if (strpos($authRes, '235') === false) {
        $debugErr = "SMTP Auth failed: " . trim($authRes);
        fclose($socket);
        return false;
      }
    }

    $write("MAIL FROM: <{$from}>");
    $read();
    $write("RCPT TO: <{$to}>");
    $read();
    $write("DATA");
    $read();

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: =?UTF-8?B?" . base64_encode("Абсолют-Тур") . "?= <{$from}>\r\n";
    $headers .= "To: <{$to}>\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";
    $headers .= "Date: " . date('r') . "\r\n";

    $write($headers . "\r\n" . $body . "\r\n.");
    $dataRes = $read();

    $write("QUIT");
    fclose($socket);

    if (strpos($dataRes, '250') === false) {
      $debugErr = "SMTP DATA failed: " . trim($dataRes);
      return false;
    }

    return true;
  }
}

loadEnvFile(__DIR__ . '/../.env');
loadEnvFile(__DIR__ . '/.env');

$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);

if (!$input && !empty($_POST)) {
  $input = $_POST;
}

$name    = isset($input['name']) ? trim($input['name']) : '';
$phone   = isset($input['phone']) ? trim($input['phone']) : '';
$email   = isset($input['email']) ? trim($input['email']) : '';
$yacht   = isset($input['yacht']) ? trim($input['yacht']) : 'Общий подбор тура / Консультация';
$comment = isset($input['comment']) ? trim($input['comment']) : 'Без комментария';
$consent = isset($input['consent']) ? (bool)$input['consent'] : false;

if (!empty($input['website'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Spam detected'], JSON_UNESCAPED_UNICODE);
  exit();
}

if (empty($name) || empty($phone) || empty($email) || !$consent) {
  http_response_code(400);
  echo json_encode(['error' => 'Пожалуйста, заполните все обязательные поля и подтвердите согласие 152-ФЗ'], JSON_UNESCAPED_UNICODE);
  exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'Укажите корректный e-mail'], JSON_UNESCAPED_UNICODE);
  exit();
}

$phoneDigits = preg_replace('/\D/', '', $phone);
if (strlen($phoneDigits) < 10) {
  http_response_code(400);
  echo json_encode(['error' => 'Укажите корректный номер телефона'], JSON_UNESCAPED_UNICODE);
  exit();
}

date_default_timezone_set('Europe/Moscow');
$timestamp = date('d.m.Y H:i:s') . ' MSK';

$botToken       = getEnvConfig('TELEGRAM_BOT_TOKEN', '');
$chatId         = getEnvConfig('TELEGRAM_CHAT_ID', '');
$recipientEmail = getEnvConfig('NOTIFICATION_EMAIL', '');

$telegramSent  = false;
$telegramError = '';
$emailSent     = false;
$emailError    = '';

if (!empty($botToken) && !empty($chatId)) {
  $tgUrl = "https://api.telegram.org/bot{$botToken}/sendMessage";

  $htmlText = "⛵ <b>НОВАЯ ЗАЯВКА — АБСОЛЮТ-ТУР</b>\n\n"
    . "👤 <b>Имя:</b> " . tgHtmlEscape($name) . "\n"
    . "📞 <b>Телефон:</b> " . tgHtmlEscape($phone) . "\n"
    . "✉️ <b>Email:</b> " . tgHtmlEscape($email) . "\n"
    . "🛥️ <b>Яхта:</b> " . tgHtmlEscape($yacht) . "\n"
    . "💬 <b>Комментарий:</b> " . tgHtmlEscape($comment) . "\n"
    . "⏰ <b>Время:</b> " . $timestamp;

  $reqData = [
    'chat_id'    => $chatId,
    'text'       => $htmlText,
    'parse_mode' => 'HTML',
  ];

  $res = sendTelegramRequest($tgUrl, $reqData);
  $jsonRes = json_decode($res['body'] ?? '', true);

  if ($res['code'] === 200 && !empty($jsonRes['ok'])) {
    $telegramSent = true;
  } else {
    $plainText = "⛵ НОВАЯ ЗАЯВКА — АБСОЛЮТ-ТУР\n\n"
      . "Имя: {$name}\n"
      . "Телефон: {$phone}\n"
      . "Email: {$email}\n"
      . "Яхта: {$yacht}\n"
      . "Комментарий: {$comment}\n"
      . "Время: {$timestamp}";

    $resPlain = sendTelegramRequest($tgUrl, [
      'chat_id' => $chatId,
      'text'    => $plainText
    ]);
    $jsonResPlain = json_decode($resPlain['body'] ?? '', true);

    if ($resPlain['code'] === 200 && !empty($jsonResPlain['ok'])) {
      $telegramSent = true;
    } else {
      $errText = $resPlain['body'] ?: $res['body'] ?: $resPlain['error'] ?: $res['error'] ?: 'Неизвестная ошибка Telegram API';
      $telegramError = "HTTP Code {$res['code']}: {$errText}";
      logDebug("Telegram Error: " . $telegramError);
    }
  }
} else {
  $telegramError = "TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы!";
  logDebug("Telegram Error: " . $telegramError);
}

$smtpHost = getEnvConfig('SMTP_HOST', '');
$smtpPort = (int)getEnvConfig('SMTP_PORT', 465);
$smtpUser = getEnvConfig('SMTP_USER', '');
$smtpPass = getEnvConfig('SMTP_PASS', '');
$smtpFrom = getEnvConfig('SMTP_FROM', $smtpUser);

$subject = "⛵ Новая заявка: " . $yacht . " (" . $name . ")";

$htmlMessage = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Новая заявка с сайта</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4fcf9; padding: 20px; margin: 0;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; padding: 24px; border-radius: 12px; border: 1px solid #d0e0db; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <h2 style="color: #ff6900; margin-top: 0;">⛵ Новая заявка с сайта ООО «Абсолют-Тур»</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
                <td style="padding: 10px 0; font-weight: bold; width: 150px; color: #4e635f; border-bottom: 1px solid #eee;">Дата и время:</td>
                <td style="padding: 10px 0; color: #05332b; border-bottom: 1px solid #eee;">' . htmlspecialchars($timestamp) . '</td>
            </tr>
            <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4e635f; border-bottom: 1px solid #eee;">Имя клиента:</td>
                <td style="padding: 10px 0; color: #05332b; border-bottom: 1px solid #eee;">' . htmlspecialchars($name) . '</td>
            </tr>
            <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4e635f; border-bottom: 1px solid #eee;">Телефон:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:' . htmlspecialchars($phone) . '" style="color: #ff6900; text-decoration: none; font-weight: bold;">' . htmlspecialchars($phone) . '</a></td>
            </tr>
            <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4e635f; border-bottom: 1px solid #eee;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #ff6900; text-decoration: none;">' . htmlspecialchars($email) . '</a></td>
            </tr>
            <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4e635f; border-bottom: 1px solid #eee;">Яхта:</td>
                <td style="padding: 10px 0; color: #05332b; font-weight: bold; border-bottom: 1px solid #eee;">' . htmlspecialchars($yacht) . '</td>
            </tr>
            <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #4e635f; vertical-align: top;">Комментарий:</td>
                <td style="padding: 10px 0; background: #f6faf9; padding: 12px; border-radius: 6px; color: #05332b;">' . nl2br(htmlspecialchars($comment)) . '</td>
            </tr>
        </table>
        <hr style="margin: 24px 0 16px 0; border: none; border-top: 1px solid #e0e0e0;" />
        <p style="font-size: 12px; color: #7a948e; margin: 0; text-align: center;">Сообщение отправлено с веб-сайта Абсолют-Тур</p>
    </div>
</body>
</html>
';

$phpmailerLoaded = false;
$phpmailerPaths = [
  __DIR__ . '/vendor/phpmailer/PHPMailer.php',
  __DIR__ . '/phpmailer/PHPMailer.php',
  __DIR__ . '/vendor/phpmailer/src/PHPMailer.php',
  __DIR__ . '/../vendor/autoload.php',
];

foreach ($phpmailerPaths as $path) {
  if (file_exists($path)) {
    if (strpos($path, 'autoload.php') !== false) {
      require_once $path;
    } else {
      $baseDir = dirname($path);
      if (file_exists($baseDir . '/Exception.php')) require_once $baseDir . '/Exception.php';
      if (file_exists($baseDir . '/PHPMailer.php')) require_once $baseDir . '/PHPMailer.php';
      if (file_exists($baseDir . '/SMTP.php')) require_once $baseDir . '/SMTP.php';
    }
    $phpmailerLoaded = true;
    break;
  }
}

if ($phpmailerLoaded && class_exists('PHPMailer\PHPMailer\PHPMailer') && !empty($smtpUser) && !empty($smtpPass)) {
  try {
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = ($smtpPort === 465) ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $smtpPort;
    $mail->Timeout    = 5;
    $mail->SMTPOptions = [
      'ssl' => [
        'verify_peer'       => false,
        'verify_peer_name'  => false,
        'allow_self_signed' => true
      ]
    ];

    $mail->setFrom($smtpFrom, 'Абсолют-Тур');
    $mail->addAddress($recipientEmail);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlMessage;

    $emailSent = $mail->send();
  } catch (\Exception $e) {
    $emailError = "PHPMailer: " . $e->getMessage();
    $emailSent = false;
  }
}

if (!$emailSent && !empty($smtpUser) && !empty($smtpPass)) {
  $fallbackErr = '';
  $emailSent = sendSmtpEmailFallback($smtpHost, $smtpPort, $smtpUser, $smtpPass, $smtpFrom, $recipientEmail, $subject, $htmlMessage, $fallbackErr);
  if (!$emailSent && !empty($fallbackErr)) {
    $emailError .= ($emailError ? " | " : "") . "Fallback: " . $fallbackErr;
  }
}

if (!$emailSent) {
  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "From: =?UTF-8?B?" . base64_encode("Абсолют-Тур") . "?= <{$smtpFrom}>\r\n";
  $headers .= "Reply-To: {$email}\r\n";

  $encodedSubject = "=?UTF-8?B?" . base64_encode($subject) . "?=";
  $emailSent = @mail($recipientEmail, $encodedSubject, $htmlMessage, $headers);
  if (!$emailSent && !$emailError) {
    $emailError = "Системная функция mail() вернула false";
  }
}

if (!$telegramSent && !$emailSent) {
  http_response_code(500);
  echo json_encode([
    'success'        => false,
    'error'          => 'Не удалось отправить заявку.',
    'telegram_sent'  => false,
    'telegram_error' => $telegramError ?: 'Ошибка соединения с Telegram API',
    'email_sent'     => false,
    'email_error'    => $emailError ?: 'Ошибка соединения с SMTP сервером Mail.ru'
  ], JSON_UNESCAPED_UNICODE);
  exit();
}

http_response_code(200);
echo json_encode([
  'success'        => true,
  'message'        => 'Заявка успешно обработана!',
  'telegram_sent'  => $telegramSent,
  'telegram_error' => $telegramError ?: null,
  'email_sent'     => $emailSent,
  'email_error'    => $emailError ?: null,
  'data' => [
    'name'      => $name,
    'phone'     => $phone,
    'email'     => $email,
    'yacht'     => $yacht,
    'comment'   => $comment,
    'timestamp' => $timestamp
  ]
], JSON_UNESCAPED_UNICODE);
