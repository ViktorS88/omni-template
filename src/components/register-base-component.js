'use strict'
export default function (app) {
//глобальная регистрация компонентов
  const requireComponent = require.context(
    './base/',
    false,
    /_base-[\w-]+\.vue$/
    // /base[A-Z]\w+\.(vue|js)$/
  )
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName)
    const componentName = fileName
      .replace(/^\.\/_/, '')
      .replace(/\.\w+$/, '')
      .split('-')
      .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      .join('')
    // console.log(componentName);

    app.component(componentName, componentConfig.default || componentConfig)
  })

}

