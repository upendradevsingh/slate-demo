const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: `./src/main.js`,
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  }
};
