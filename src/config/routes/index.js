import React, {Component} from 'react'
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import PrivateRoute from './PrivateRoute'

import { fetchProjectData } from '../../actions/projects'
// import ProjectList from '../../views/Projects/ProjectList'
import ProjectDetails from '../../views/Projects/ProjectDetails'
import ProjectForm from '../../views/Projects/ProjectForm'
import ProjectTable from '../../views/Projects/ProjectTable'

import Login from '../../views/Login'
import Home from '../../views/Home'
import Settings from '../../views/User/Settings'
import UserList from '../../views/User/UserList'

class Routes extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    console.log(`Routes render this.props is: `)
    return (
      <div>
        {/* Assign routes */}
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path='/projects' component={() => <Home Content={ProjectTable} />} />
        <Route path='/settings' component={() => <Home Content={Settings} />} />
        <Route path='/users' component={() => <Home Content={UserList} />} />
        
        <Route path="/projects" exact component={ProjectTable} />
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
