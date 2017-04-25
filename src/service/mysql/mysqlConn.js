/**
 * Created by ubuntu on 4/25/17.
 */
let mysql = require('mysql')
let pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost:3306',
  user: 'boot',
  password: 'boot',
  database: 'circle',
  'supportBigNumbers': true,
  'bigNumberStrings': true
})

exports.release = function (connection) {
  connection.end(function (error) {
    console.log('Connection closed:' + error.message())
  })
}
exports.execQuery = function (options) {
  pool.getConnection(function (error, connection) {
    if (error) {
      console.log('DB-获取数据库连接异常！')
      throw error
    }

    /*
     * connection.query('USE ' + config.db, function(error, results) { if(error) { console.log('DB-选择数据库异常！'); connection.end(); throw error; } });
     */

    // 查询参数
    let sql = options['sql']
    let args = options['args']
    let handler = options['handler']

    // 执行查询
    if (!args) {
      let query = connection.query(sql, function (error, results) {
        if (error) {
          console.log('DB-执行查询语句异常！')
          throw error
        }

        // 处理结果
        handler(results)
      })

      console.log(query.sql)
    } else {
      let query = connection.query(sql, args, function (error, results) {
        if (error) {
          console.log('DB-执行查询语句异常！')
          throw error
        }

        // 处理结果
        handler(results)
      })

      console.log(query.sql)
    }

    // 返回连接池
    connection.release(function (error) {
      if (error) {
        console.log('DB-关闭数据库连接异常！')
        throw error
      }
    })
  })
}
