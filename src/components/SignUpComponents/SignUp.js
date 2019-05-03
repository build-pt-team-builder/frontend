import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProject } from '../../actions/projects'
import { SignUpContainer, SignUpName, 
  FormContainer, FormGroup } from './SignUpStyleComponents'
import { roles as roleList } from '../../dummyData'  
import DeleteContainer from '../../components/DesignComponents/DeleteContainer'

class SignUp extends Component {
  state = {
    signUpList: this.props.project ? 
      this.props.project.signUpList: [],
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

  toggleDeleteBtn = e => {
    e.preventDefault()
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
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
  
  handleDelete = (e, slotId) => {
    console.log(`initiate handleDelete of slotId: `, slotId)
    e.preventDefault()
    this.setState(prevState => {
      console.log(`pre-filter-prevState: `, prevState.signUpList)
      let filteredList = prevState.signUpList.filter(slot => slot.id !== slotId)
      console.log(`filteredList: `, filteredList)
      console.log(`post-filter-prevState: `, prevState.signUpList)
      return {
        signUpList: [...filteredList]
      }
    },
      () => {
        console.log(`Role handleDelete invoked state.signUpList: `, this.state.signUpList)
        // Update project record
        let updatedProject = {
          ...this.props.project,
          signUpList: this.state.signUpList
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.project.signUpList !== this.props.project.signUpList) {
      console.log(`prevProps doesn't match this.props invoke CDU methods`)
      this.setState({ signUpList: this.props.project.signUpList })
    }
  }   

  render() {
    const { slot } = this.props
    console.log(`SignUp render state: `, this.state)
    console.log(`SignUp render props: `, this.props)
    return (
      <SignUpContainer>
        {!this.state.edit ?
          <>
            <div onClick={() => this.toggleEdit()}>{slot.role}:</div>
            <SignUpName onClick={() => this.toggleEdit()}>{slot.user}</SignUpName>
            
          </> :
          <FormContainer onSubmit={(e) => this.handleUpdate(e, this.props.slot.id)}>
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
                  <option key={role.id} value={role.user} />
                ))}
              </datalist>
              <input
                type="text"
                onChange={this.handleInput}
                placeholder="Sign Up"
                value={this.state.userInput}
                name="userInput"
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
                onClick={(e) => this.handleDelete(e, this.props.slot.id)}
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