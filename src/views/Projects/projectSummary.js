import React, {Component} from 'react'

import Role from './role'

class ProjectSummary extends Component {
    constructor() {
        super()
        this.state = {
            project_id: '',
            roles: [],
        }
    }
    componentDidMount = () => {
        this.setState({project_id: this.props.project.id, roles: this.props.project.roles})
    }
    h_add_role_field = e => {
        e.stopPropagation()
        //add empty role
        this.setState(prevState => {
            prevState.roles.unshift({role: 'none', value: ''})
            return {roles: prevState.roles}
        })
    }
    h_add_role = e => {
        e.stopPropagation()
        const value = e.target.value
        this.setState(prevState => {
            prevState.roles.shift()
            value !== 'cancel' //if value isn't cancel, add it to project
            && this.props.add_role(this.state.project_id, value)
            return {roles: prevState.roles}
        }) 
    }
    h_toggle_add_user = e => {
        e.stopPropagation()
        e.target.classList.toggle('edit')
    }
    h_edit_user = (role_id, user) => this.props.edit_user(this.state.project_id, role_id, user)
    render = () =>
    <div id={this.props.project.id} className='summary' onClick={this.props.open}>
            <div className='identity'>
                <pre className='name'>{this.props.project.name}</pre>
            </div>
            <div className='positions delete roles'>
                <div className='position action'>
                    <button className='add' onClick={this.h_add_role_field}>Add Role</button>
                </div>
                {this.props.project.roles.map((role,idx) =>
                    <Role
                        role={role} 
                        active_roles={this.props.active_roles}
                        edit_user={this.h_edit_user}
                        add_role={this.h_add_role}
                        key={idx}
                    />
                )}
            </div>
        </div>
}

export default ProjectSummary