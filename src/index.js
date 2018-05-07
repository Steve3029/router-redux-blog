import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'

import rootReducer from './reducers'
import App from './containers/App'

const store = createStore(rootReducer, applyMiddleware(reduxPromise))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
)