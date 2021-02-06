const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],

  theme: {
    colors:{
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: {
        '50': '#f8fcf6', 
        '100': '#f2f9ec', 
        '200': '#def0d0', 
        '300': '#c9e6b4', 
        '400': '#a1d47b', 
        '500': '#79c143', 
        '600': '#6dae3c', 
        '700': '#5b9132', 
        '800': '#497428', 
        '900': '#3b5f21'
    },
    'blue': {
      '50': '#f6f9f9', 
      '100': '#eef2f4', 
      '200': '#d4dfe3', 
      '300': '#b9ccd2', 
      '400': '#6A9BAA', 
      '500': '#51808e', 
      '600': '#497380', 
      '700': '#3F636E', 
      '800': '#314d55', 
      '900': '#283f46'
  }
    },
    extend: {},
  },
  variants: {
    float: ['responsive', 'direction'],
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
    borderWidth:['responsive','direction']
  },
  plugins: [
    require('tailwindcss-dir')(),
  ],
}
