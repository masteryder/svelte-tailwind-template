const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["src/**/*.svelte", "public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      highlight: '#ff3e00',
      gray: colors.trueGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
