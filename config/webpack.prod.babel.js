import merge from 'webpack-merge';
import webpack from 'webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import common from './webpack.common.js';
import { MakeCssRules } from './webpack.parts.js';

export default merge.smart(common, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            ...MakeCssRules(MiniCssExtractPlugin.loader),
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: ['image-webpack-loader'],
                enforce: 'pre'
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin()
        ]
    }
});
