// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 4000
  },
  srcDir: 'app/',
  app: {
    head: {
      title: 'SaSaShop – Discover the Best Products',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: 'SaSaShop – Your one-stop shop for quality products at the best prices. Shop electronics, fashion, home & kitchen, beauty and more.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/handbag.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: [],
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/main.css'
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@heroicons/vue/24/outline'],
    }
  },
})
