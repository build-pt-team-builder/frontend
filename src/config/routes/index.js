import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import PrivateRoute from './PrivateRoute'

// Action creators
import { fetchProjectData } from '../../actions/projects'
// Components
import ProjectList from '../../views/Projects/ProjectList'
import ProjectDetails from '../../views/Projects/ProjectDetails'
import ProjectForm from '../../views/Projects/ProjectForm'

import LandingPage from '../../views/Landing'
import AboutUs from '../../views/Landing/aboutUs'
import Features from '../../views/Landing/features'
import Resources from '../../views/Landing/resources'

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
        <Route exact path='/aboutus' component={AboutUs} />
        <Route exact path='/features' component={Features} />
        <Route exact path='/resources' component={Resources} />

        <Route path="/main/login" exact component={Login} />

        <Route path='/main/settings' component={Settings} />
        <Route path='/main/users' component={UserList} />
        <Route path='/main/announcements' component={Announcements} />
        
        <Route path="/main/projects" exact component={ProjectList} />
        <Route 
          path="/main/projects/add" exact 
          render={props => <ProjectForm {...props} add/>}
        />
        {this.props.projects.map((project) => (
          <Route
            key={project.id}
            path={`/main/projects/${project.id}`}
            render={props => (
              <ProjectDetails {...props} project={project} />
            )}
          />
        ))}
        {this.props.projects.map((project) => (
          <Route
            key={project.id}
            path={`/main/projects/update/${project.id}`}
            render={props => <ProjectForm {...props} project={project} update />}
          />
        ))}
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
