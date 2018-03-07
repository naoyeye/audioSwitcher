var _ = require('lodash-node')
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var autoprefixer = require('autoprefixer')
var BROWSERSLIST_CONFIG = ['ie 8', 'safari >= 3', 'chrome >= 34', '']

module.exports = function(customConfig) {
  var defaultConfig = {
    output: {
      path: path.resolve(__dirname, './../../public/dest/'),
      filename: '[name].js',
      chunkFilename: '[chunkhash].js',
      sourceMapFilename: '../../sourcemap/[file].map',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use:[
              {
                loader: 'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loading) => {
                    return [
                      autoprefixer({ browsers: BROWSERSLIST_CONFIG })
                    ]
                  }
                }
              }
            ]
          })
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  modules: false
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  plugins: (loading) => {
                    return [
                      autoprefixer({ browsers: BROWSERSLIST_CONFIG })
                    ]
                  }
                }
              },
              'sass-loader'
            ]
          })
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules\/(?!(product-selector)\/).*/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    resolve: {
      extensions: [
        '.js',
        '.jsx',
        '.web.js'
      ],
      modules: [
        'node_modules',
        './static_resource'
      ]
    },
    externals: {},
    plugins: [],
    target: 'web'
  }

  customConfig.plugins = defaultConfig.plugins.concat(customConfig.plugins||[])

  var result = _.assign({}, defaultConfig, customConfig)

  return result

}
