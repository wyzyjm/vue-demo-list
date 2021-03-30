import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 1. vant UI库
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);
// 2. vant 组件按需导入
import '@/plugins/vant'

// 根据环境 引入 mock
if (process.env.NODE_ENV === 'development') require('@/api/mock.js')

// rem布局
import '@/config/rem.js'




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
