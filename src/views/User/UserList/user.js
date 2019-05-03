import React, { Component } from 'react'

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
            return { user: prevState.user }
        })
    }
    render = () =>
        <div className='user'>
            <div className='info'>
                <img src={`./img/${this.state.user.avatar}`} alt='nope' />
            </div>
            <div className='info'>
                {this.state.editing
                    ? <>
                        <input type='text' name='firstName' placeholder='First Name' onChange={this.h_update_user} value={this.state.user.firstName} />
                        <input type='text' name='lastName' placeholder='Last Name' onChange={this.h_update_user} value={this.state.user.lastName} />
                        <select className='value' onChange={this.h_select_change} name='cohort' value={this.state.user.cohort}>
                            <option value='webpt03'>webpt03</option>
                            <option value='webpt04'>webpt04</option>
                            <option value='webpt05'>webpt05</option>
                        </select>
                    </>
                    : <>
                        <pre className='name'>{this.props.user.firstName} {this.props.user.lastName}</pre>
                        <pre className='role'>{this.props.user.cohort}</pre>
                    </>
                }
            </div>
            <div className='info'>
                <pre className='title'>Preferred Role</pre>
                {this.state.editing
                    ? <select className='value' onChange={this.h_select_change} name='role' value={this.props.user.role}>
                        <option value='webui'>Webui</option>
                        <option value='frontend'>Frontend</option>
                        <option value='backend'>Backend</option>
                    </select>
                    : <pre className='value'>{this.props.user.role}</pre>
                }
            </div>
            <div className='info'>
                <pre className='title'>Project Manager</pre>
                {this.state.editing
                    ? <select className='value' onChange={this.h_select_change} name='project_manager' value={this.props.user.project_manager}>
                        <option value='Carlos'>Carlos</option>
                        <option value='Lola'>Lola</option>
                        <option value='Jack Daniels'>Jack Daniels</option>
                    </select>
                    : <pre className='value'>{this.props.user.project_manager}</pre>
                }
            </div>
            <div className='info'>
                <pre className='title'>Project</pre>
                {this.state.editing
                    ? <select className='value' onChange={this.h_select_change} name='project' value={this.props.user.project}>
                        <option value='Rover'>Rover</option>
                        <option value='The Giant'>The Giant</option>
                        <option value='Mutiny'>Mutiny</option>
                    </select>
                    : <pre className='value'>{this.props.user.project || 'None'}</pre>
                }
            </div>
            <div className='actions'>
                <button onClick={this.h_toggle_edit} className={this.state.editing ? 'active' : null}>{this.state.editing ? 'Editing' : 'Edit'}</button>
                <button onClick={this.h_remove}>Remove</button>
            </div>
        </div>
}

export default User