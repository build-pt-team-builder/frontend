import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ProjectList extends Component {
  render() {
    // const { projects } this.props
    return (
      <div className="project-list-container">
        <h1>Project List</h1>
      </div>
    )
  }
}

export default connect(null, {})(ProjectList)