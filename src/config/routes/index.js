import React from 'react'
import {Route, BrowserRouter as Router } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'

import LandingPage from '../../components/public/landingPage'
import Login from '../../views/login'

const Routes = () =>
    <Router>
        {/* PUBLIC */}
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/lostandfound' component={Login}/>
        <Route exact path='/createaccount' component={Login}/>
        {/* PRIVATE */}
        {/* <PrivateRoute exact path='/' component={Main}/> */}
    </Router>

export default Routes