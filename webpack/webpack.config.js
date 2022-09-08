const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    background: path.resolve(__dirname, '..', 'src', 'DevtoolContent', 'background.ts'),
    devtools: path.resolve(__dirname, '..', 'src', 'DevtoolContent', 'devtools.ts'),
    panel: path.resolve(__dirname, '..', 'src', 'DevtoolContent', 'panel.tsx'),
    canvasSpy: path.resolve(__dirname, '..', 'src', 'DevtoolContent', 'canvasSpy.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|.jsx)?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/DevtoolContent/devtools.html',
      filename: 'devtools.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({
      template: './src/DevtoolContent/panel.html',
      filename: 'panel.html',
      inject: false,
    }),
    new CopyPlugin({
      patterns: [{ from: '.', to: '.', context: 'public' }],
    }),
  ],
};
