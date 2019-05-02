import React, { Component } from 'react'
import { connect } from 'react-redux'

import Role from './Role'
import { RoleListContainer } from './RoleStyleComponents'

class RoleList extends Component {

  render() {
    const { roles } = this.props.project
    return (
      <RoleListContainer>
        {roles.length > 0 && (roles.map((role, index) => (
          <Role 
            key={index}
            {...this.props} 
            role={role} 
            index={index}
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