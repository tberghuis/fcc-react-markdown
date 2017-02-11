var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },


    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: /(node_modules)/
        },
        {
            test: /\.scss$/,
            loader: "style!css!sass"
        }]
    }
};
