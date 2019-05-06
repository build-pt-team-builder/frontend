import React from 'react'
import {Route} from 'react-router-dom'

// Components
import LandingPage from '../../views/Landing'
import AboutUs from '../../views/Landing/aboutUs'
import Features from '../../views/Landing/features'
import Resources from '../../views/Landing/resources'

import Login from '../../views/Login'
import CreateAccount from '../../views/Login/createAccount'

const PublicRoutes = () =>
  <>
    <Route exact path="/" component={LandingPage} />
    <Route exact path='/aboutus' component={AboutUs} />
    <Route exact path='/features' component={Features} />
    <Route exact path='/resources' component={Resources} />
    <Route exact path="/login" component={Login} />
    <Route exact path='/signup' component={CreateAccount} />
  </>

export default PublicRoutes