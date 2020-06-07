import axios from 'axios'

export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload : posts
    }
}

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload : post
    }
}

export const editPost = (post) => {
    return {
        type: 'EDIT_POST',
        payload : post
    }
}

export const deletePost = (post) => {
    return {
        type: 'DELETE_POST',
        payload : post
    }
}

export const startGetPosts = () => {
    return(
        dispatch => {
            axios.get('http://localhost:3015/posts',{
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then(response => {
                const posts = response.data
                dispatch(setPosts(posts))
            })
        }
    )
}

export const startAddPosts = (formData) => {
    return (
        dispatch => {
            axios.post('http://localhost:3015/posts/new',formData, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }
            })
            .then(response => {
                const post = response.data
                console.log(post)
                dispatch(addPost(post))
            })
        }
    )
}

