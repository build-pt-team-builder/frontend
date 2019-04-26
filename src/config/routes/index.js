import React from 'react'
import {Route, BrowserRouter as Router } from 'react-router-dom'

// import PrivateRoute from './PrivateRoute'

//public
import LandingPage from '../../components/public/landingPage'
import Login from '../../views/login'
//private
import Home from '../../views/user/home'

const Routes = () =>
    <Router>
        {/* PUBLIC */}
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/lostandfound' component={Login}/>
        <Route exact path='/createaccount' component={Login}/>
        {/* PRIVATE */}
        <Route exact path='/home' component={Home}/>
    </Router>

export default Routes