import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateProject } from '../../actions/projects'
import { roles as roleList } from '../../dummyData'

import { FormContainer, FormGroup } from '../../components/SignUpComponents/SignUpStyleComponents'

class ProjectSignUpForm extends Component {
  state = {
    signUpList: this.props.project ? 
      this.props.project.signUpList : [],
    roleInput: '',
    nameInput: '',
    hidden: true,
    edit: false
  }

  // prePopulateForm = () => {
  //   console.log(`prePopulateForm this.props: `, this.props)
  //   this.setState({
  //     roleInput: '',
  //     nameInput: ''
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
    console.log(`pre-addData() this.state: `, this.state)
    e.preventDefault()
    this.setState(prevState => {
      if (this.state.signUpList.findIndex(slot => slot.role === this.state.roleInput) >= 0) {
        console.log(`Invoked addData()...It matches!!`)
        let index = prevState.signUpList.findIndex(slot => slot.role === this.state.roleInput)
        console.log(`findIndex: `, index)
        let updatedSignUps = [...this.state.signUpList]
        updatedSignUps[index].name.push(this.state.nameInput)
        console.log(`updatedSignUps: `, updatedSignUps[index])
        return {
          signUpList: [...updatedSignUps]
        }
      } else {
        console.log(`No matches found`)
        let newSignUp = {
          role: this.state.roleInput,
          name: [this.state.nameInput]
        }
        console.log(`newSignUp: `, newSignUp)

        return {
          signUpList: [...prevState.signUpList, newSignUp]
        }
      }
    },
      () => {
        this.setState({
          roleInput: '',
          nameInput: ''
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

  handleDataUpdate = e => {
    e.preventDefault()
    this.setState(prevState => {
      if (prevState.signUpList.findIndex(slot => slot.role === this.state.roleInput) >= 0) {
        console.log(`It matches!!`)
        let index = prevState.signUpList.findIndex(slot => slot.role === this.state.roleInput)
        console.log(`findIndex: `, index)
        let updatedSignUps = [...this.state.signUpList]
        updatedSignUps[index].name = [this.state.nameInput]
        console.log(`updatedSignUps: `, updatedSignUps[index])
        return {
          signUpList: [...updatedSignUps]
        }
      } else {
        console.log(`No matches found`)
        return null
      }
    },
      () => {
        this.setState({
          roleInput: '',
          nameInput: ''
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
            value={this.state.nameInput}
            name="nameInput"
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