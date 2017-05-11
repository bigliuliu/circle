/**
 * Created by ubuntu on 5/10/17.
 */
const express = require('express')
const fs = require('fs')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const routers = require('./routers/index')
const users = require('./routers/users')
const resolve = file => path.resolve(__dirname, file)

var app = express()
app.use(logger('dev'))
app.set('port', (process.env.port || 3000))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/dist', express.static(resolve('../dist')))
app.use('/', routers)
app.use('/user', users)
app.get('*', function (req, res) {
  const fileName = 'index.html'
  const html = fs.readFileSync(resolve('../' + fileName), 'utf-8')
  // const html = fs.readFileSync(resolve('../setup.html'), 'utf-8')
  res.send(html)
})

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})

module.exports = app
