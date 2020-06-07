import {createStore, combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'
import postsReducer from '../reducers/postsReducer'
import userPostReducer from '../reducers/userPostReducer'


const configureStore=()=> {
    const store = createStore(combineReducers({
        user: userReducer,
        posts: postsReducer,
        userposts: userPostReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore