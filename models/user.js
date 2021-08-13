var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
   
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    admin: {
        type: Number,
        default: 0
    },
    uid:{
        type: String
    },
    token:{
        type: String
    },
    pics:{
        type: String
    }
    
});

var User = module.exports = mongoose.model('User', UserSchema);

