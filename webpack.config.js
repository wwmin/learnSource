var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: ['./src/app.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/static'),
        publicPath: 'static/',
        filename: '[name].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', ['css'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', ['css', 'sass'])
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: '../index.html',//这里的路径是相对于path配置的
            template: './src/view/index.html',
            inject: true
        })
    ]
}
