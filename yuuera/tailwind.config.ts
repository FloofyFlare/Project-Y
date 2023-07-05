/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F17720',

          secondary: '#47b9ff',

          accent: '#3782fb',

          neutral: '#d3d3d3',

          'base-100': '#F7F7F7',

          info: '#FFFFFF',

          success: '#F17720',

          warning: '#F17720',

          error: '#F17720',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
