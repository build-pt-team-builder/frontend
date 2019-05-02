import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProject } from '../../actions/projects'
import { SignUpContainer, SignUpNameList, SignUpName, 
  FormContainer, FormGroup } from './SignUpStyleComponents'
import { roles as roleList } from '../../dummyData'  
import DeleteContainer from '../../components/DesignComponents/DeleteContainer'

class SignUp extends Component {
  state = {
    signUpList: this.props.project ? 
      this.props.project.signUpList: [],
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
        this.toggleEdit()
      }
    )
  }
  
  handleDelete = (e, index) => {
    e.preventDefault()
    this.setState(prevState => {
      let splicedSignUpList = prevState.signUpList.splice(index, 1)
      console.log(`updatedSignUpList: `, splicedSignUpList)
      console.log(`post-splice-prevState: `, prevState.signUpList)
      return {
        signUpList: [...prevState.signUpList]
      }
    },
      () => {
        console.log(`SignUp handleDelete invoked state.signUpList: `, this.state.signUpList)
        // Update project record
        let updatedProject = {
          ...this.props.project,
          signUpList: this.state.signUpList
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  render() {
    const { slot, index } = this.props
    console.log(`SignUp render state: `, this.state)
    console.log(`SignUp render props: `, this.props)
    return (
      <SignUpContainer>
        {!this.state.edit ?
          <>
            <div onClick={() => this.toggleEdit()}>{slot.role}:</div>
            {slot.name.length > 1 ?
              <SignUpNameList>
                {slot.name.map((user, index) => (
                  index !== slot.name.length - 1 ? `${user}, ` : user
                ))} 
              </SignUpNameList> :
              <SignUpName onClick={() => this.toggleEdit()}>{slot.name}</SignUpName>
            }
            
          </> :
          <FormContainer onSubmit={this.handleUpdate}>
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
            </FormGroup>
          </FormContainer> 
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
      </SignUpContainer>
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
)(SignUp)