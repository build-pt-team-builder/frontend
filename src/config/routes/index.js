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
        
        <Route path="/projects" exact component={ProjectList} />
        <Route 
          path="/projects/add" exact 
          render={props => <ProjectForm {...props} add/>}
        />
        {this.props.projects.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            render={props => (
              <ProjectDetails {...props} project={project} />
            )}
          />
        ))}
        {this.props.projects.map((project) => (
          <Route
            key={project.id}
            path={`/projects/update/${project.id}`}
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
