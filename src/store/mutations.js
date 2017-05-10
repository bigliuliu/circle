import {ADD_USER} from './mutation-types.js'

export default {
  [ADD_USER] (state, user) {
    state.user = user
  }
}
