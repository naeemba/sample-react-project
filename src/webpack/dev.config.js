const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./common.config');
const path = require('path');

module.exports = merge(commonConfig, {
    devtool: 'eval',
    output: {
        path: path.resolve('src/dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: path.resolve('src'),
        port: '3001',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                ],
            },
            {
                test: /\.jsx?$/,
                include: path.resolve('src'),
                loader: "babel-loader",
            },
            {
                test: [
                    /\.png$/,
                    /\.jpg$/
                ],
                loader: "url-loader"
            },
            {
                test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
                include: './',
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/[name].[ext]',
                    },
                },
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./src/webpack/index.html'),
            inject: true,
            production: false,
            preload: ['*.css']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
});