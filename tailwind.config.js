module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green':{
        50: '#EFFBF4',
        100: '#DEF7E9',
        200: '#BDEFD3',
      },
      'forest-green': '#14532d',
      'laurel-green': {
        100: '#bec5ad',
        200: '#a4b494',
      },
      'black-coral': '#696d7d',
      'auburn': '#9e2a2b',
    },
    fontSize: {
      sm: '0.8rem',
      base: '0.9rem',
      lg: '1.25rem',
      xl: '2.25rem',
      twoxl: '6.5rem',

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
