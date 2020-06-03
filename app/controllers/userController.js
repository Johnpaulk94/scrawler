const _ = require('lodash')
const User = require('../models/User')
const Post = require('../models/Post')

module.exports.register = (req,res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then(user => {
            res.send(_.pick(user,['_id','username','email']))
        })
        .catch(err => {
            res.send(err)
        })
}


module.exports.login = (req,res) => {
    const body = req.body
    User.findByCredentials(body)
        .then(function(user) {
            return user.generateToken()
        })
        .then(function(data){
            res.send(data)
        })
        .catch(err => {
            res.send({error: err})
        })
}

module.exports.update= function(req,res) {
    const body = req.body
    const {user} = body
    User.findOneAndUpdate({_id: user._id},body,{new: true})
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.send(err)
        })

}

module.exports.logout= function(req,res) {
    const {user, token} = req
    console.log('user',user)
    console.log('token',token)
    User.findByIdAndUpdate(user._id,{$pull: { tokens: {token: token }}})
        .then(function(){
            res.send({notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
}

module.exports.userFeeds =function(req,res) {
    Post.find({user: [req.user.following,req.user._id]}).populate('user',['_id','username'])
        .then(posts => {
            res.send(posts)
        })
}