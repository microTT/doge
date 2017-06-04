const webpack = require('webpack');
const path = require('path');

const baseDir = process.cwd();

const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.resolve(baseDir, 'views/index.js'),
    output: {
        path: path.resolve(baseDir, 'public/assets'),
        filename: 'index.bundle.js'
    },
    devtool: env === 'development' ? 'eval-source-map' : '',
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.pcss$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&localIdentName=[path][name]--[local]--[hash:base64:5]!postcss-loader'),
            loaders: [
                'style-loader',
                'css-loader?modules&localIdentName=[path][name]--[local]--[hash:base64:5]&camelCase',
                'postcss-loader'
            ]
        }, {
            test: /\.png$/,
            loader: 'url-loader',
            query: {
                mimetype: 'image/png'
            }
        }]
    },
    postcss: function() {
        return [
            require('precss'),
            require('autoprefixer')
        ]
    },
    plugins: [
        // new ExtractTextPlugin("index.bundle.css")
    ]
};