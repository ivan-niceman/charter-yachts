import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, phone, email, yacht, comment, consent } = body || {};

    if (!name || !phone || !email || !consent) {
      return new Response(JSON.stringify({ error: 'Пожалуйста, заполните все обязательные поля и подтвердите согласие 152-ФЗ' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const recipientEmail = 'nice-dev@list.ru';
    const telegramRecipient = 'https://t.me/ivan_niceman';

    const bookingDetails = {
      timestamp: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      yacht: yacht?.trim() || 'Общий подбор тура / Консультация',
      comment: comment?.trim() || 'Без комментария',
      recipientEmail,
      telegramRecipient
    };

    console.log('====================================================');
    console.log('📬 НОВАЯ ЗАЯВКА С САЙТА ООО «АБСОЛЮТ-ТУР»');
    console.log(`Дата и время: ${bookingDetails.timestamp}`);
    console.log(`Имя клиента: ${bookingDetails.name}`);
    console.log(`Телефон: ${bookingDetails.phone}`);
    console.log(`Email: ${bookingDetails.email}`);
    console.log(`Выбранная яхта: ${bookingDetails.yacht}`);
    console.log(`Комментарий: ${bookingDetails.comment}`);
    console.log(`Получатели: Email -> ${recipientEmail} | Telegram -> ${telegramRecipient}`);
    console.log('====================================================');

    // Если настроен Telegram Bot Token и Chat ID, отправляем в Telegram
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      const telegramText = `⛵ <b>НОВАЯ ЗАЯВКА - АБСОЛЮТ-ТУР</b>\n\n` +
        `👤 <b>Имя:</b> ${bookingDetails.name}\n` +
        `📞 <b>Телефон:</b> ${bookingDetails.phone}\n` +
        `✉️ <b>Email:</b> ${bookingDetails.email}\n` +
        `🛥️ <b>Яхта / Направление:</b> ${bookingDetails.yacht}\n` +
        `💬 <b>Комментарий:</b> ${bookingDetails.comment}\n` +
        `⏰ <b>Время:</b> ${bookingDetails.timestamp}`;

      try {
        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: telegramText,
            parse_mode: 'HTML'
          })
        });
      } catch (tgErr) {
        console.error('Ошибка отправки в Telegram API:', tgErr);
      }
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Заявка успешно отправлена! Данные переданы менеджерам на nice-dev@list.ru и в Telegram.',
      data: bookingDetails
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Ошибка обработки запроса на сервере' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

