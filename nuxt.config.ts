// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: false,
  //devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/font.css'],
  modules: ['@nuxt/image'],
  app: {
    head: {
      title: 'Full Stack Web Developer',
      meta: [
        { name: 'description', content: 'I\'m a full stack web developer, with 4 years of experience, I\'m mostly good at laravel/php and vueJs, but i have good knowledge on several languages/frameworks, so don\'t hesitate to contact me about anything. what i do like in my projects is clarity and simplicity.' },
        { property: 'og:image', content: 'https://houiderwalid.com/houider-walid-image.png' }
      ]
    }
  },
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
