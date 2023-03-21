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
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F17720',

          secondary: '#fcb37e',

          accent: '#ebebeb',

          neutral: '#000000',

          'base-100': '#808080',

          info: '#00a7e1',

          success: '#F17720',

          warning: '#F17720',

          error: '#F17720',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
