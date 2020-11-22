const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  output: {
    filename: 'static/js/[name].[fullhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
    new HtmlWebpackPlugin({
      title: 'IrshadTMDb | Movies',
      filename: 'index.html',
      template: path.resolve(__dirname, '../public/index.html'),
      favicon: path.resolve(__dirname, '../public/icons/favicon.ico')
    }),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../build'),
    historyApiFallback: true,
    port: 3000
  },
};
