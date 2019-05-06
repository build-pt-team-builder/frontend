import React, {Component} from 'react'

class User extends Component {
    constructor({ user, edit, remove }) {
        super()
        this.state = {
            user: user,
            edit: edit,
            remove: remove,
            editing: false,
        }
    }
    h_toggle_edit = () => {
        if (this.state.editing) this.state.edit(this.state.user)
        this.setState(prevState => { return { editing: !prevState.editing } })
    }
    h_remove = () => this.state.remove(this.state.user)
    h_update_user = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => {
            prevState.user[name] = value
            return { user: prevState.user }
        })
    }
    h_select_change = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => {
            prevState.user[name] = value
            return {user: prevState.user}
        })
    }
    render = () =>
        <>
            <div className='info avatar'>
                <img src={`/img/${this.state.user.avatar}`} alt='nope' />
            </div>
            <div className='info'>
                {this.state.editing
                    ?   <>
                            <div>
                                <input type='text' name='firstName' placeholder='First Name' onChange={this.h_update_user} value={this.state.user.firstName} />
                                <input type='text' name='lastName' placeholder='Last Name' onChange={this.h_update_user} value={this.state.user.lastName} />
                            </div>
                            <select className='value' onChange={this.h_select_change} name='cohort' value={this.state.user.cohort}>
                                {this.props.cohorts.map(cohort =>
                                    <option
                                        value={cohort.name} 
                                        disabled={cohort.disabled}
                                        key={cohort.id}>
                                        {cohort.name}
                                    </option>
                                )}
                            </select>
                        </>
                    :   <>
                            <pre className='name'>{this.props.user.firstName} {this.props.user.lastName}</pre>
                            <pre className='role'>{this.props.user.cohort}</pre>
                        </>
                }
            </div>
            <div className='info'>
                <pre className='title'>Preferred Role</pre>
                {this.state.editing
                    ?   <select className='value' onChange={this.h_select_change} name='role' value={this.state.user.role}>
                            {this.props.roles.map(role =>
                                <option value={role.name} key={role.id}>{role.name}</option>
                            )}
                        </select>
                    :   <pre className='value'>{this.props.user.role}</pre>
                }
            </div>
            <div className='info'>
                <pre className='title'>Project Manager</pre>
                {this.state.editing
                    ?   <select className='value' onChange={this.h_select_change} name='project_manager' value={this.state.user.project_manager}>
                            <option value='nona'>None</option>
                            {this.props.project_managers.map(project_manager =>
                                <option
                                    value={`${project_manager.firstName} ${project_manager.lastName}`}
                                    key={project_manager.id}>
                                    {project_manager.firstName} {project_manager.lastName}
                                </option>
                            )}
                        </select>
                    :   <pre className='value'>{this.props.user.project_manager}</pre>
                }
            </div>
            <div className='info'>
                <pre className='title'>Project</pre>
                <pre className='value'>{this.props.user.project || 'None'}</pre>
            </div>
            <div className='actions'>
                <button onClick={this.h_toggle_edit} className={this.state.editing ? 'active' : null}>{this.state.editing ? 'Editing' : 'Edit'}</button>
                <button onClick={this.h_remove}>Remove</button>
            </div>
        </>
}

export default User