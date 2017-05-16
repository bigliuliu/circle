import axios from 'axios'
import {ADD_USER} from './mutation-types.js'
import router from '../router'
export default {
  /*
   检查用户是否存在
   */
  check_login ({commit, state}, userLogin) {
    axios.post('/login', userLogin).then(function (response) {
      if (response) {
        commit(ADD_USER, state, response.body)
        router.push('/user_home')
      }
    }).catch(function (error) {
      console.log(error)
    })
  },
  check_user ({commit, state}, userLogin) {
    axios.post('/registry', userLogin).then(function (response) {
      if (response) {
        commit(ADD_USER, state, response.body)
        router.push('/user_home')
      }
    }).catch(function (error) {
      console.log(error)
    })
  }
}
