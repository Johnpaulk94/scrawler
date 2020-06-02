const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcyrptjs = require('bcryptjs')
const _ = require('lodash')
const jwt = require('jsonwebtoken')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value) {
                return validator.isEmail(value)
            },
            message: function() {
                return 'Invalid Email format'
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    profileInfo: {
        type: String,
        maxlength: 128
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    following: [
        {
            userid: {
                type: Schema.Types.ObjectId
            }
        }
    ],
    followers: [
        {
            userid: {
                type: Schema.Types.ObjectId
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})


const User = mongoose.model('User',userSchema)
module.exports = User