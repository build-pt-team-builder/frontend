import React, {Component} from 'react'

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
            && this.props.h_add_role(this.state.project_id, value)
            return {roles: prevState.roles}
        })
        
    }
    h_null_click = e => e.stopPropagation() //prevents triggering parent event
    render = () =>
    <div id={this.props.project.id} className='summary' onClick={this.props.h_open}>
            <div className='identity'>
                <pre className='name'>{this.props.project.name}</pre>
            </div>
            <div className='positions delete roles'>
                <div className='position action'>
                    <button className='add' onClick={this.h_add_role_field}>Add Role</button>
                </div>
                {this.props.project.roles.map((position,idx) =>
                    <div
                        className={this.props.active_roles.filter(role => role.name === position.role).length !== 0 ? 'position active' : 'position'}
                        key={idx}
                    >
                        {position.role === 'none'
                            ?   <select onClick={this.h_null_click} onChange={this.h_add_role} value='role'>
                                    <option value='role' hidden>Role</option>
                                    <option value='cancel'>Cancel</option>
                                    <option value='uiux'>UI/UX</option>
                                    <option value='webui'>WebUI</option>
                                    <option value='frontend'>Frontend</option>
                                    <option value='backend'>Backend</option>
                                    <option value='android'>Android</option>
                                    <option value='data science'>Data Science</option>
                                    <option value='lead'>Lead</option>
                                </select>
                            :   <>
                                    <pre className='role'>{position.role}</pre>
                                    <pre className='member'>{position.member}</pre>
                                </>
                        }
                        
                    </div>
                )}
            </div>
        </div>
}

export default ProjectSummary