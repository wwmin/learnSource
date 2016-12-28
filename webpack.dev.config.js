var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ['./src/app.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/static'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '../index.html',//这里的路径是相对于path配置的
            template: './src/view/index.html',
            inject: true
        })
    ]
};
