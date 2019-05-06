import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import PublicRoutes from '../config/routes/PublicRoutes'
import PrivateRoutes from '../config/routes/PrivateRoutes'

import SideNav from '../views/User/SideNav'
import Footer from '../components/SharedComponents/Footer'

import {AppContainer, Public, Private} from './AppStyles'

const App = () =>
  <AppContainer className='App'>
    <Router>
      <Public className='public'>
        <PublicRoutes/>
      </Public>
      <Private className='private'>
        <Route path='/main' render={(props) => <SideNav {...props} />}/>
        <PrivateRoutes />
        <Route path='/main' render={(props) => <Footer {...props} />} />
      </Private>
    </Router>
  </AppContainer>

export default App