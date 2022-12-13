/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        ui: ['FZMiaoWu', ...defaultTheme.fontFamily.sans],
        loli: ['loli', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        phone: { raw: '(max-width: 568px)' },
        desktop: { raw: '(min-width: 1100px)' },
        tablet: { raw: '(max-width: 1099px)' },
        wider: { raw: '(min-width: 1500px)' },

        w900: { raw: '(max-width: 900px)' },
      },
      colors: {
        "color":"var(--content-bg)",
        "dark-color":"var(--dark-content-bg)",
      }
    },
  },
  plugins: [],
}
