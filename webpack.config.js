'use strict';

/* eslint camelcase: 'off' */

const path = require('path');
const webpack = require('webpack');

const port = process.env.PORT || 8080;

function getConfig() {
    return {
        devtool: 'source-map',

        entry: [
            path.join(__dirname, 'app/index.js')
        ],

        devServer: {
            inline: true,
            port: port
        },

        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: path.join(__dirname, 'app'),
                    loaders: ['babel-loader']
                }
            ]
        },

        plugins: [
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    unused: true,
                    dead_code: true,
                    warnings: true,
                    screw_ie8: true
                },
                compressor: {
                    warnings: false
                },
                minimize: true,
                sourceMap: true
            })
        ]
    };
}

module.exports = getConfig();
