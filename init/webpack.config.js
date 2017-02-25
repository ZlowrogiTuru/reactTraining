const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/app.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: path.resolve(__dirname, './public/js'),
    filename: '[name].js',
    publicPath: '/public/js'
  },

  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [
        path.resolve(__dirname, 'src/app.js')
      ],
      test: [/\.js$/]
    }]
  },

  resolve: {
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    })
  ],

  devtool: 'source-map'
};
