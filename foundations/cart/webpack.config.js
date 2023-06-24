const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFedrationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFedrationPlugin({
      name: 'carts',
      filename: 'remoteEntry.js',
      exposes: {
        './CartsShow': './src/bootstrap'
      },
      shared: ['faker']
      // shared: { 
      //   faker: {
      //     singleton: true
      //   } 
      // }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",           
    }),
  ]
}