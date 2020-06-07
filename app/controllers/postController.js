const Post = require('../models/Post')

module.exports.create = (req,res) => {
    const body = req.body
    const post = new Post(body)
    post.user = req.user._id
    post.save()
        .then(user => {
            if(post) {
                res.send(post)
            }
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.userpostslist= (req,res) => {
    const id = req.params.id
    Post.find({user: id}).populate('user',["id","username"])
        .then(userposts => {
            if(userposts) {
                res.send(userposts)
            }
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.browse=(req,res) => {
    Post.find().populate('user',["id","username"])
        .then(posts => {
            if(posts) {
                res.send(posts)
            }
        })
        .catch(err => {
            res.send(err)
        })
}
module.exports.destroy= (req,res) => {
    const id = req.params.id
    Post.findOneAndDelete({_id: id})
        .then(post => {
            res.send(post)
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.edit =(req,res) => {
    const id = req.params.id
    const body = req.body
    const {user} = req
    Post.findOneAndUpdate({_id:id, user: user._id},body,{new: true})
        .then(post => {
            if(post) {
                res.send(post)
            }
        })
        .catch(err => {
            res.send(err)
        })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    const {user} = req
    Post.findOne({_id: id, user : user._id })
        .then(post => {
            if(post) {
                res.send(post)
            }
        })
        .catch(err => {
            res.send(err)
        })
}