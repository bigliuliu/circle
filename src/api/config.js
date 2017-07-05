/**
 * Created by spark on 7/5/17.
 */
const keyConfig = {
  client_id: 'circle',
  app_secret: 'Basic ' + btoa('circle:secret'),
  redirect_uri: 'http://localhost:8089/splash'
}

const hostConfig = {
  host: 'http://localhost:8080',
  oauth: 'http://localhost:8080/oauth/token'
}

const apiRouter = {
  follower: '/api/follower',
  contonent: '/api/contonent',
  userInfo: '/api/user'
}

export const KEY_CONFIG = keyConfig
export const HOST_CONCIG = hostConfig
export const API_ROUTER = apiRouter
