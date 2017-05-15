/**
 * Created by ubuntu on 4/25/17.
 */
let mysqlConn = require('./mysqlConn')

let selectUser = function (userId, callback) {
  return mysqlConn.execQuery({
    sql: 'SELECT user_id,nickname,avatar,user_level,user_score,register_date FROM USER WHERE user_id = ?',
    args: [userId],
    handler: callback
  })
}

let selectUserId = function (username, password, callback) {
  return mysqlConn.execQuery({
    sql: 'SELECT user_id FROM USER_AUTHS WHERE identifier = ? AND password = ?',
    args: [username, password],
    handler: callback
  })
}

exports.check_login = function (username, password, callback) {
  selectUserId(username, password, function (result1) {
    if (result1[0]) {
      console.log(result1[0])
      selectUser(result1[0].user_id, function (result2) {
        callback(result2[0])
      })
    } else {
      callback(false)
    }
  })
}

exports.user_registry = function (username, password, callback) {
  selectUserId(username, password, function (result1) {
    if (result1.length !== 0) return callback(false)
    mysqlConn.execQuery({
      sql: 'INSERT INTO USER (nickname, avatar, register_date, user_level, user_score) VALUES (?, ?, ?, ?, ?)',
      args: [username, password, new Date(), '遊民1', 0],
      handler: function () {
        mysqlConn.execQuery({
          sql: 'SELECT * FROM USER WHERE nickname = ?',
          args: [username],
          handler: function (result2) {
            mysqlConn.execQuery({
              sql: 'INSERT INTO USER_AUTHS (user_id, identity_type, identifier, password, is_third) VALUES (?,?,?,?,?)',
              args: [result2[0].user_id, 'uname', username, password, false],
              handler: function () {
                callback(result2[0])
              }
            })
          }
        })
      }
    })
  })
}
