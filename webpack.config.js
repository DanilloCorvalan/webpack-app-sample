module.exports = {
  entry : './app/index.js',

  output : {
    path: 'build',
    publicPath: './build/',
    filename : 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=19000' },
      { test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
            loader: "imports?this=>window!exports?window.Modernizr" }
    ]
  }
};
