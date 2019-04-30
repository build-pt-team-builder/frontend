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
import Settings from '../../views/User/Settings'

import Projects from '../../views/Projects'
import UserList from '../../views/User/UserList'


class Routes extends Component {
  render = () =>
    <>
      {/* PUBLIC ROUTES */}
      <Route exact path='/' component={LandingPage} />
      <Route path='/login' component={Login} />
      <Route path='/lostandfound' component={Login} />
      <Route path='/createAccount' component={Login} />
      {/* PRIVATE ROUTE */}
      <Route path='/projects' component={() => <Home Content={Projects}/>} />
      <Route path='/settings' component={() => <Home Content={Settings}/>} />
      <Route path='/users' component={() => <Home Content={UserList}/>} />
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
