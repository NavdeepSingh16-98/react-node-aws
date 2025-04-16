const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const settingsConfig = {
  mode: 'development',
  devServer: {
    port: 3002, // Unique port for the Settings app
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'settings',
      filename: 'remoteEntry.js', // This file will expose the microfrontend
      exposes: {
        './App': './src/App', // Exposing the Settings app
      },
      shared: { 
        react: { singleton: true }, 
        'react-dom': { singleton: true } 
      },
    }),
  ],
};

module.exports = merge(commonConfig, settingsConfig);
