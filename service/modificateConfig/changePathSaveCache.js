'use strict';
const path = require('path')

function changePathSaveCache(config, module) {
  const cacheDirectoryPath = path.resolve('./../node_modules/.cache/') + '/'
  for (let i = 0; i < module.rule.length; i++) {
    config.module
      .rule(module.rule[i])
      .use(module.use[i])
      .tap(options => {
        options.cacheDirectory = cacheDirectoryPath + module.use[i]
        return options
      })
  }
}

module.exports = function (config) {

  // TODO позже доделать эту реализацию, пока не работате vue-cli
  //  номрально что бы можно было избежать node_modules на hoste
  // changePathSaveCache(config, {
  //     rule: ['vue', 'js'],
  //     use: ['vue-loader', 'babel-loader']
  //   })

}
