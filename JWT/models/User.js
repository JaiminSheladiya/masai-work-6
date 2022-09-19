const { Schema , model } = require('mongoose')

const UserSchema = new Schema({
    name : String,
    password : String,
    age : Number,
})

const UserModel = model('user', UserSchema)

module.exports = UserModel