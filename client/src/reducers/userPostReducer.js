const initialUserPostState = []

const userPostReducer = (state = initialUserPostState,action) => {
    switch(action.type) {
        case 'SET_USER_POSTS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default userPostReducer