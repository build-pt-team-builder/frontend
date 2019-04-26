import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ProjectListContainer, Preview } from './ProjectStyleComponents'

class ProjectList extends Component {
  render() {
    const { projects } = this.props
    return (
      <ProjectListContainer>
        <h1>Project List</h1>
        {projects.length > 0 ? (
          projects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <Preview>
                <div>{project.name}</div>
                <div>Roles: {project.roles}</div>
              </Preview>
            </Link>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ProjectListContainer>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.projects)
  return {
    projects: state.projects.projects,
    fetchingData: state.projects.fetchingData
  }
}

export default connect(
  mapStateToProps,
  {}
)(ProjectList)