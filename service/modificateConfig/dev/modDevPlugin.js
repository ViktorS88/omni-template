'use strict';
const {SourceMapDevToolPlugin} = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function (config) {
  config.plugin('SourceMapDevToolPlugin')
    .use(SourceMapDevToolPlugin, [{
      exclude: [/[\\/]node_modules[\\/]/],
      test: /\.(js|css|vue|html)?$/,
    }])

  config.plugin('copy')
    // .use(CopyWebpackPlugin)
    .tap(options => {
      options[0].patterns.push(
        {
          from: '/usr/node_app/app/src/assets',
          to: '/usr/node_app/app/dist/dev/static',
          toType: 'dir',
          noErrorOnMissing: true,
          globOptions: {
            ignore: [
              '**/.DS_Store',
              '/usr/node_app/app/public/index.html'
            ]
          },
          info: {
            minimized: true
          }
        },
      )
      return options
    })

}
