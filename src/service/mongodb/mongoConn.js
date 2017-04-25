/**
 * Created by ubuntu on 4/24/17.
 */
let mongoose = require('mongoose')    // 引用mongoose模块
mongoose.connect('mongodb://localhost/circle')
let db = mongoose.connection

db.on('error', function callback () {
  console.log('Connection error')
})

db.once('open', function callback () {
  console.log('Mongo working!')
})

module.exports = db
