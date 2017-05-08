/**
 * Created by ubuntu on 4/24/17.
 */
let mongoose = require('mongoose')
let Schema = mongoose.Schema
let stateSchema = new Schema({
  user_id: Number,
  clrcle_id: Number,
  content: String,
  release: Date,
  img_url: [String]
})

let State = mongoose.model('State', stateSchema)

let arvind = new State({
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
