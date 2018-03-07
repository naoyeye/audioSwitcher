var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = require('./make-webpack-config.js')({
  cache: true,
  devtool: 'eval',
  mode: 'development',
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    // new webpack.DefinePlugin({
    //   "process.env": {
    //     NODE_ENV: JSON.stringify("dev")
    //   }
    // }),

    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('./../../manifest.json'),
    // }),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
})
