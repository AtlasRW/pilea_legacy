module.exports = {
  purge: [
    './app/views/**/*.html.erb',
    './app/views/**/*.js.erb',
    './app/assets/**/*.vue',
    './app/assets/**/*.css',
    './app/assets/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Leckerli One', 'Roboto', 'Arial', 'sans-serif'],
        body: ['Inter', 'Roboto', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '7rem',
        '9xl': '9rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
