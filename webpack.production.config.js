var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

// Plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: ['./index.js', './src/styles/main.css'],
  output: {
    path: buildPath,
    // filename: 'bundle.js'
    filename: 'js/[name].[hash].js',
    // This is used for require.ensure. The setup
    // will work without but this is useful to set.
    chunkFilename: '[hash].js'
  },
  stats: {
    colors: true,
    reasons: true,
    chuncks: false
  },
  plugins: [
    new ExtractTextPlugin('/styles/[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      mangle: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Sovereign',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(buildPath, {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
    }),
    new ManifestPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel?presets[]=react,presets[]=es2015',
        exclude: '/node_modules'
      },
      //This converts our .css into JS
      { 
        test: /\.s?css$/, 
        // loaders: ['style', 'css', 'sass?outputStyle=expanded'] },
        loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader']),
        include: __dirname + '/src/styles',
      }
    ]
  },

  resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss', '.json'],
      modulesDirectories: [
        'node_modules'
      ]        
  },
};

module.exports = config;