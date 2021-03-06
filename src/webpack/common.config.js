const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: path.resolve('src/index.js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve('src'),
                exclude: path.resolve('node_modules'),
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            async: true,
            children: true,
            minChunks: 2,
        }),
    ]
};