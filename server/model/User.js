const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['MANAGER', 'SUPERVISOR', 'ADMINISTRATOR']
    },
    verified: {
        type: Boolean,
        default: false
    } 
})

module.exports = User = mongoose.model('user', UserSchema)