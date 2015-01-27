module.exports = {
  entry : './app/index.js',

  output : {
    path: 'build',
    filename : 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
