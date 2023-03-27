import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "@/style/scss/style.scss";
import "normalize.css"

// функция регистрации всех глобальных компонентов
import RegistrationsBaseComponents from "./components/register-base-component.js";

const app = createApp(App)

// пример создания асинхронного компонента
const AsyncComp = defineAsyncComponent(() => {
   return import('./views/asyncComp/example.vue')
})

// пример добавления глобального асинхронного компоннента
app.component('async-comp', AsyncComp)
RegistrationsBaseComponents(app)


let vm = app
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount('#app')
