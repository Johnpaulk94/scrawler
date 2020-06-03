import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configStore'

const store = configureStore()

store.subscribe(() => {
    console.log('Subscribe',store.getState())
})


const ele = (
  <Provider store = { store }>
      <App />
  </Provider>
)

ReactDOM.render(ele, document.getElementById('root'))


