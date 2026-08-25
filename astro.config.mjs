import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stampyx.com',
  // Two built locales rather than a runtime toggle: the mockup's display:none swap has a
  // visible flash of the wrong language on first paint, and static pages index better.
  build: { format: 'directory' },
});
