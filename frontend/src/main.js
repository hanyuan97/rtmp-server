import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import http from './plugins/http'
import "./assets/css/style.scss"

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
