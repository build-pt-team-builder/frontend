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
    assignmentInput: '',
    hidden: true,
    edit: false
  }

  prePopulateForm = () => {
    const { role } = this.props.role
    console.log(`ROLEFORM prePopulateForm this.props: `, this.props)
    this.setState({
      roleInput: role.role.name,
      assignmentInput: role.role.assignedTo
    },
      () => console.log(`prePopulateForm state: `, this.state)
    )
  }

  toggleEdit = () => {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => this.prePopulateForm()
    )
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addData = e => {
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

  handleDataUpdate = e => {
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
            onClick={() => this.toggleEdit()}
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