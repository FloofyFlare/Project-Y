/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  daisyui: {
  themes: [
    {
      mytheme: {
          
         
      "primary": "#F17720",
          
      "secondary": "#F17720",
          
      "accent": "#00a7e1",
          
      "neutral": "#F17720",
          
      "base-100": "#ebebeb",
          
      "info": "#00a7e1",

      "success": "#F17720",
          
      "warning": "#F17720",
          
      "error": "#F17720",
      },
    },
  ],
  
  },
  plugins: [
    require('daisyui')
  ],
}
