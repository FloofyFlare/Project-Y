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

          secondary: '#4C4C4C',

          accent: '#202040',

          neutral: '#333333',

          'base-100': '#4C4C4C',

          info: '#ffffff',

          success: '#4C4C4C ',

          warning: '#002E6D',

          error: '#F17720',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
