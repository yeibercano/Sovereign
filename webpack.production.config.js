var webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
const validate = require('webpack-validator');

// Plugins
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

var config = {
  // We change to normal source mapping 
  // cheap-module-source-map removes helpers included in source-map
  devtool: 'cheap-module-source-map', 
  entry: {
    app: PATHS.app,
    styles: [ PATHS.styles ]
  },
  output: {
    path: buildPath,
    // filename: 'bundle.js'
    filename: 'js/[name].[hash].js',
    // This is used for require.ensure. The setup
    // will work without but this is useful to set.
    chunkFilename: '[hash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: '/node_modules'
      },
      { 
        test: /\.s?css$/, 
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        include: __dirname + '/src/styles',
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file?hash=sha512&digest=hex&name=[hash].[ext]!image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        include: PATHS.images
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.scss', '.json'],
      modulesDirectories: [
        'node_modules'
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
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new CleanWebpackPlugin(buildPath, {
        // Without `root` CleanWebpackPlugin won't point to our
        // project and will fail to work.
        root: process.cwd()
    }),
    new ExtractTextPlugin('/styles/[name].[contentHash].css', {allChunks: true}),
    new HtmlWebpackPlugin({
      title: 'Sovereign',
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   mangle: false,
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new ManifestPlugin()
  ],
};

module.exports = validate(config);

