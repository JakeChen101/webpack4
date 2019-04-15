const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: "production",
  output: {
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
    publicPath: '/design/'
  },
  devtool: process.env.ENV_VAR === 'production' ? '' : 'cheap-module-eval-source-map',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.(sa|sc|le|c)ss$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  },
  plugins: [
    // 清除dist
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve('./')
    }),

    // 提取css
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css'
    })
  ]
});
