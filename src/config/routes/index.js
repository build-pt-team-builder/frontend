import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'

import { fetchProjectData } from '../../actions/projects'
import ProjectList from '../../views/Projects/ProjectList'
import ProjectDetails from '../../views/Projects/ProjectDetails'
import ProjectForm from '../../views/Projects/ProjectForm'

import ProjectTable from '../../views/Projects/ProjectTable'

class Routes extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    console.log(`Routes render this.props is: `)
    return (
      <div>
        {/* Assign routes */}
        <Route path="/" exact component={ProjectList} />
        <Route path="/projects" exact component={ProjectList} />
        <Route path="/projects/table" exact component={ProjectTable} />
        <Route 
          path="/projects/add" exact 
          render={props => <ProjectForm {...props} add/>}
        />
        {this.props.projects.map(project => (
          <div key={project.id}>
          <Route
            path={`/projects/${project.id}`}
            render={props => (
              <ProjectDetails {...props} project={project} />
            )}
          />
          <Route
            path={`/projects/update/${project.id}`}
            render={props => <ProjectForm {...props} project={project} update />}
          />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.projects)
  return {
    projects: state.projects.projects
  }
}

export default withRouter(
  connect(mapStateToProps, { fetchData: fetchProjectData })(Routes)
)
