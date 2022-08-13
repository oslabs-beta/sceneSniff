const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      devtools: path.resolve(__dirname, "..", "src", "devtools.ts"),
      panel: path.resolve(__dirname, "..", "src", "panel.ts")
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
        template: './devtools.html',
        filename: 'devtools.html',
      }),
      new HtmlWebpackPlugin({
         template: './panel.html',
         filename: 'panel.html',
       }),
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
   ],
};