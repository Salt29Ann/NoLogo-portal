const { defineConfig } = require("cypress");
const path = require('path');
const webpack = require('@cypress/webpack-preprocessor');

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 10000,
  video: false,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",

  e2e: {
    experimentalStudio: true,
    retries: {
      openMode: 2,
      // runMode: 2,
    },
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            alias: {
              fixtures: path.resolve(__dirname, 'cypress/fixtures')
            }
          },
          module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }
            ]
          }
        }
      };
      on('file:preprocessor', webpack(options));

    },
  },
});
