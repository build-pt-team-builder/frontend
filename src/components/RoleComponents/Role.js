import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProject } from '../../actions/projects'
import { RoleContainer, RoleAssignmentList, RoleAssignment, 
  FormContainer, FormGroup } from './RoleStyleComponents'
import { roles as roleList } from '../../dummyData'  
import DeleteContainer from '../../components/DesignComponents/DeleteContainer'

class Role extends Component {
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

  toggleDeleteBtn = e => {
    e.preventDefault()
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
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
      let updatedRoleAssignments = prevState.roleAssignments.map(role => {
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
        this.setState({edit: false})
      }
    )
  }
  
  handleDelete = (e, roleId) => {
    console.log(`initiate handleDelete of roleId: `, roleId)
    e.preventDefault()
    this.setState(prevState => {
      console.log(`pre-filter-prevState: `, prevState.roleAssignments)
      let filteredList = prevState.roleAssignments.filter(role => role.id !== roleId)
      console.log(`filteredList: `, filteredList)
      console.log(`post-filter-prevState: `, prevState.roleAssignments)
      return {
        roleAssignments: [...filteredList]
      }
    },
      () => {
        console.log(`Role handleDelete invoked state.roleAssignments: `, this.state.roleAssignments)
        // Update project record
        let updatedProject = {
          ...this.props.project,
          roleAssignments: this.state.roleAssignments
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.project.roleAssignments !== this.props.project.roleAssignments) {
      console.log(`prevProps doesn't match this.props invoke CDU methods`)
      this.setState({ roleAssignments: this.props.project.roleAssignments })
    }
  }  

  render() {
    const { role } = this.props
    console.log(`Role render state: `, this.state)
    console.log(`Role render props: `, this.props)
    return (
      <RoleContainer>
        {!this.state.edit ?
          <>
            <div onClick={() => this.toggleEdit()}>{role.role}:</div>
            <RoleAssignment onClick={() => this.toggleEdit()}>{role.assignedTo}</RoleAssignment>
            
          </> :
          <FormContainer onSubmit={(e) => this.handleUpdate(e, this.props.role.id)}>
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
            </FormGroup>
          </FormContainer> 
        }
        
        <DeleteContainer>
          {!this.state.edit ?
            <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i> :
            <i className="far fa-edit" onClick={(e) => this.handleUpdate(e, this.props.role.id)}></i>
          }
          {
            this.state.hidden ? '' :
              <i className="fa fa-trash"
                aria-hidden="true"
                onClick={(e) => this.handleDelete(e, this.props.role.id)}
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