'use strict';
const {isProd, isDev} = require('./project.config.js')
const modEntry = require('./modificateConfig/modEntry.js')
const modDevOutput = require('./modificateConfig/modificateOutput.js')
const modificateResolve = require('./modificateConfig/modificateResolve.js')
const modificateModuleRule = require('./modificateConfig/modificateModuleRule.js')
const modificatePlugin = require('./modificateConfig/modificatePlugin.js')
const changePathSaveCache = require('./modificateConfig/changePathSaveCache.js')

const modDevServer = require('./modificateConfig/modDevServer.js')
const modDevPlugin = require('./modificateConfig/dev/modDevPlugin.js')

const modProdPlugin = require('./modificateConfig/prod/modProdPlugin.js')


module.exports = function (config) {
  config.context(process.cwd())


  modEntry(config)

  modDevOutput(config)

  modificateResolve(config)

  modificateModuleRule(config)

  modificatePlugin(config)

  changePathSaveCache(config)

  if (process.env.NODE_ENV === 'production') {
    modProdPlugin(config)

  } else {
    modDevServer(config)
    modDevPlugin(config)
  }
}
