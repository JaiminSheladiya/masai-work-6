const {Schema , model} = require('mongoose');

const UserSchema = new Schema({
    username : String , 
    password : String,
    age : Number,
    role : {
        type : String,
        enum : ['Student' , 'Instructor' , 'Admin']
    }
})

const UserModel = model('user' , UserSchema)
module.exports = UserModel