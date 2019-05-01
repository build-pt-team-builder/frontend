import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProject } from '../../actions/projects'
import { roles as roleList } from '../../dummyData'

import { FormContainer, FormGroup } from './RoleStyleComponents'

class RoleForm extends Component {
  state = {
    roles: this.props.project ? 
      this.props.project.roles: [],
    roleInput: '',
    assignmentInput: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addRole = e => {
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
        let newRole = {
          role: {
            name: this.state.roleInput,
            assignedTo: [this.state.assignmentInput]
          }
        }
        
        console.log(`newRole: `, newRole)

        return {
          roles: [...prevState.roles, newRole]
        }
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

  render () {
    return (
      <FormContainer onSubmit={this.addRole}>
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

export default connect(null,{ updateProject })(RoleForm)