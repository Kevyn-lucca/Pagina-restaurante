const HtmlWebpackPlugin = require('html-webpack-plugin');
const Module = require('module');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        filenames: 'index.html',
        inject: 'body',
    }),
  ],
  module:{
    rules:[
    {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
    ], 
  },
};