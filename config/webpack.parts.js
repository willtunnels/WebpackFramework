function MakeCSSRule(loader, useModules, options) {
    return {
        test: /\.(sa|sc|c)ss$/,
        use: [
            loader,
            {
                loader: 'css-loader',
                options: {
                    modules: useModules,  
                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
            },
            'sass-loader'
        ],
        ...options
    };
}

export function MakeCssRules(loader) {
    return [
        MakeCSSRule(loader, false, { include: /[\\/]node_modules[\\/]/ }),
        MakeCSSRule(loader, true,  { exclude: /[\\/]node_modules[\\/]/ })
    ];
}

