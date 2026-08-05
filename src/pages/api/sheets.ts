import type { APIRoute } from 'astro';
import { fetchInitialDataServerSide } from '../../lib/sheets';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const data = await fetchInitialDataServerSide();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=10'
      }
    });
  } catch (e) {
    console.error('API sheets endpoint error:', e);
    return new Response(JSON.stringify({ error: 'Failed to fetch sheet data' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
