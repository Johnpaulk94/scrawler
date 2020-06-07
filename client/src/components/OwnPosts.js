import React from 'react'
import {connect} from 'react-redux'


function OwnPosts(props) {
    console.log(props)
    return (
        <div className="container">
            <h2>Browse your own posts</h2>
            {
                props.userposts.map(post => {
                    return (
                            <div className="card" key={post._id}>
                                <div className="card-body">
                                    <p className="card-text">{post.body}</p>
                                    <p className="card-text" ><small className="text-muted"> Created At {Date(post.createdAt)} </small></p>
                                </div> 
                            </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state,props) => {
    console.log('state',state)
    const user = state.user
    let userposts
    if(user) {
        userposts = state.posts.filter(post => post.user._id == user._id)
        console.log('userposts',userposts)
    }
    return {
        userposts
    }
}

export default connect(mapStateToProps)(OwnPosts)