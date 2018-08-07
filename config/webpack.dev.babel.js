import merge from 'webpack-merge';
import common from './webpack.common.babel.js';

export default merge.smart(common, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    'sass-loader'
                ]
            }
        ]
    },
});
