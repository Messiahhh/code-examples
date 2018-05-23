var webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader',
                options: {
                    name: 'img/[name].[ext]'
                }
            }
        ]
    }
}
