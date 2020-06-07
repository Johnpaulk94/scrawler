import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {startGetUserPosts} from '../actions/userPosts'

function Browse(props) {
    return (
        <div className="container">
            <h2>Browse Feeds</h2>
            {   
                props.posts.length !== 0 ? (
                props.posts.map(post => {
                    return (
                            <div className="card" key={post._id}>
                                <div className="card-header"> By <Link to={`/users/${post.user._id}/posts`} onClick={()=> props.dispatch(startGetUserPosts(post.user))}>
                                    {post.user.username} </Link>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{post.body}</p>
                                    <p className="card-text" ><small className="text-muted"> Created At {Date(post.createdAt)} </small></p>
                                </div> 
                            </div>
                    )
                }) ) : (
                    <div>
                        <h2>Once users start posting content it will appear here</h2>
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

export default connect(mapStateToProps)(Browse)