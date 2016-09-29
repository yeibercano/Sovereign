const path = require('path')
const webpack =require('webpack')
const validate = require('webpack-validator');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//PostCSS
const postcssImport = require('postcss-import'),
      precss = require('precss'),
      cssnext = require('postcss-cssnext'),
      rucksack = require('rucksack-css');

const PATHS = {
  app: path.join(__dirname, './index.js'),
  styles: path.join(__dirname, 'src/styles/main.css'),
  build: path.join(__dirname, 'public'),
  images: path.join(__dirname, 'src/styles/assets')
};

const config = {

  //fastest rebuild and build speed
  devtool: 'eval', 
  entry: [
    //for hot style updates
    'webpack/hot/dev-server',
    //refreshes the browser when it can't hot update
    'webpack-dev-server/client?http://localhost:8080', 
    //our entry point
    PATHS.app,
    PATHS.styles 
  ],
  output: {
    path: path.join(__dirname, 'public', 'build'),
    filename: 'bundle.js',
    publicPath: '/build/' //the server will listen in on this path and then proxy Webpack
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', ['css','postcss'])
        // include: __dirname + '/src/styles'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        include: PATHS.images
      }
    ]
  },
  postcss: function (webpack) {
    return [ 
      postcssImport({
        addDependencyTo: webpack
      }),
      precss,
      rucksack,
      cssnext
    ];
  },
  //Since we're running Webpack from our server, need to manually add the
  //Hot Replacement plugin
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('main.css')

  ]
};

module.exports = validate(config);






