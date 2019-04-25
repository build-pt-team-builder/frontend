import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import LandingPage from './outside/landingPage'
import Login from '../views/login'

const Routes = () =>
    <Router>
        <Route exact path='/' component={LandingPage}/>
        {/* there has got to be a better way than this... */}
        <Route exact path='/login' component={Login}/>
        <Route exact path='/lostandfound' component={Login}/>
        <Route exact path='/createaccount' component={Login}/>
    </Router>

export default Routes