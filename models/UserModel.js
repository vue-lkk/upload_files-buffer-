const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:['男','女']
  }
})

let UserModel = mongoose.model('users',UserSchema)

module.exports = UserModel