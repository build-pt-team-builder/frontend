import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { updateProject } from '../../actions/projects'
import { roles as roleList } from '../../dummyData'

import { FormContainer, FormGroup } from './RoleStyleComponents'

class RoleForm extends Component {
  state = {
    roleAssignments: this.props.project ? 
      this.props.project.roleAssignments: [],
    roleInput: '',
    assignmentInput: '',
    hidden: true,
    edit: false
  }

  prePopulateForm = () => {
    console.log(`prePopulateForm this.props: `, this.props)
    this.setState({
      roleInput: this.props.role.role,
      assignmentInput: this.props.role.assignedTo
    },
      () => console.log(`prePopulateForm state: `, this.state)
    )
  }

  toggleEdit() {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => {
        this.prePopulateForm()
        console.log(`invoke toggleEdit`)
      }
    )
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addData = e => {
    e.preventDefault()
    this.setState(prevState => {
      let newRole = {
        id: uuid.v4(),
        role: this.state.roleInput,
        assignedTo: this.state.assignmentInput
      }
        
      console.log(`newRole: `, newRole)

      return {
        roleAssignments: [...prevState.roleAssignments, newRole]
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
          roleAssignments: this.state.roleAssignments
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  handleUpdate = (e, roleId) => {
    console.log(`Run handleUpdate`)
    e.preventDefault()
    this.setState(prevState => {
      let updatedRole = {
        id: roleId,
        role: this.state.roleInput,
        assignedTo: this.state.assignmentInput
      }
      let updatedRoleAssignments = this.state.roleAssignments.map(role => {
        if (role.id === roleId) {
          return updatedRole
        } else {
          return role
        }
      })
      return { roleAssignments: updatedRoleAssignments }
    },
      () => {
        this.setState({
          roleInput: '',
          assignmentInput: ''
        })
        // Update project record
        let updatedProject = {
          ...this.props.project,
          roleAssignments: this.state.roleAssignments
        }
        this.props.updateData(updatedProject)
        this.setState({ edit: false })
      }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.project.roleAssignments !== this.props.project.roleAssignments) {
      this.setState({ roleAssignments: this.props.project.roleAssignments })
    }
  }

  submitHandler = e => {
    e.preventDefault()
    if (this.props.update) {
      this.handleDataUpdate(e)
    } else if (this.props.delete) {
      this.deleteData(e)
    } else {
      this.addData(e)
    }
  }

  render () {
    return (
      <FormContainer onSubmit={this.submitHandler}>
        <FormGroup>
          <input
            list="roleInput"
            onChange={this.handleInput}
            placeholder=" Select Role"
            value={this.state.roleInput}
            name="roleInput"
          />
          <datalist id="roleInput">
            {roleList.map(role => (
              <option key={role.id} value={role.name} />
            ))}
          </datalist>
          <input
            type="text"
            onChange={this.handleInput}
            placeholder="Assign Role"
            value={this.state.assignmentInput}
            name="assignmentInput"
          />
          <button type="submit">+</button>
        </FormGroup>
        
      </FormContainer> 
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  }
}

export default connect(mapStateToProps,{ updateProject })(RoleForm)