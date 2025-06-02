// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  //devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],
  modules: ['@nuxt/image'],
  image: {
    // Optional: Set dir or domains if needed
    dir: 'public', // default
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
