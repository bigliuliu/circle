/**
 * Created by spark on 7/5/17.
 */
import {USERINFO} from '../mutation-types'
import {saveUserInfo, clearUserInfo, getUser} from '../../util/userStorage'
import {getUserByName} from '../../api/login'

const state = {
  userInfo: {}
}

const mutations = {
  [USERINFO] (state, userInfo) {
    'use strict'
    state.userInfo = userInfo
    saveUserInfo(userInfo)
  }
}

const actions = {
  getUserInfo: ({commit}, username) => {
    'use strict'
    getUserByName(
      username,
      response => {
        commit(USERINFO, response.data)
      },
      err => {
        console.log(err);
      })
  },
  getUser: ({ commit }) => {
    const userInfo = getUser();
    if (userInfo) {
      commit(USERINFO, JSON.parse(userInfo))
    }
  }
}

export default {
  state,
  actions,
  mutations
}
