import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api/base_url'
Vue.config.productionTip = false
Vue.prototype.$http = api
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
