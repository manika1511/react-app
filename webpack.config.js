"use strict";

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: 'js/bundle.min.js'
    },
    module: {
        loaders: [
            {
              test: /\.(js|jsx)$/,
              loader: 'babel-loader',
              exclude: '/node_modules/'
            },
            {
              test: /\.css$/,
              loader: "style!css"
            },
            {
              test: /\.(sass|scss)$/,
              loader: 'style-loader!css-loader!sass-loader',
            },
        ]
    }
};
