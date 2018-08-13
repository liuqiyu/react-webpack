const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'
            },
            // 处理css、style
            {
                test: /\.css$/, use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // 处理各种图标、图片文件
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // 处理字体
            {
                test: /\.(woff|woff2|eto|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    plugins: [
        // 在dist文件夹中生成index.html
        new HtmlWebpackPlugin({
            title: 'Demo',
            template: './index.html'
        }),
        // 清空dist文件夹中文件
        new CleanWebpackPlugin(['dist'])
    ]
};