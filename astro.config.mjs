// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://gidsly.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
    routing: {
      // English keeps its current URLs (/, /pricing, ...) -- no /en/
      // prefix, no redirects, no disruption to anything already
      // indexed. Dutch lives under /nl/.
      prefixDefaultLocale: false,
    },
  },
});
