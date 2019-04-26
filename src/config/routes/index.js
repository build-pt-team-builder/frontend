import React from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import PrivateRoute from './PrivateRoute'

//public
import LandingPage from '../../components/LandingPage'
import Login from '../../views/Login'
//private
import Home from '../../views/User'

const Routes = () =>
  <>
    {/* PUBLIC */}
    <Route exact path='/' component={LandingPage}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/lostandfound' component={Login}/>
    <Route exact path='/createaccount' component={Login}/>
    {/* PRIVATE */}
    <Route exact path='/home' component={Home}/>
  </>

export default withRouter(
  connect(null, {})(Routes)
)