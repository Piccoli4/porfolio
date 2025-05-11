import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server', 
  adapter: netlify (),
  integrations: [tailwind(), robotsTxt()],
  site: 'https://piccoliaugusto.com.ar/',
  i18n: {
    locales: ['en', 'es'], 
    defaultLocale: 'es',  
  },
})
