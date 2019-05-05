import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import AppContainer from './AppStyles'
import Routes from '../config/routes'
import SideNav from '../views/User/SideNav'
import Footer from '../components/SharedComponents/Footer'

const App = () =>
  <AppContainer className='App'>
    <Router>
      <Route path='/main' render={(props) => <SideNav {...props} />}/>
      <Routes />
      <Footer />
    </Router>
  </AppContainer>

export default App
