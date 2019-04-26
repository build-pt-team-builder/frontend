import React from 'react'

import AppContainer from './AppStyles'
import Header from '../components/SharedComponents/Header/'
import Routes from '../config/routes'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Routes />
    </AppContainer>
  )
}

export default App
