module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'forest-green': '#14532d',
      'laurel-green': {
        100: '#bec5ad',
        200: '#a4b494',
      },
      'black-coral': '#696d7d',
      'auburn': '#9e2a2b',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
