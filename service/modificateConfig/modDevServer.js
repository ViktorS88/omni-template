'use strict';
const {projectConfig} = require('./../project.config.js')
module.exports = function (config) {
  config.merge({
    devServer: {
      // debug: true,
      open: false,
      host: '0.0.0.0',
      port: 8080,
      liveReload: true,
      hot: false,
      historyApiFallback: {
        rewrites: [{from: /./, to: '/index.html'}],
      },
      client: {
        webSocketURL: 'auto://0.0.0.0/ws'
      },
      devMiddleware: {
        publicPath: projectConfig.dev.publicPath,
        writeToDisk: true,
      },
      // static: {
      //   directory: paths.resolve('src/assets/js'),
      //   serveIndex: true,
      // },
      headers: {
        // 'X-Custom-Foo': 'bar',
      },
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      // ignored: /node_modules/,
    },

  })
}
