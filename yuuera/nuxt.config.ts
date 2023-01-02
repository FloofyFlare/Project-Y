// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/appStyles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@pinia/nuxt',
    'nuxt-headlessui',
    '@nuxtjs/tailwindcss'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Content module configuration: https://go.nuxtjs.dev/config-content

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
