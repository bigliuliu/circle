import axios from 'axios'
import {ADD_USER} from './mutation-types.js'

export default {
  /*
   检查用户是否存在
   */
  check_login ({commit, state}, userLogin, callback) {
    axios.post('/login', userLogin).then(function (response) {
      if (response.body) {
        commit(ADD_USER, state, response.body)
      }
      callback(response.body)
    }).catch(function (error) {
      console.log(error)
    })
  },
  check_user ({commit, state}, userLogin) {
    axios.post('/registry', userLogin).then(function (response) {
      if (response.body) {
        commit(ADD_USER, state, response.body)
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
}
