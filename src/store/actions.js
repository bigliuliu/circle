import axios from 'axios'
import {ADD_USER} from './mutation-types.js'

export default {
  /*
   检查用户是否存在
   */
  check_login ({commit, state}, userLogin) {
    axios.post('/user/login', userLogin).then(function (response) {
      // if (response.content) {
      //   commit(ADD_USER, state, response.content)
      // }
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  },
  check_user ({commit, state}, userName, password) {
    axios.get('/user/registry', {
      params: {
        username: userName,
        password: password
      }
    }).then(function (response) {
      if (response.content) {
        commit(ADD_USER, state, response.content)
      }
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
