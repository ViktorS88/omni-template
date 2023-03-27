'use strict';
const path = require('path')
// const paths = require("./../project.config.js");

module.exports = function (config) {
  const absPath = path.resolve("./node_modules")
  const resolveMod = config.resolve.modules
  const reosolveLoaderMod = config.resolveLoader.modules

  config.resolve.alias
    .clear()
    .set('@', path.resolve('./src'))
    .set('nd', path.resolve('./../node_modules'))
    .set('vue$', 'vue/dist/vue.runtime.esm-bundler.js')

  function setResolve(setOld) {
    let arrFirstPath = []
    let state = true
    setOld.values().forEach((item) => {
      // if (item === 'node_modules') {
      //   setOld.delete('node_modules')
      //   state = false
      // }
      if (item === absPath) {
        setOld.delete(absPath)
        state = false
      }
      if (state) {
        arrFirstPath.push(item)
      }

    })
    setOld.prepend( path.resolve('./../node_modules'))
    setOld.prepend( './../node_modules')

    arrFirstPath.reverse().forEach((item) => {
      setOld.prepend(item)
    })
  }

  setResolve(resolveMod)
  setResolve(reosolveLoaderMod)


}
