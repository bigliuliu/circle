/**
 * Created by ubuntu on 5/10/17.
 */
let express = require('express')
let router = express.Router()
let User = require('../mysql/userService')
let crypto = require('crypto')
/* GET users listing. */
router.post('/registry', function (req, res, next) {
  let md5 = crypto.createHash('md5')
  let password = md5.update(req.body.password).digest('hex')
  User.user_registry(req.body.username, password, function (result) {
    res.send(result)
    console.log('registry res: ' + JSON.stringify(result))
  })
})

router.post('/login', function (req, res, next) {
  let md5 = crypto.createHash('md5')
  let password = md5.update(req.body.password).digest('hex')
  User.check_login(req.body.username, password, function (result) {
    console.log('login res: ' + JSON.stringify(result))
    res.send(result)
  })
})

module.exports = router
