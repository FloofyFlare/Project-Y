// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/appStyles.scss'],
  //I cant mess with the Nuxt tailwindwidnd:{} file Oof or daisy will not work

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  image: {
    format: ['webp'],
    domains: ['yuuera.com'],
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/robots'],
  ssr: true,
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Content module configuration: https://go.nuxtjs.dev/config-content

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
})
