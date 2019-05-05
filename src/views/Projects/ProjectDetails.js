import React, { Component } from 'react'
import { connect } from 'react-redux'

import { updateProject } from '../../actions/projects'

import { ProjectInfoContainer, StatGroup, ButtonMenu } from './ProjectStyleComponents'
import { CheckBoxGroup } from './ProjectFormStyles'
import RoleForm from '../../components/RoleComponents/RoleForm'
import RoleList from '../../components/RoleComponents/RoleList'
import SignUpBoard from '../../components/SignUpComponents/SignUpBoard'
import Button from '../../components/DesignComponents/Button'

class ProjectDetails extends Component {
    state = {
      edit: false,
      id: this.props.project.id,
      name: '',
      pitch: '',
      mvp: '',
      stretch: '',
      roleAssignments: [],
      category: '',
      projectComplete: this.props.project.projectComplete,
      hidden: true
    }

  prePopulateForm = () => {
    const { name, pitch, mvp, stretch, roleAssignments, category, projectComplete } = this.props.project
    this.setState({
      name,
      pitch,
      mvp,
      stretch, 
      roleAssignments,
      category,
      projectComplete
    },
      () => console.log(`prePopulateForm state: `, this.state)
    )
  }

  toggleEdit() {
    this.setState(
      prevState => ({ edit: !prevState.edit }),
      () => this.prePopulateForm()
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
    // invoke data update action creator
    this.props.updateData(this.state)
    console.log(`Form submitted data sent: ${JSON.stringify(this.state)}`)

    // reset form fields
    this.setState({
      edit: false,
      name: '',
      pitch: '',
      mvp: '',
      stretch: '',
      category: ''
    })
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

  render() {
    console.log(`render() this.state is: `, this.state)
    const { name, pitch, mvp, stretch, category } = this.props.project
    return (
      <ProjectInfoContainer>
        <header>
          {!this.state.edit ? (
            <h1 className="stat-data">{name}</h1>
          ) : (
              <input
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInput}
                value={this.state.name}
              />
          )}
          <div className="icon-menu">
            <i className="far fa-edit" onClick={() => this.toggleEdit()} />
            <i className="fa fa-trash" />
          </div>
        </header>
        <div className="project-info">
          
          <div className="project-stats">
            <StatGroup>
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
            </StatGroup>
            <StatGroup>
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
            </StatGroup>  
            <StatGroup>
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
            </StatGroup>
            <StatGroup> 
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
            </StatGroup>
            {!this.state.edit ? (
              <StatGroup>
                <div className="stat-category">
                  Status: 
                </div>
                <div className="stat-data status">
                  {this.state.projectComplete ? `Close` : `Open`}
                </div>
              </StatGroup>
            ) : 
            (
              <CheckBoxGroup>
                <label htmlFor="">Complete:</label>
                <input
                  type="checkbox"
                  defaultChecked={this.state.projectComplete}
                  onChange={this.toggleProjectComplete}
                />
              </CheckBoxGroup>
              )}   
            <div className="stat-category">Roles:</div>
            {/* List project roleAssignments */}
            <RoleForm {...this.props} />
            {/* Mark project complete */}
            <RoleList {...this.props}/> 
            {/* Add project Roles */}
           

           
            {/* User sign up */}
            <SignUpBoard {...this.props} />
          </div>
          {/* Update project details */}
          <ButtonMenu {...this.state} onClick={this.handleUpdate}>
            <Button update>Update</Button>
          </ButtonMenu>

        </div>
      </ProjectInfoContainer>
    )
  }
}

export default connect(null, { updateData: updateProject })(ProjectDetails)
