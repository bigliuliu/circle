import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  latitude: '',   // 纬度
  longitude: '',  // 经度
  cartList: {}, // 加入购物车的商品列表
  shopDetail: null // 商家详情信息
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
