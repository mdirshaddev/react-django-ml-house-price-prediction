const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images"
        }
      },
      {
        test: /\.(aac|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "audio",
            esModule: false
          }
        }
      },
      {
        test: /\.(webm|mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "video",
            esModule: false
          }
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: 'IrshadTMDb',
      short_name: 'Movie Database',
      description: 'Movie Database',
      background_color: '#ffffff',
      theme_color: "#ddd",
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      publicPath: '/',
      includeDirectory: true,
      icons: [
        {
          src: path.resolve(__dirname, '../src/images/New look of my terminal.png'),
          sizes: [96, 128, 192, 256, 384, 512, 1024],
          destination: path.join('icons', 'icon')
        }
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    })
  ],
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },
  stats: 'verbose'
};
