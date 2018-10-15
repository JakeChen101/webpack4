const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    devtool: 'cheap-module-eval-source-map',
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        host: 'localhost',
        port: 8899,
        open: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});
