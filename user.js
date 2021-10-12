const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    fname:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true

    },
    password:{
        type: String, 
        required: true,
        trim: true

    }
})


const User = mongoose.model('User', UserSchema)

const currentUser = new User({
    fname: " rocko",
    password: "abcdef"
})

module.exports={
    User,
    currentUser
}