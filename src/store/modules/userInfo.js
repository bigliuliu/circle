/**
 * Created by spark on 7/5/17.
 */
import {USERINFO} from '../mutation-types'
import {saveUserInfo, getUser} from '../../util/userStorage'
import {getUserByName} from '../../api/login'

const state = {
  userInfo: {}
}

const mutations = {
  [USERINFO] (state, userInfo) {
    state.userInfo = userInfo
    saveUserInfo(userInfo)
  }
}

const actions = {
  getUserInfo: ({commit}, username) => {
    getUserByName(
      username,
      response => {
        commit(USERINFO, response.data)
      },
      err => {
        console.log(err)
      })
  },
  getUser: ({ commit }) => {
    const userInfo = getUser()
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
