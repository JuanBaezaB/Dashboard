/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins']
      },
      screens: {
        'lg': '992px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
