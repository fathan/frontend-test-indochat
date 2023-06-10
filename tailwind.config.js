module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '14rem'
      }
    },
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      '200': 200,
      '400': 400,
      '600': 600,
      '800': 800,
      '1000': 1000,
      '9999': 9999,
      'auto': 'auto'
    }
  },
  plugins: [],
}
