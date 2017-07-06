/**
 * Created by spark on 7/6/17.
 */
import {oauthPost} from '../../../src/api/login'

describe('login.js的测试', function () {
  it('expires_in应该是59', function () {
    let user = {username: 'aa', password: 'bb'}
    oauthPost(user, function (response) {
      response.data.expires_in.shoule.equal(59)
    })
  })
})

describe('login.js的测试', function () {
  it('response data has refresh', function () {
    let user = {username: 'aa', password: 'bb'}
    oauthPost(user, function (response) {
      response.data.should.hadOwnProperty('refresh')
    })
  })
})
