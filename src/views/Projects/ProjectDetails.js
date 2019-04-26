import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ProjectInfoContainer, ButtonMenu } from './ProjectStyleComponents'
import Button from '../../components/DesignComponents/Button'

class ProjectDetails extends Component {
  state = {
    edit: false,
    id: '',
    name: '',
    description: {
      pitch: '',
      mvp: ''
    },
    roles: [],
    category: ''
  }

  prePopulateForm = () => {
    const { name, description, roles, category } = this.props.project
    this.setState({
      name,
      description,
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

  render() {
    const { name, description, roles, category } = this.props.project
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
              <div className="stat-data">{description.pitch}</div>
            ) : (
              <textarea
                name="description.pitch"
                type="text"
                placeholder="Pitch"
                onChange={this.handleInput}
                value={this.state.description.pitch}
              />
            )}
            <div className="stat-category">MVP:</div>
            {!this.state.edit ? (
              <div className="stat-data">{description.mvp}</div>
            ) : (
              <textarea
                name="description.mvp"
                type="text"
                placeholder="MVP"
                onChange={this.handleInput}
                value={this.state.description.mvp}
              />
            )}
            <div className="stat-category">Roles:</div>
            {!this.state.edit ? (
              <div className="stat-data">{roles}</div>
            ) : (
              <input
                onChange={this.handleInput}
                placeholder="Roles"
                value={this.state.roles}
                name="roles"
              />
            )}
            <div className="stat-category">Category:</div>
            {!this.state.edit ? (
              <div className="stat-data">{category}</div>
            ) : (
              <input
                onChange={this.handleInput}
                placeholder="Roles"
                value={this.state.roles}
                name="roles"
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

export default connect(null,{})(ProjectDetails)