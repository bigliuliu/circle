/**
 * Created by ubuntu on 5/10/17.
 */
var express = require('express')
var router = express.Router()
// var User = require('../mysql/userService')
/* GET users listing. */
router.post('/login', function (req, res, next) {
  // var md5 = crypto.createHash('md5')
  // var password = md5.update(req.body.password).digest('hex')
  // User.check_user(req.body.username, password)
  // res.send('respond with a resource')
  console.log(req)
})

module.exports = router
