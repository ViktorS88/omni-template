'use strict';
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = function (config) {
  config.plugin('copy')
    // .use(CopyWebpackPlugin)
    .tap(options => {
      options[0].patterns.push(
        {
          from: '/usr/node_app/app/src/assets',
          to: '/usr/node_app/app/dist/prod/static',
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

  config.plugin('CssMinimizerPlugin').use(CssMinimizerPlugin, [])
  config.optimization.minimize(true)

}
