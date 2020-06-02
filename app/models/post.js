const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    body: {
        type: String
    },
    hashtag: [
        {
            type: String
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: new Date
    }

})

const Post = mongoose.model('Post',postSchema)

module.exports = Post