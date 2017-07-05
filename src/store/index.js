import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import token from 'modules/token'
import userInfo from 'modules/userInfo'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    token,
    userInfo
  },
  strict: process.env.NODE_ENV !== 'production'
})

export default store
