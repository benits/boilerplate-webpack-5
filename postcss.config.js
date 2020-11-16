module.exports = {
  plugins: [
    require('autoprefixer'),
    {
      'postcss-preset-env': {
        browsers: 'last 2 versions',
      },
    },
  ],
};
