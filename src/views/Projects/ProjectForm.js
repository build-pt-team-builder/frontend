import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormContainer, FormGroup, CheckBoxGroup } from './ProjectFormStyles'
import RoleForm from '../../components/RoleComponents/RoleForm'
import RoleList from '../../components/RoleComponents/RoleList'
import { RoleFormContainer } from '../../components/RoleComponents/RoleStyleComponents'
import Button from '../../components/DesignComponents/Button'

import { addProject, updateProject, deleteProject } from '../../actions/projects'

class Form extends Component {
  state = {
    edit: false,
    id: '',
    name: '',
    pitch: '',
    mvp: '',
    roles: [],
    category: '',
    projectComplete: ''
  }

  prePopulateForm = () => {
    const { id, name, pitch, mvp, stretch, roles, category, projectComplete } = this.props.project
    this.setState({
      id,
      name,
      pitch,
      mvp,
      stretch,
      roles,
      category,
      projectComplete
    },
      () => console.log(`prePopulateForm state: `, this.state)
    )
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addData = e => {
    // prevent default
    e.preventDefault()

    // gather form data
    let newRecord = {
      name: this.state.name,
      pitch: this.state.pitch,
      mvp: this.state.mvp,
      stretch: this.state.stretch,
      roles: this.state.roles,
      category: this.state.category,
      projectComplete: false
    }

    // send new record to api
    this.props.addData(newRecord)
        console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)
    this.props.history.push('/main/projects')

    // reset form fields
    this.setState({
      edit: false,
      id: '',
      name: '',
      pitch: '',
      mvp: '',
      roles: [],
      category: '',
      projectComplete: ''
    })
  }

  updateData = e => {
    // prevent default
    e.preventDefault()
    // send updated record to api
    this.props.updateData(this.state)
    this.props.history.push(`/main/projects/${this.state.id}`)

    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)

    // reset form fields
    this.setState({
      edit: false,
      id: '',
      name: '',
      pitch: '',
      mvp: '',
      roles: [],
      category: '',
      projectComplete: ''
    })
  }

  deleteData = e => {
    // prevent default
    e.preventDefault()
    // invoke the deleteProject method and pass id
    this.props.deleteData(this.state.id)
    this.props.history.push('/main/projects')
    // reset form field
    this.setState({ id: '' })
  }

  toggleProjectComplete = () => {

    console.log(`toggleProjectComplete before change: `, this.state.projectComplete)
    this.setState({ projectComplete: !this.state.projectComplete },
      () => {
        console.log(`toggleProjectComplete: `, this.state.projectComplete)
        // Update project record
        let updatedProject = {
          ...this.props.project,
          projectComplete: this.state.projectComplete
        }
        this.props.updateData(updatedProject)
      }
    )
  }

  submitHandler = e => {
    e.preventDefault()
    if (this.props.update) {
      this.updateData(e)
    } else if (this.props.delete) {
      this.deleteData(e)
    } else {
      this.addData(e)
    }
  }

  componentDidMount() {
    if(this.props.update) {
      this.prePopulateForm(this.props.id)
    }
  }

  render() {
    return (
      <FormContainer {...this.props}>
        <form onSubmit={this.submitHandler}>
          <h1>
            {`
              Project 
              ${this.props.add ? 'Entry' : ''} 
              ${this.props.update ? 'Update' : ''}  
              ${this.props.delete ? 'Delete' : ''}   
              Form
            `}
          </h1>
          {(this.props.update || this.props.delete) &&
            <FormGroup>
              <label htmlFor="id">ID</label>
              <input name="id" type="number"
                placeholder="ID" onChange={this.handleInput}
                value={this.state.id}
              />
            </FormGroup>
          }
          {!this.props.delete && (
            <>
              <FormGroup>
                <label htmlFor="name">Name:</label>
                <input name="name" type="text"
                  onChange={this.handleInput}
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="pitch">Pitch:</label>
                <textarea name="pitch"
                  onChange={this.handleInput}
                  value={this.state.pitch}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="mvp">MVP:</label>
                <textarea name="mvp"
                  onChange={this.handleInput}
                  value={this.state.mvp}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="stretch">Stretch:</label>
                <textarea name="stretch"
                  onChange={this.handleInput}
                  value={this.state.stretch}
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="category">Category:</label>
                <input name="category" type="text"
                  onChange={this.handleInput}
                  value={this.state.category}
                />
              </FormGroup>

            </>
          )}
          {this.props.update && (
            <>
            <CheckBoxGroup>
              <label htmlFor="">Complete:</label>
              <input
                type="checkbox"
                defaultChecked={this.state.projectComplete}
                onChange={this.toggleProjectComplete}
              />
            </CheckBoxGroup>
            <RoleFormContainer>
              <label htmlFor="">Roles:</label>
              {this.props.update &&
                (<RoleList {...this.props}/>)
              }
              <RoleForm add {...this.props}/>
            </RoleFormContainer>
            </>
          )}
          <Button type="submit" {...this.props}>
            {`${this.props.add ? 'Add' : ''} 
              ${this.props.update ? 'Update' : ''}  
              ${this.props.delete ? 'Delete' : ''}   
              Project
            `}
          </Button>
        </form>


      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  }
}

export default connect(mapStateToProps, { 
  addData: addProject, 
  updateData: updateProject,
  deleteData: deleteProject
})(Form)