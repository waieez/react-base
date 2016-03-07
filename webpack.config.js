'use strict'
var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: __dirname,
      filename: "./build/index.js"
    },
    resolve: {
      modulesDirectories: [
        'node_modules',
        path.resolve(__dirname, './node_modules')
      ]
    },
    module: {
        loaders: [
          {
            test: /(\.js|\.jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel'
          },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
