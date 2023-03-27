'use strict';
const path = require('path')

module.exports = function (config) {
  config.entry('app')
      .clear()
      .add(path.resolve('./') + '/src/main.js')
      .add(path.resolve('./') + '/src/js/exp/exp.js')
      .add(path.resolve('./') + '/src/js/ms/ms.js')
      .add(path.resolve('./') + '/src/js/vs/vs.js')
      .end();
}
