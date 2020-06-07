const initialPostState = []

const postReducer = (state = initialPostState, action) => {
    switch(action.type) {
        case 'ADD_POST' : {
            return [...state, action.payload ]
        }
        case 'SET_POSTS' : {
            return [...action.payload]
        }
        case 'USER_POSTS' : {
            return [...action.payload]
        }
        case 'EDIT_POST' : {
            return state.map(post => {
                if(post._id === action.payload._id) {
                    return action.payload
                } else {
                    return post
                }
            })
        }
        case 'DELETE_POST' : {
            return state.filter(post =>post._id !== action.payload._id)
        }
        default : {
            return [...state]
        }
    }
}

export default postReducer