const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const baseConfig = require('./webpack.base.config');

const os = require('os');
const networkInterfaces = os.networkInterfaces();
let ip;

for (let key in networkInterfaces) {
  networkInterfaces[key].forEach(item => {
    if (!item.internal && item.family === 'IPv4') {
      ip = item.address;
    }
  });
}

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    filename: 'static/[name].js',
    chunkFilename: 'static/[name].js',
    publicPath: '/'
  },
  devtool: 'cheap-module-eval-source-map',
  watchOptions: {
      ignored: /node_modules/,
  },
  devServer: {
    host: ip,
    port: 8181,
    open: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/[name].css'
    })
  ]
});
