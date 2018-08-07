import path from 'path';
import { ROOT, SRC, DIST, ASSETS } from './paths.babel.js';

import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
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
