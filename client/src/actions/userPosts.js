import axios from 'axios'

export const setUserPosts = (userposts) => {
    return {
        type : 'SET_USER_POSTS',
        payload : userposts
    }
}

export const startGetUserPosts = (user) => {
    console.log('user',user)
    return(
        dispatch => {
            axios.get(`http://localhost:3015/users/${user._id}/posts`, {
                headers: {
                    'x-auth': localStorage.getItem('authToken')
                }  
            })
                .then(response => {
                    const userposts = response.data
                    dispatch(setUserPosts(userposts))
                })
                .catch(err => {
                    console.log(err)
                })
        }
    )
}