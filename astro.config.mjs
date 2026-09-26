import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  // Todo el sitio es estático: Netlify lo sirve desde su CDN, sin funciones
  output: 'static',
  redirects: {
    '/': { status: 301, destination: '/es/' },
  },
  integrations: [
    // Los estilos base se importan desde src/styles/global.css
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en-US' },
      },
    }),
    robotsTxt(),
  ],
  site: 'https://piccoliaugusto.com.ar/',
})
