export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],

  modules: ["nuxt-lodash"],

  build: {
    transpile: ['vuetify'],
  },
  
  plugins: [
    '~/plugins/axios'
  ],

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
