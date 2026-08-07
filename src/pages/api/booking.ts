import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, email, yacht, comment, consent } = body || {};

    if (!name || !phone || !email || !consent) {
      return new Response(
        JSON.stringify({
          error:
            'Пожалуйста, заполните все обязательные поля и подтвердите согласие 152-ФЗ',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    const env = { ...process.env, ...import.meta.env };

    const recipientEmail = env.NOTIFICATION_EMAIL || 'nice-dev@list.ru';
    const telegramRecipient = '@AbsoluteTourBot';
    // const telegramRecipient = 'https://t.me/ivan_niceman';

    const bookingDetails = {
      timestamp: new Date().toLocaleString('ru-RU', {
        timeZone: 'Europe/Moscow',
      }),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      yacht: yacht?.trim() || 'Общий подбор тура / Консультация',
      comment: comment?.trim() || 'Без комментария',
      recipientEmail,
      telegramRecipient,
    };

    console.log('====================================================');
    console.log('📬 НОВАЯ ЗАЯВКА С САЙТА ООО «АБСОЛЮТ-ТУР»');
    console.log(`Дата и время: ${bookingDetails.timestamp}`);
    console.log(`Имя клиента: ${bookingDetails.name}`);
    console.log(`Телефон: ${bookingDetails.phone}`);
    console.log(`Email клиента: ${bookingDetails.email}`);
    console.log(`Выбранная яхта: ${bookingDetails.yacht}`);
    console.log(`Комментарий: ${bookingDetails.comment}`);
    console.log(
      `Получатели: Email -> ${recipientEmail} | Telegram -> ${telegramRecipient}`,
    );
    console.log('====================================================');

    // --- 1. Отправка в Telegram ---
    const botToken = env.TELEGRAM_BOT_TOKEN;
    const chatId = env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramText =
        `⛵ <b>НОВАЯ ЗАЯВКА — АБСОЛЮТ-ТУР</b>\n\n` +
        `👤 <b>Имя:</b> ${bookingDetails.name}\n` +
        `📞 <b>Телефон:</b> ${bookingDetails.phone}\n` +
        `✉️ <b>Email:</b> ${bookingDetails.email}\n` +
        `🛥️ <b>Яхта / Направление:</b> ${bookingDetails.yacht}\n` +
        `💬 <b>Комментарий:</b> ${bookingDetails.comment}\n` +
        `⏰ <b>Время:</b> ${bookingDetails.timestamp}`;

      try {
        const tgRes = await fetch(
          `https://api.telegram.org/bot${botToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: telegramText,
              parse_mode: 'HTML',
            }),
          },
        );

        if (!tgRes.ok) {
          const errData = await tgRes.json();
          console.error('❌ Ошибка Telegram Bot API:', errData);
        } else {
          console.log(
            `✅ Успешно отправлено уведомление в Telegram (Chat ID: ${chatId})`,
          );
        }
      } catch (tgErr) {
        console.error('❌ Ошибка сети при отправке в Telegram API:', tgErr);
      }
    } else {
      console.log('ℹ️ TELEGRAM_BOT_TOKEN не задан в переменных окружения.');
    }

    // --- 2. Отправка письма через Nodemailer ---
    const smtpHost = env.SMTP_HOST || 'smtp.list.ru';
    const smtpPort = Number(env.SMTP_PORT || 465);
    const smtpSecure = env.SMTP_SECURE !== 'false';
    const smtpUser = env.SMTP_USER || 'nice-dev@list.ru';
    const smtpPass = env.SMTP_PASS;
    const smtpFrom = env.SMTP_FROM || smtpUser;

    let emailSent = false;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h2 style="color: #0284c7; margin-top: 0;">⛵ Новая заявка с сайта ООО «Абсолют-Тур»</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px;">Дата и время:</td>
                <td style="padding: 8px 0;">${bookingDetails.timestamp}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Имя клиента:</td>
                <td style="padding: 8px 0;">${bookingDetails.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Телефон:</td>
                <td style="padding: 8px 0;"><a href="tel:${bookingDetails.phone}">${bookingDetails.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${bookingDetails.email}">${bookingDetails.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Яхта / Направление:</td>
                <td style="padding: 8px 0;">${bookingDetails.yacht}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Комментарий:</td>
                <td style="padding: 8px 0; background: #f9fafb; padding: 10px; border-radius: 4px;">${bookingDetails.comment}</td>
              </tr>
            </table>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #6b7280; margin: 0;">Уведомление отправлено автоматически с веб-сайта «Абсолют-Тур».</p>
          </div>
        `;

        await transporter.sendMail({
          from: `"Абсолют-Тур" <${smtpFrom}>`,
          to: recipientEmail,
          subject: `⛵ Новая заявка: ${bookingDetails.yacht} (${bookingDetails.name})`,
          text: `Новая заявка с сайта ООО «Абсолют-Тур»\n\nИмя: ${bookingDetails.name}\nТелефон: ${bookingDetails.phone}\nEmail: ${bookingDetails.email}\nЯхта: ${bookingDetails.yacht}\nКомментарий: ${bookingDetails.comment}\nВремя: ${bookingDetails.timestamp}`,
          html: htmlContent,
        });

        console.log(
          `✅ Письмо успешно отправлено на ${recipientEmail} через Nodemailer (${smtpHost})`,
        );
        emailSent = true;
      } catch (mailErr) {
        console.error('❌ Ошибка отправки письма через Nodemailer:', mailErr);
      }
    } else {
      console.log(
        'ℹ️ SMTP_PASS не указан в .env. Для отправки писем укажите пароль приложения в SMTP_PASS.',
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: emailSent
          ? 'Заявка успешно отправлена! Данные переданы менеджерам на email и в Telegram.'
          : 'Заявка успешно принята! (Telegram отправлен, для Email укажите SMTP_PASS в .env)',
        data: bookingDetails,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (err) {
    console.error('Ошибка на сервере:', err);
    return new Response(
      JSON.stringify({ error: 'Ошибка обработки запроса на сервере' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  }
};
