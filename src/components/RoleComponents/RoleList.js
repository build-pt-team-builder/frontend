import React, { Component } from 'react'
import { connect } from 'react-redux'

import Role from './Role'
import { RoleListContainer } from './RoleStyleComponents'

class RoleList extends Component {

  render() {
    const { roleAssignments } = this.props.project
    return (
      <RoleListContainer>
        {roleAssignments.length > 0 && (roleAssignments.map((role) => (
          <Role 
            key={role.id}
            {...this.props} 
            role={role} 
          />
        )))}
      </RoleListContainer>
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

export default connect(mapStateToProps, {})(RoleList)