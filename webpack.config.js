const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, './src/index.js')
    ],
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // hash: true,
            filename: 'index.html',
            template: __dirname + '/src/index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        })
    ],
    module: {
        loaders: [
          {
            test: /\.scss$/i,
            loaders: [
                'css-loader?minimize',
                'sass-loader'
            ]
          },
          {
            test: /\.less$/,
            use: [
              {loader: "style-loader"},
              {loader: "css-loader"},
              {
                loader: "less-loader",
                options: {
                    javascriptEnabled: true
                }
              }
            ]
          },
          {
              test: /\.css$/i,
              loader: 'css-loader?-minimize',

          },
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                plugins: [
                  ['import', { libraryName: "antd", style: true }]
                ]
              },
          }
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].[chunkhash].js',
        publicPath: "/"
    },
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        publicPath: "/",
        historyApiFallback: true
    }
};
