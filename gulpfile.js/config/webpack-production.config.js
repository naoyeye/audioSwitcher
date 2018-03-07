var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = require('./make-webpack-config.js')({
  devtool: 'inline-source-map',
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          sourceMap: true,
          warnings: false
        }
      })
    ]
  },
  plugins: [
    new webpack.IgnorePlugin(/regenerator|nodent|js-beautify/, /ajv/),
    new ExtractTextPlugin("[name].css"),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./../../manifest.json')
    }),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("production")
    //   }
    // }),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
