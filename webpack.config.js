var path = require('path');
var webpack = require('webpack');
var ngminPlugin = require('ngmin-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var appRoot = path.join(__dirname, '/src');
var bowerRoot = path.join(__dirname, '/bower_components');

module.exports = {
  cache: true,
  debug: true,

  // The entry point
  entry: [
    path.join(appRoot, '/app.js')
  ],

  output: {
    path: path.join(__dirname, './dist'),
    publicPath: './',
    libraryTarget: 'var',
    filename: '[hash].bundle.js',
		chunkFilename: '[chunkhash].js'
  },

  module: {
    loaders: [
      {
        // required to write 'require('./style.css')'
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&includePaths[]=' + bowerRoot + '/'
      },
      {
        test: /\.coffee$/,
        loader: 'coffee'
      },
      {
        // require raw html for partials
        test: /\.tpl\.html$/,
        loader: 'ng-cache'
      },
      {
        // required for bootstrap icons
        test: /\.(woff|woff2)(\?(.*))?$/,
        loader: 'url?prefix=factorynts/&limit=5000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?(.*))?$/,
        loader: 'file?prefix=fonts/'
      },
      {
        test: /\.eot(\?(.*))?$/,
        loader: 'file?prefix=fonts/'
      },
      {
        test: /\.svg(\?(.*))?$/,
        loader: 'file?prefix=fonts/'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],

    // don't parse some dependencies to speed up build.
    // can probably do this non-AMD/CommonJS deps
    noParse: [
      path.join(bowerRoot, '/lodash/dist/lodash.js'),
      path.join(bowerRoot, '/jquery/dist/jquery.js'),
      path.join(bowerRoot, '/angular-route'),
      path.join(bowerRoot, '/angular-ui-router'),
      path.join(bowerRoot, '/angular-sanitize'),
      path.join(bowerRoot, '/angular-ui-select'),
      path.join(bowerRoot, '/angular-mocks'),
      path.join(bowerRoot, '/angular')
    ],
  },

  resolve: {
    alias: {
      bower: bowerRoot,
      'lodash': bowerRoot + '/lodash/dist/lodash.js'
    },

    extensions: [
      '',
      '.js',
      '.coffee',
      '.scss',
      '.css'
    ],

    root: [appRoot],
  },

  singleRun: true,

  plugins: [
    // bower.json resolving
    new webpack.ResolverPlugin([
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ], ['normal', 'loader']),

    // disable dynamic requires
    new webpack.ContextReplacementPlugin(/.*$/, /a^/),

    new webpack.ProvidePlugin({
      'angular': 'exports?window.angular!bower/angular',
      '_': 'lodash'
    }),

    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),

    new ExtractTextPlugin("[name].css")


  ],

  devtool: 'eval'
}
