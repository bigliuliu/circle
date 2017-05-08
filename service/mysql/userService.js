/**
 * Created by ubuntu on 4/25/17.
 */
let mysqlConn = require('./mysqlConn')
exports.check_user = function (username, password) {
  mysqlConn.execQuery({
    sql: 'SELECT user_id FROM USER_AUTHS WHERE identity_type = ? AND identifier = ? AND password = ?',
    args: [username, password],
    handler: function (results) {
      return results
    }
  })
}

exports.userCircle = function (username) {
  mysqlConn.execQuery({
    sql: 'SELECT user_id FROM USER_AUTHS WHERE identity_type = ? AND identifier = ? AND password = ?',
    args: username,
    handler: function (results) {
      return results
    }
  })
}
