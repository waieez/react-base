'use strict'
var webpack = require('webpack');
var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: __dirname,
      filename: "./build/index.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ["babel-loader"]},
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
