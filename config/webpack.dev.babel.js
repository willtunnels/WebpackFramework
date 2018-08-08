import merge from 'webpack-merge';
import common from './webpack.common.js';
import { MakeCssRules } from './webpack.parts.js';

export default merge.smart(common, {
    mode: 'development',
    watch: true,
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        rules: [...MakeCssRules('style-loader')]
    },
});
