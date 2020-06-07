import axios from 'axios'
import { startGetPosts } from './posts'

export const setUser = (user) => {
    return {
        type : 'SET_USER',
        payload : user
    }
}

export const editUser = (user) => {
    return {
        type : 'EDIT_USER',
        payload : user
    }
}

export const userPosts = (obj) => {
    return {
        type: 'USER_POST',
        payload: obj
    }
}

export const removeUser = () => {
    return {
        type : 'REMOVE_USER',
    } 
}

export const startRegister = (formData,redirect) => {
    return(
        dispatch => {
               axios.post('http://localhost:3015/users/register',formData)
            .then(response => {
                console.log(response)
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                } else {
                    redirect()
                    console.log('successfully registerd')
                }
            })
            .catch(err => {
                alert(err)
            })
        }
    )
}

export const startGetUser = (formData,redirect) => {
    return (dispatch => {
        axios.post('http://localhost:3015/users/login',formData)
            .then(response => {
                if(response.data.hasOwnProperty('error')) {
                    alert('Oops! Something went Wrong')
                } else {
                    const {user,token} = response.data
                    localStorage.setItem('authToken',token)
                    dispatch(startGetPosts())
                    dispatch(setUser(user))
                    redirect()
                }
            })
    })
}

export const startRemoveUser = () => {
    return (dispatch => {
        axios.delete('http://localhost:3015/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response => {
                localStorage.removeItem('authToken')
                dispatch(removeUser())
                console.log('user logged off')
        })
    })
}

export const startUserPosts = () => {
    return (dispatch => {
        axios.get()
    })
}