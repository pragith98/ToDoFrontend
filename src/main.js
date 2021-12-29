import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate';

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.component('ValidationProvider',ValidationProvider)
Vue.component('ValidationObserver',ValidationObserver)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
