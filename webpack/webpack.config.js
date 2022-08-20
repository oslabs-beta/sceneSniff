const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');
const { SrcAlphaFactor } = require('three');
module.exports = {
   mode: "production",
   entry: {
      background: path.resolve(__dirname, "..", "src", "background.ts"),
      devtools: path.resolve(__dirname, "..", "src", "devtools.ts"),
      panel: path.resolve(__dirname, "..", "src", "panel.tsx"),
      canvasSpy: path.resolve(__dirname, '..', 'src', 'canvasSpy.ts'),
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "[name].js",
   },
   resolve: {
      extensions: [".ts", ".js", ".tsx", ".jsx"],
   },
   module: {
      rules: [
         {
            test: /\.(js|.jsx)?$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
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
        inject: false,
      }),
      new HtmlWebpackPlugin({
         template: './panel.html',
         filename: 'panel.html',
         inject: false,
       }),
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "public"}]
      }),
      // new CopyPlugin({
      //    patterns: [
      //       {from: "../src/canvasSpy.js", to: ".", context: 'src', info: { minimized: true },},
      //    ],
      // }),
   ],
};