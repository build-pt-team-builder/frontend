import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import { updateProject } from '../../actions/projects'
import { roles as roleList } from '../../dummyData'

import { FormContainer, FormGroup } from '../../components/SignUpComponents/SignUpStyleComponents'

class ProjectSignUpForm extends Component {
  state = {
    signUpList: this.props.project ? 
      this.props.project.signUpList : [],
    roleInput: '',
    userInput: '',
    hidden: true,
    edit: false
  }

  // prePopulateForm = () => {
  //   console.log(`prePopulateForm this.props: `, this.props)
  //   this.setState({
  //     roleInput: '',
  //     userInput: ''
  //   },
  //     () => console.log(`prePopulateForm state: `, this.state)
  //   )
  // }

  toggleEdit() {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => {
        // this.prePopulateForm()
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
        user: this.state.userInput
      }

      console.log(`newRole: `, newRole)

      return {
        signUpList: [...prevState.signUpList, newRole]
      }
    },
      () => {
        this.setState({
          roleInput: '',
          userInput: ''
        })
        // Update project record
        let updatedProject = {
          ...this.props.project,
          signUpList: this.state.signUpList
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  handleUpdate = (e, slotId) => {
    console.log(`Run handleUpdate`)
    e.preventDefault()
    this.setState(prevState => {
      let updatedSlot = {
        id: slotId,
        role: this.state.roleInput,
        user: this.state.userInput
      }
      let updatedSignUpList = prevState.signUpList.map(slot => {
        if (slot.id === slotId) {
          return updatedSlot
        } else {
          return slot
        }
      })
      return { signUpList: updatedSignUpList }
    },
      () => {
        this.setState({
          roleInput: '',
          userInput: ''
        })
        // Update project record
        let updatedProject = {
          ...this.props.project,
          signUpList: this.state.signUpList
        }
        this.props.updateData(updatedProject)
        this.setState({ edit: false })
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
            placeholder="Sign Up"
            value={this.state.userInput}
            name="userInput"
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

export default connect(mapStateToProps,{ updateProject })(ProjectSignUpForm)