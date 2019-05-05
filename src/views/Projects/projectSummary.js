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
    componentWillReceiveProps(nextProps) {
        nextProps !== this.props && this.setState({roles: nextProps.project.roles})
    }
    h_add_role_field = e => {
        e.stopPropagation()
        this.setState(prevState => {
            const id = prevState.roles.length
            const newRole = {id: id, role: 'none', member: ''}
            prevState.roles.unshift(newRole)
            console.log(newRole)
            return {roles: prevState.roles}
        })
    }
    h_add_role = e => e.target.value !== 'cancel' && this.props.add_role(this.state.project_id, e.target.value) //add user to project
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
                {this.state.roles.map((role,idx) =>
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