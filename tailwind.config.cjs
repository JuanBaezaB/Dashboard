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
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      colors: {
        'primary': {
          '50': '#EBF1FD',
          '100': '#D7E3FC',
          '200': '#AFC6F8',
          '300': '#88AAF5',
          '400': '#5F5F61',
          '500': '#2080f6',
          '600': '#1650CF',
          '700': '#1442A7',
          '800': '#0B2866',
          '900': '#071D4A',
        },
        'success': {
          '50': '#E8F6ED',
          '100': '#D1EEDB',
          '500': '#BAE5C8',
          '300': '#8CD4A4',
          '400': '#5EC37F',
          '500': '#01A63E',
          '600': '#307F4A',
          '700': '#21713B',
          '800': '#1B4729',
          '900': '#102A19',
        },
        'error': {
          '50': '#FCEAEA',
          '100': '#F8D5D5',
          '200': '#F1ABAB',
          '300': '#EB8282',
          '400': '#E45858',
          '500': '#E73F3F',
          '600': '#A11A1A',
          '700': '#920E0E',
          '800': '#450B0B',
          '900': '#170404',
        },
        'warning': {
          '50': '#FFF0D8',
          '100': '#FFE9C5',
          '200': '#FFDB9E',
          '300': '#FFD38B',
          '400': '#FFC564',
          '500': '#F4A118',
          '600': '#E49614',
          '700': '#B6760E',
          '800': '#6B470B',
          '900': '#3C2604',
        },
        'Teal': {
          '400': '#1EC3D0',
        },
        'Indigo': {
          '500': '#6774F4'
        },

        // text
        'grey': {
          'primary': '#222124',
          'secondary': '#5F5F61',
          'tertiary': '#A1A0A3',
          'quatinary': '#5A5C60',
          'disabled': '#CBCBCB',
        },

        // background
        'base': {
          'light': '#FFFFFF',
          'body-light': '#F8F8F8',
          'bg': '#F5F5F5',

          'dark': '#1B232E',
          'body-dark': '#12181F',
        },



        //borders
        'borders': {
          'light': '#EFEFEF',
          'default': '#E6E6E6',
          'default-dark':'#F8FAFC',
          'hover': '#E0E0E0',
          'dark': '#222831',
          
          'disabled': '#F4F4F4',
        },


        //actions  
        'actions': {
          'default': '#F1F1F1',
          'hover': '#F6F6F6',
          'alternate': '#E8E8E8',
          'dark': '#404040',
          'disabled': '#EEEEEE',
        },


      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
