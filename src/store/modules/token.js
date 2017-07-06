/**
 * Created by spark on 7/5/17.
 */
import {LOGIN, LOGOUT} from '../mutation-types'
import {saveToken, clearToken, getToken} from '../../util/tokenStorage'
import {oauthPost} from '../../api/login'

const state = {
  token: {},
  login: false
}

const mutations = {
  [LOGIN] (state, token) {
    state.token = token
    state.login = true
    saveToken(token)
  },
  [LOGOUT] (state) {
    state.token = {}
    state.login = false
    clearToken()
  }
}

const actions = {
  login: ({commit}, user) => {
    oauthPost(
      user,
      response => {
        commit(LOGIN, response.data)
      },
      err => {
        console.log(err)
      })
  },
  getToken: ({commit}) => {
    const token = getToken()
    if (token) {
      commit(LOGIN, JSON.parse(token))
    }
  }
}

export default {
  state,
  actions,
  mutations
}

