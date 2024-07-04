// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/main.scss"],
  modules: ["@formkit/nuxt", "@pinia/nuxt", "@nuxtjs/i18n"],
});
