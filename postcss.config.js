const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    autoprefixer(),
    {
      'postcss-preset-env': {
        browsers: 'last 2 versions'
      }
    }
  ]
}
