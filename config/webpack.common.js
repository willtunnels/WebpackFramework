import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ROOT, SRC, DIST, ASSETS } from './paths.js';

export default {
    entry: {
        bundle: path.resolve(SRC, 'index.js')
    },
    output: {
        path: DIST,
        publicPath: ASSETS,
    },
    resolve: {
        alias: {
            Views: path.resolve(SRC, 'views'),
            Components: path.resolve(SRC, 'components')
        }
    },
    plugins: [
        new CleanWebpackPlugin([DIST], {
            root: ROOT
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC, 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        name: './fonts/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10 * 1024,
                        name: './images/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'svg-url-loader',
                    options: {
                        limit: 10 * 1024,
                        noquotes: true,
                        name: './images/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/, 
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};
