import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // site: 'https://charter-yachts.ru',
  site: 'https://ivan-niceman.github.io',
  base: '/charter-yachts/',
  integrations: [sitemap()],
});
