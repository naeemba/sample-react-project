const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./common.config');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = merge(commonConfig, {
    devtool: 'source-map',
    output: {
        path: path.resolve('src/dist'),
        filename: '[name]-[hash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [path.resolve('node_modules')],
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                    ],
                }),
            },
            {
                test: /\.(html|svg|jpe?g|png|ttf|woff2?)$/,
                include: path.resolve('src'),
                exclude: [path.resolve('node_modules')],
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/[name]-[hash:8].[ext]'
                    }
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/webpack/index.html.ejs',
            inject: 'head',
            production: true,
            preload: ['*.css'],
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        new ExtractTextPlugin('style-[contenthash:8].css'),
        new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                },
                output: {
                    comments: false
                },
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
    ],
    performance: {
        maxAssetSize: 300000,
        maxEntrypointSize: 300000,
        hints: 'warning',
    },

});