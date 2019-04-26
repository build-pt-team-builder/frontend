import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
// import PrivateRoute from './PrivateRoute'

import { fetchProjectData } from '../../actions/projects'
import ProjectList from '../../views/Projects/ProjectList'
import ProjectDetails from '../../views/Projects/ProjectDetails'


class Routes extends Component {
  // componentDidMount() {
  //   this.props.fetchData()
  // }

  render() {
    console.log(`Routes render this.props is: `)
    return (
      <div>
        {/* Assign routes */}
        <Route path="/" exact component={ProjectList} />
        {this.props.projects.map(project => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            render={props => (
              <ProjectDetails {...props} project={project} />
            )}
          />
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
