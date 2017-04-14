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
  shopDetail: null, // 商家详情信息
  userInfo: null,
  shopid: null,
  remarkText: '',
  inputText: '',
  invoice: false, // 开发票
  newAddress: [],
  searchAddress: null,
  geohash: 'wtw3sm0q087', // 地址geohash值
  choosedAddress: null,
  addressIndex: null,
  needValidation: null,
  cartId: null,
  sig: null,
  orderParam: null,
  orderMessage: null,
  orderDetail: null,
  login: true,
  imgPath: null, // 头像
  removeAddress: [],
  addAddress: '',
  question: null,
  cartPrice: null // 会员价格
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
