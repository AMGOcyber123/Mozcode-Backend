const mongoose = require('mongoose')

const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
const numRegex = /^\s*(?:\+?(\d{1,3}))[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
        trim: true,
        validate: numRegex
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: emailRegex
    },
    username: {
        type: String,
        required: true,
        unique: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User