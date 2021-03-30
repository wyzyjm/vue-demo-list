import Vue from 'vue'
import VueRouter from 'vue-router'



// 使用路由
Vue.use(VueRouter)


// 引入路由
import routes from './routes'


const router = new VueRouter({
  mode: 'history', // 网站地址好看点
  routes
})

export default router
