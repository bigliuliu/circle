/**
 * Created by ubuntu on 4/25/17.
 */
let mysqlConn = require('./mysqlConn')
exports.check_user = function (username, password) {
  mysqlConn.execQuery({
    sql: 'select * from USER where username = ? and password = ?',
    args: [username, password],
    handler: function (results) {
      if (results) return true
      return false
    }
  })
}

exports.userCircle = function (username) {
  mysqlConn.execQuery({
    sql: 'select clrcle from USER where username = ?',
    args: username,
    handler: function (results) {
      return results
    }
  })
}
