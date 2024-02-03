// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from 'vite-plugin-wasm';
export default defineNuxtConfig({
  // Global page headers: https://go.nuxtjs.dev/config-head
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/appStyles.scss'],
  //I cant mess with the Nuxt tailwindwidnd:{} file Oof or daisy will not work
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  vite: {
    plugins: [wasm()],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/robots','@pinia-plugin-persistedstate/nuxt', '@pinia/nuxt'],
  ssr: true,
  devtools: { enabled: true },
});
