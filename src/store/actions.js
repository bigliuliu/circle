import {ADD_USER} from './mutation-types.js'

export default {
  /*
   检查用户是否存在
   */
  check_login ({commit, state}, data) {
    commit(ADD_USER, state, data)
  }
}
