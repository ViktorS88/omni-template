'use strict';
const path = require('path')
const {paths} = require("../project.config.js");

const { projectConfig,
  isProd,
  getDevOrProd,
} = require('./../project.config.js')

module.exports = function (config) {

  config.output
    .filename(getDevOrProd(isProd,
      projectConfig.prod.output.filename,
      projectConfig.dev.output.filename))

  config.output
    .publicPath(getDevOrProd(isProd,
      projectConfig.prod.publicPath,
      projectConfig.dev.publicPath))

  config.output
    .chunkFilename(getDevOrProd(isProd,
      projectConfig.prod.output.chunkFilename,
      projectConfig.dev.output.chunkFilename))
}
