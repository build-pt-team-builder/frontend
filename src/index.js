import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import GlobalStyle from './components/DesignComponents/GlobalStyle'
import theme from './components/DesignComponents/theme'

import {store} from './config/store'
import App from './app'

const root = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <App />
      </Router>
    </Provider>
  </ThemeProvider>,
  root
)