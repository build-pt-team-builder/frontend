import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProject } from '../../actions/projects'
import { RoleContainer, RoleAssignmentList, RoleAssignment } from './RoleStyleComponents'
import RoleForm from './RoleForm'
import DeleteContainer from '../../components/DesignComponents/DeleteContainer'

class Role extends Component {
  state = {
    roles: this.props.project ? 
      this.props.project.roles: [],
    hidden: true,
    edit: false
  }

  prePopulateForm = () => {
    const { role } = this.props.role
    console.log(`prePopulateForm this.props: `, this.props)
    this.setState({
      roleInput: role.role.name,
      assignmentInput: role.role.assignedTo
    },
      () => console.log(`prePopulateForm state: `, this.state)
    )
  }

  toggleEdit() {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => console.log(`invoke toggleEdit`)
    )
  }

  toggleDeleteBtn = e => {
    e.preventDefault()
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUpdate = e => {
    e.preventDefault()
    this.setState(prevState => {
      if (this.state.roles.findIndex(role => role.role.name === this.state.roleInput) >= 0) {
        console.log(`It matches!!`)
        let index = prevState.roles.findIndex(role => role.role.name === this.state.roleInput)
        console.log(`findIndex: `, index)
        let updatedRoles = [...this.state.roles]
        updatedRoles[index].role.assignedTo.push(this.state.assignmentInput)
        console.log(`updatedRoles: `, updatedRoles[index])
        return {
          roles: [...updatedRoles]
        }
      } else {
        console.log(`No matches found`)
        return null
      }
    },
      () => {
        this.setState({
          roleInput: '',
          assignmentInput: ''
        })
        // Update project record
        let updatedProject = {
          ...this.props.project,
          roles: this.state.roles
        }
        this.props.updateData(updatedProject)
      }
    )
  }
  
  handleDelete = (e, index) => {
    e.preventDefault()
    this.setState(prevState => {
      let splicedRoleList = prevState.roles.splice(index, 1)
      console.log(`updatedRoleList: `, splicedRoleList)
      console.log(`post-splice-prevState: `, prevState.roles)
      return {
        roles: [...prevState.roles]
      }
    },
      () => {
        console.log(`Role handleDelete invoked state.roles: `, this.state.roles)
        // Update project record
        let updatedProject = {
          ...this.props.project,
          roles: this.state.roles
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  render() {
    const { role, index } = this.props
    console.log(`Role render state: `, this.state)
    console.log(`Role render props: `, this.props)
    return (
      <RoleContainer>
        {!this.state.edit ?
          <>
            <div onClick={() => this.toggleEdit()}>{role.role.name}:</div>
            {role.role.assignedTo.length > 1 ?
              <RoleAssignmentList>
                {role.role.assignedTo.map((user, index) => (
                  index !== role.role.assignedTo.length - 1 ? `${user}, ` : user
                ))} 
              </RoleAssignmentList> :
              <RoleAssignment onClick={() => this.toggleEdit()}>{role.role.assignedTo}</RoleAssignment>
            }
            
          </> :
          <RoleForm {...this.props} update/>
        }
        
        <DeleteContainer>
          {!this.state.edit ?
            <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i> :
            <i className="far fa-edit" onClick={this.handleUpdate}></i>
          }
          {
            this.state.hidden ? '' :
              <i className="fa fa-trash"
                aria-hidden="true"
                onClick={(e) => this.handleDelete(e, index)}
              >
              </i>
          }
        </DeleteContainer>
      </RoleContainer>
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

export default connect(mapStateToProps, 
  { updateData: updateProject
  }
)(Role)