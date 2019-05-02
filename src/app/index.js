import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import AppContainer from './AppStyles'
import Routes from '../config/routes'

const App = () =>
  <AppContainer className='App'>
    <Router>
      <Routes />
    </Router>
  </AppContainer>

export default App
