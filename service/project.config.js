'use strict'
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const getAssetPath = (...args) => path.posix.join('stat', ...args)
const resolve = (...args) => path.posix.join(process.cwd(), ...args)
function getDevOrProd(startArg, argTrue, argFalse) {
  if (startArg) return argTrue
  return argFalse
}

exports.paths = {getAssetPath, resolve}
exports.isDev = isDev
exports.isProd = isProd
exports.getDevOrProd = getDevOrProd

exports.projectConfig = {
  dev: {
    outputDir: 'dist/dev',
    publicPath: '/',
    port: 8090,
    output: {
      filename: `js/[name].js`,
      chunkFilename: `js/[name].js`,
    },
  },

  prod: {
    outputDir: 'dist/prod',
    publicPath: '/',
    output: {
      filename: `js/[name].[contenthash:8].js`,
      chunkFilename: `js/[name].[contenthash:8].js`,
    },
  },
}
