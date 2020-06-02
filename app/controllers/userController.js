const express = require('express')
const User = require('../models/user')


module.exports.list = (req,res) => {
    User.find()
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            res.json(err)
        })
}
