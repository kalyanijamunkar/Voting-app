var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  context: __dirname,
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js'
  },

  devServer: {
    disableHostCheck: true,
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 3000,
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus?paths=node_modules'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-2', 'react'],
          'plugins': ['react-hot-loader/babel']
        },
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=./image/[hash].[ext]'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
