// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "DR Shop",
      meta: [
        {
          name: "description",
          content: "Mechanical Keyboard Site",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bitter:wght@100&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],

});
