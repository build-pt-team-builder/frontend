import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FormContainer, FormGroup } from './ProjectFormStyles'
import RoleForm from '../../components/RoleComponents/RoleForm'
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

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addData = e => {
    // prevent default
    e.preventDefault()

    // gather form data
    let newRecord = {
      ...this.state
    }

    // send new record to api
    this.props.addData(newRecord)
        console.log(`Form submitted data sent: ${JSON.stringify(newRecord)}`)
    this.props.history.push('/')

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
    this.props.history.push(`/projects/${this.state.id}`)

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
    this.props.history.push('/')
    // reset form field
    this.setState({ id: '' })
  }

  submitHandler = e => {
    e.preventDefault()
    if (this.props.update) {
      this.updateRecord(e)
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
        <div className="windowFrame"></div>
        <form onSubmit={this.submitHandler}>
          <h2>Project Form</h2>
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

export default connect(null, { 
  addData: addProject, 
  updateData: updateProject,
  deleteData: deleteProject
})(Form)