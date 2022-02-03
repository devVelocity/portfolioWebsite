const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'bluemain':'rgb(75,75,255)'
      }
    },
  },
  plugins: [],
}
