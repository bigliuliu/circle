/**
 * Created by ubuntu on 5/11/17.
 */
// var mysql = require('../../service/mysql/mysqlConn')
// mysql.execQuery({
//   sql: 'SELECT 1 + 1 AS solution',
//   handler: function (result) {
//     console.log(result)
//   }
// })

var mysql = require('../../service/mysql/userService')
function a () {
  mysql.check_login('a', 'aaa', function (result) {
    console.log(result)
  })
}
a()

