import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stampyx.com',
  // Two built locales, not a runtime toggle: the display:none swap flashes the wrong language.
  build: { format: 'directory' },
});
