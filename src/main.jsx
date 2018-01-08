// main.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import Routes from './router.js'

ReactDOM.render(
    <Provider store = {store}>
        <Routes />
    </Provider>,
    document.getElementById('app')
)