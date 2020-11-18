const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const paths = require('./paths')
const common = require('./webpack.common.js')
const dotenv = require('dotenv')
const fs = require('fs') // to check if the file exists
const path = require('path') // to get the current path

// Get the root path (assuming your webpack config is in the root of your project!)
const currentPath = path.join(__dirname, '..')
// Create the fallback path (the production .env)
const basePath = currentPath + '/.env'
// We're concatenating the environment name to our filename to specify the correct env file!
const envPath = basePath + '.' + 'development'
// Check if the file exists, otherwise fall back to the production .env
const finalPath = fs.existsSync(envPath) ? envPath : basePath
// Set the path parameter in the dotenv config
const fileEnv = dotenv.config({ path: finalPath }).parsed
// reduce it to a nice object, the same as before (but with the variables from the file)
const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(fileEnv[next])
  return prev
}, {})

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
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin(envKeys)
  ]
})
