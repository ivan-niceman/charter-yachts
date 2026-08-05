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

    const bookingDetails = {
      timestamp: new Date().toLocaleString('ru-RU'),
      name,
      phone,
      email,
      yacht: yacht || 'Общий подбор тура',
      comment: comment || 'Без комментария',
      recipientEmail: 'nice-dev@list.ru',
      telegramRecipient: '@ivan_niceman'
    };

    console.log('--- НОВАЯ ЗАЯВКА С САЙТА ООО «АБСОЛЮТ-ТУР» ---');
    console.log(bookingDetails);

    return new Response(JSON.stringify({
      success: true,
      message: 'Заявка успешно отправлена! Наш эксперт свяжется с вами в течение 15 минут.',
      data: bookingDetails
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Ошибка обработки запроса' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
