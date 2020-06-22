import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import tasks from './reducers'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const store = createStore(tasks)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)