const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      blue: {
        light: '#0e4d92',
        main: '#003152',
        dark: '#1d2951',
        200: '#BFDBFE',
        100: '#DBEAFE'

      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      green: colors.green
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
