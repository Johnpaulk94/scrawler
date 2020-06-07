import React from 'react'
import {connect} from 'react-redux'

function UserPosts(props) {
    return (
        <div>
        {   
            props.userposts &&
            <div className="container">
            <h2>Browse posts by User </h2>
            {
                props.userposts.map( userpost => {
                    return (
                        <div className="card" key={userpost._id}>
                                <div className="card-body">
                                    <p className="card-text">{userpost.body}</p>
                                    <p className="card-text" ><small className="text-muted"> Created At {Date(userpost.createdAt)} </small></p>
                                </div> 
                            </div>
                    )
                })
            }
        </div>
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userposts : state.userposts
    }
}

export default connect(mapStateToProps)(UserPosts)