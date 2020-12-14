const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')
const paths = require('./paths')
const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const options = { fileName: 'asset-manifest.json' }

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [`${paths.src}/index.jsx`],

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].[contenthash].bundle.js',
    publicPath: '/'
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store']
          }
        }
      ]
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: process.env.TITLE_APPLICATION,
      favicon: `${paths.src}/assets/icons/favicon.ico`,
      template: `${paths.src}/html/template.html`, // template file
      filename: 'index.html' // output file
    }),
    new WebpackManifestPlugin(options)
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[contenthash]-[name].[ext]'
          }
        }
      },

      // Svg: Copy image files and loader to build folder
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              generator: content => svgToMiniDataURI(content.toString())
            }
          }
        ]
      },

      // Fonts and SVGs: Inline files
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: '[name]-[contenthash].[ext]'
        },
        type: 'asset/inline'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [paths.src, '../node_modules'],
    alias: {
      '@src': paths.src,
      '@components': `${paths.src}/components`,
      '@assets': `${paths.src}/assets`,
      '@services': `${paths.src}/services`,
      '@styles': `${paths.src}/styles`
    }
  }
}
