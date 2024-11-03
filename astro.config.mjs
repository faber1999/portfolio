// astro.config.mjs
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://fabergrajales.dev',
  output: 'static', // o 'hybrid' para soporte mixto
  integrations: [tailwind()],
  experimental: {
    contentCollectionCache: true
  },
  devToolbar: {
    enabled: false
  }
})
