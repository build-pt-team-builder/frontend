import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import LandingPage from './landingPage'

const Routes = () =>
    <Router>
        <Route exact path='/' component={LandingPage}/>
    </Router>

export default Routes