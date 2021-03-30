import Vue from 'vue'
// 根组件
import App from './App.vue'
// 路由配置
import router from './router'
// vuex 配置
import store from './store'

import Axios from 'axios'

Vue.prototype.http = Axios

Vue.config.productionTip = false

new Vue({
  router, // 路由
  store, // vuex
  render: h => h(App)
}).$mount('#app')
