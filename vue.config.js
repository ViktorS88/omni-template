'use strict';
// const {defineConfig} = require('@vue/cli-service')
const modificationCallback = require('./service/modificationCallbak.js')
const {paths} = require('./service/project.config.js')
const {SourceMapDevToolPlugin} = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {
  projectConfig,
  getDevOrProd,
  isDev,
  isProd,
} = require('./service/project.config.js')

const path = require('path');

module.exports = {
  transpileDependencies: true,

  outputDir: getDevOrProd(isProd,
    paths.resolve(projectConfig.prod.outputDir),
    paths.resolve(projectConfig.dev.outputDir)),

  configureWebpack: {
    // TODO позже разобраться с настройками cache в проекте
    // cache: {
    // },
    // optimization: {
    //   minimizer: [new CssMinimizerPlugin()],
    // },
    devtool: isDev ? 'eval-cheap-module-source-map' : 'source-map',
  },

  chainWebpack: modificationCallback
}
