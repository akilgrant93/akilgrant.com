module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '128': '100vh',
      },
      width: {
        '200': '25rem',
        '21': '21.5rem',
        '22': '43rem'
      }
    },
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
      'slate': {
        500: 'rgb(203 213 225)'
      },
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
      'new-green': 'rgba(20, 83, 45, .25)',
      'light-salmon': 'rgba(255, 169, 135, .5)',
      'mountbatten-pink': 'rgba(156, 122, 151, .5)',
      'black-coral': '#696d7d',
      'auburn': '#9e2a2b',
    },
    fontSize: {
      xs: '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      lg: '1.25rem',
      halfxl: '1.9rem',
      xl: '2.25rem',
      twoxl: '6.5rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
