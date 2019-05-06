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

import Settings from '../../views/User/Settings'
import UserList from '../../views/User/UserList'
import Announcements from '../../views/User/Announcements'

class PrivateRoutes extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
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
  connect(mapStateToProps, { fetchData: fetchProjectData })(PrivateRoutes)
)
