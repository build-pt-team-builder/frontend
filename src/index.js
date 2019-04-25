import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"
import logger from 'redux-logger'

import reducer from './reducers'
// import Routes from './config/routes/Routes'
import App from './app'
//THEME
import GlobalStyle from './components/designComponents/GlobalStyle'
import theme from './components/designComponents/theme'

const store = createStore(
    reducer,
    applyMiddleware(logger)
)

const root = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  root
)