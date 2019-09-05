const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      }, {
        test: /\.css$/,
        use: [
          { loader: env.production ? MiniCssExtractPlugin.loader : 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: env.development,
              modules: true,
            }
          },
          { loader: 'postcss-loader' },
        ]
      }, {
        test: /.(jpe?g|png|gif)/,
        loader: 'url-loader',
        options: {
          name: env.production ? 'images/[hash:6].[name].[ext]' : 'images/[name].[ext]',
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: env.production ? 'css/[contenthash:6].[name].css' : 'css/[name].css',
      chunkFilename: env.production ? 'css/[contenthash:6].[name].chunk.css' : 'css/[name].chunk.css',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port: '3000',
    compress: true,
  }
});