import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import PrivateRoute from './PrivateRoute'

// Action creators
import { fetchProjectData } from '../../actions/projects'
// Components
import Projects from '../../views/Projects/'
import LandingPage from '../../components/LandingPage'
import Login from '../../views/Login'

import Settings from '../../views/User/Settings'
import UserList from '../../views/User/UserList'
import Announcements from '../../views/User/Announcements'

class Routes extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        {/* Assign routes */}
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" exact component={Login} />

        <Route path='/settings' component={Settings} />
        <Route path='/users' component={UserList} />
        <Route path='/announcements' component={Announcements} />
        
        <Route path="/projects" exact component={Projects} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchData: fetchProjectData })(Routes)
)
