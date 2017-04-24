/**
 * Created by ubuntu on 4/24/17.
 */
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let userSchema = new Schema({
  name: String,
  password: String,
  regist: Number,
  DOB: Date,
  isAlive: Boolean
})

let User = mongoose.model('User', userSchema)

let arvind = new User({
  name: 'Arvind',
  age: 99,
  DOB: '01/01/1915',
  isAlive: true
})

arvind.save(function (err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log('Saved : ', data)
  }
})
