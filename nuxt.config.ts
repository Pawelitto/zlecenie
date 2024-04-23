// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/fonts',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Unica+One': true,
          Karla: true,
        },
      },
    ],
  ],
});
