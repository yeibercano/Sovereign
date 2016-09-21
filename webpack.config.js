const path = require('path');
const webpack = require('webpack');
const validate = require('webpack-validator');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

//PostCSS
const postcssImport = require('postcss-import'),
      precss = require('precss'),
      cssnext = require('postcss-cssnext');

const common = {

  //fastest rebuild and build speed
  devtool: 'eval', 
  entry: [
    //for hot style updates
    'webpack/hot/dev-server',
    //refreshes the browser when it can't hot update
    'webpack-dev-server/client?http://localhost:8080', 
    //our entry point
    './index.js' 
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    // filename: '[name]-[hash].js',
    // chunkFilename: '[name]-[hash].js',
    publicPath: '/build/' //the server will listen in on this path and then proxy Webpack
  },
  stats: {
    colors: true,
    reasons: true,
    chuncks: true
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: '/src'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[name]---[local]---[hash:base64:5]!postcss'),
        include: __dirname + '/src/styles',
      }
    ]
  },
  //Since we're running Webpack from our server, need to manually add the
  //Hot Replacement plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = validate(common);