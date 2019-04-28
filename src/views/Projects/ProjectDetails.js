import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProject } from '../../actions/projects'

import { roles as roleList } from '../../dummyData'

import { ProjectInfoContainer, ButtonMenu } from './ProjectStyleComponents'
import Button from '../../components/DesignComponents/Button'

class ProjectDetails extends Component {
  state = {
    edit: false,
    id: this.props.project.id,
    name: '',
    pitch: '',
    mvp: '',
    stretch: '',
    roles: [],
    category: ''
  }

  prePopulateForm = () => {
    const { name, pitch, mvp, stretch, roles, category } = this.props.project
    this.setState({
      name,
      pitch,
      mvp,
      stretch, 
      roles,
      category
    })
  }

  toggleEdit() {
    this.setState(
      prevState => ({ edit: !prevState.edit }),
      () => this.prePopulateForm()
    )
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUpdate = e => {
    e.preventDefault()
    // invoke data update action creator
    this.props.updateData(this.state)
    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)

    // reset form fields
    this.setState({
      edit: false,
      id: this.props.project.id,
      name: '',
      pitch: '',
      mvp: '',
      stretch: '',
      roles: '',
      category: ''
    })

  }

  render() {
    const { name, pitch, mvp, stretch, roles, category } = this.props.project
    return (
      <ProjectInfoContainer>
        <header>
          <i className="far fa-edit" onClick={() => this.toggleEdit()} />
          <i className="fa fa-trash" />
        </header>
        <div className="project-info">
          {!this.state.edit ? (
            <h3 className="stat-data">{name}</h3>
          ) : (
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInput}
                value={this.state.name}
              />
            )}
          <h4>Description</h4>
          <div className="project-stats">
            <div className="stat-category">Pitch:</div>
            {!this.state.edit ? (
              <div className="stat-data">{pitch}</div>
            ) : (
                <textarea
                  name="pitch"
                  type="text"
                  placeholder="Pitch"
                  onChange={this.handleInput}
                  value={this.state.pitch}
                />
              )}
            <div className="stat-category">MVP:</div>
            {!this.state.edit ? (
              <div className="stat-data">{mvp}</div>
            ) : (
                <textarea
                  name="mvp"
                  type="text"
                  placeholder="MVP"
                  onChange={this.handleInput}
                  value={this.state.mvp}
                />
              )}
            <div className="stat-category">Stretch:</div>
            {!this.state.edit ? (
              <div className="stat-data">{stretch}</div>
            ) : (
                <textarea
                  name="stretch"
                  type="text"
                  placeholder="Stretch"
                  onChange={this.handleInput}
                  value={this.state.stretch}
                />
              )}
            <div className="stat-category">Roles:</div>
            {!this.state.edit ? (
              <div className="stat-data">{roles}</div>
            ) : (
              <>
                <input
                  list="role"
                  onChange={this.handleInput}
                  placeholder="Roles"
                  value={this.state.roles}
                  name="roles"
                />
                <datalist id="role">
                    {roleList.map(role => (
                      <option key={role.id} value={role.name} />
                    ))}
                </datalist>
               </> 
              )}
            <div className="stat-category">Category:</div>
            {!this.state.edit ? (
              <div className="stat-data">{category}</div>
            ) : (
                <input
                  onChange={this.handleInput}
                  placeholder="Category"
                  value={this.state.category}
                  name="category"
                />
              )}
          </div>
          <ButtonMenu {...this.state} onClick={this.handleUpdate}>
            <Button update>Update</Button>
          </ButtonMenu>
        </div>
      </ProjectInfoContainer>
    )
  }
}

export default connect(null, { updateData: updateProject })(ProjectDetails)