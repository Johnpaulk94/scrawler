import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import configureStore from './store/configStore'
import { startGetPosts } from './actions/posts'

const store = configureStore()

store.subscribe(() => {
    console.log('Subscribe',store.getState())
})

if(localStorage.getItem('authToken')) {
    store.dispatch(startGetPosts())
}
const ele = (
  <Provider store = { store }>
      <App />
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))


