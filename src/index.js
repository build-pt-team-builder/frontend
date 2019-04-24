//REACT
import React from 'react'
import ReactDOM from 'react-dom'
import {createGlobalStyle} from 'styled-components'
//REDUX
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
//MIDDLEWARE
import logger from 'redux-logger'
//LOCAL
import './reset.css'
import reducer from './reducers'
import Routes from './components/routes'
//DELETE?
// import * as serviceWorker from './serviceWorker'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato');
    ::-webkit-scrollbar {display: none}
    body {    
        background-color: #222;
        color: #ccc;
        font-family: 'Lato', sans-serif;
        #root {
            height: 100%;
        }
    }
`

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

const root = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>,
  root
)

//DELETE?
// serviceWorker.unregister()