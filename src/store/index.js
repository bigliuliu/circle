import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  user: {
    user_id: null,
    nickname: '',
    avatar: '',
    user_level: '',
    user_score: 0,
    register_date: null
  },
  location: ''
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production'
})

export default store
