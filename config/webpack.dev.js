const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const paths = require('./paths')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    overlay: true,
    stats: { colors: true },
    port: 3000,
    onListening(server) {
      const { port } = server.listeningApp.address()
      // eslint-disable-next-line no-console
      console.log('Listening on port:', port)
    }
  },

  plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new BundleAnalyzerPlugin()
  ]
})
