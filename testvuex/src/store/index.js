import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// 购物车模块
import cart from './cart/index'

const store = new Vuex.Store({
  // 数据值
  state,
  // 计算属性
  getters,
  // 方法
  mutations,
  // 异步方法
  actions,
  // 模块
  modules: {
    cart
  }
})


export default store