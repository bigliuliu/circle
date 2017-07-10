/**
 * Created by spark on 7/5/17.
 */
import axios from 'axios'
import Qs from 'qs'
import { HOST_CONCIG, KEY_CONFIG, API_ROUTER } from './config'
import { logger } from '../util/loggerUtils'
import store from '../store/'

export const oauthPost = (user, okCallback, errorCallback) => {
  let oauthData = {
    client_id: KEY_CONFIG.client_id,
    password: user.password,
    username: user.username,
    grant_type: 'password'
  }
  let config = {
    method: 'post',
    url: HOST_CONCIG.oauth,
    data: Qs.stringify(oauthData),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': KEY_CONFIG.app_secret
    }
  }
  axios(config)
    .then(function (response) {
      logger('oauthPost-ok', 'oauthPost response succeed')
      okCallback(response)
    })
    .catch(function (error) {
      console.log(error)
      errorCallback(error)
    })
}

export const getUserByName = (username, okCallback, errorCallback) => {
  const accesstoken = store.getters.token.access_token
  let config = {
    method: 'get',
    url: API_ROUTER.userInfo,
    baseUrl: HOST_CONCIG.host,
    param: username,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accesstoken
    }
  }
  axios(config)
    .then(function (response) {
      logger('getUserByName-ok', 'getUserByName response succeed')
      okCallback(response)
    })
    .catch(function (error) {
      console.log(error)
      errorCallback(error)
    })
}

export const refreshToken = (token, okCallback, errorCallback) => {
  let requestData = {
    refresh_token: token.refresh_token,
    grant_type: 'refresh_token'
  }
  let config = {
    method: 'post',
    url: HOST_CONCIG.oauth,
    data: requestData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': KEY_CONFIG.app_secret
    }
  }
  axios(config)
    .then(function (response) {
      logger('refreshToken-ok', 'refreshToken response succeed')
      okCallback(response)
    })
    .catch(function (error) {
      console.log(error)
      errorCallback(error)
    })
}
