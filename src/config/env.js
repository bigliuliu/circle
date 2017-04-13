/**
 * Created by ubuntu on 4/13/17.
 */
let baseUrl
let routerMode = 'hash'
const imgBaseUrl = 'https://fuss10.elemecdn.com'
if (process.env.NODE_ENV === 'development') {
  baseUrl = ''
} else {
  baseUrl = 'https://mainsite-restapi.ele.me'
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
