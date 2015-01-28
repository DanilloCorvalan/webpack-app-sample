var webpack = require('webpack');

module.exports = {
  entry : {
    index : './app/index.js',
    index2 : './app/index2.js'
  },

  output : {
    path: 'build',
    publicPath: './build/',
    filename : '[name].js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=19000' },
      { test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
            loader: "imports?this=>window!exports?window.Modernizr" }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.DefinePlugin({
      __PRODUCTION__: JSON.stringify(JSON.parse(process.env.BUILD_PROD || 'false')),
    })
  ]
};
