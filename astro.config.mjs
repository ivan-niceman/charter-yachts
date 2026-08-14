import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://xn----7sbd4boodkbk1j.xn--p1ai/',
  integrations: [sitemap()],
});
