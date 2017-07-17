/**
 * Created by spark on 17-7-17.
 */
import axios from 'axios'
import Qs from 'qs'
import { HOST_CONCIG, KEY_CONFIG } from './config'

export const fetchArticleDetail = (id, okCallback, errorCallback) => {
  let oauthData = {
    client_id: KEY_CONFIG.client_id,
    id: id,
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
}

export const saveUpdateArticle = (id, okCallback, errorCallback) => {
  let oauthData = {
    client_id: KEY_CONFIG.client_id,
    id: id,
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
}

export const getRemoteArticleCategory = (id, okCallback, errorCallback) => {
  let oauthData = {
    client_id: KEY_CONFIG.client_id,
    id: id,
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
}

export const fetchUploadImage = (id, okCallback, errorCallback) => {
  let oauthData = {
    client_id: KEY_CONFIG.client_id,
    id: id,
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
}

export const fetchUploadAvatar = (id, okCallback, errorCallback) => {
  let oauthData = {
    client_id: KEY_CONFIG.client_id,
    id: id,
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
}
