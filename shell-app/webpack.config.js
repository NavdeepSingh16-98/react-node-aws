const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        dashboard: "dashboard@http://localhost:3001/remoteEntry.js",
        settings: "settings@http://localhost:3002/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    port: 3000,
  },
};
