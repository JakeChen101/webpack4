const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// console.log(JSON.parse(process.env.npm_config_argv).original[2].split('--')[1]);

// 本地开发不单独提取css
const styleLoader = process.env.ENV_VAR !== 'local' ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
    entry: {
        app: path.resolve('src/main.js')
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/'
    },
    externals: {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve('src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [
                    path.resolve('src'),
                    path.resolve('node_modules/webpack-dev-server/client')
                ]
            },
            {
                test: /\.(sa|sc|le|c)ss$/,
                use: [
                    styleLoader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: (loader) => [
                                require('autoprefixer')(),
                                require('postcss-import')({ root: loader.resourcePath }),
                                require('cssnano')()
                            ]
                        }
                    },
                    {
                        loader: 'px2rem-loader',
                        options: {
                            remUnit: 75 // 设计稿宽度/10
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/images/[name].[hash:16].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/media/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    performance: {
        hints: false
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    name: 'vendors/library',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                }
            }
        },
        runtimeChunk: {
            name: 'vendors/manifest',
        }
    },
    plugins: [
        // 创建html的入口文件
        new HtmlWebpackPlugin({
            name: 'index.html',
            template: path.resolve('src/index.html'),
            showErrors: true
        }),

        new VueLoaderPlugin(),

        // 全局变量
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // }),

        // 全局常量
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.ENV_VAR)
            }
        })
    ]
};
