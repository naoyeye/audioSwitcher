var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const vendors = [
  "react",
  "react-dom",
  "classnames",
  "prop-types",
  "redux",
  "react-redux",
  "redux-thunk"
];

module.exports = {
  entry: {
    'vendors': vendors
  },
  output: {
    path: __dirname + './../../public/dest/',
    filename: '[name].bundle.js',
    library: '[name]',
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',  // mainfest.json 文件的输出路径放到根目录下，此文件会用于后续的业务代码打包
      name: '[name]', // dll 暴露的对象名字，要和 output.library 名字相同
      context: __dirname, // context 是解析包的上下文，要与 webpack.config.js 一直
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        warnings: false
      }
    })
  ]
}
