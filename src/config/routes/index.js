import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import PrivateRoute from './PrivateRoute'

import { fetchProjectData } from '../../actions/projects'
// import ProjectList from '../../views/Projects/ProjectList'
// import ProjectDetails from '../../views/Projects/ProjectDetails'
import LandingPage from '../../components/LandingPage'
import Login from '../../views/Login'
import Home from '../../views/Home'

import Projects from '../../views/Projects'


class Routes extends Component {
  render = () =>
    <>
      {/* PUBLIC ROUTES */}
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/lostandfound' component={Login} />
      <Route path='/createAccount' component={Login} />
      {/* PRIVATE ROUTE */}
      <Route path='/home' component={() => <Home Content={Projects}/>} />
    </>
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchData: fetchProjectData })(Routes)
)
