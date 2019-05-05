import React, {Component} from 'react'

class Role extends Component {
    constructor() {
        super()
        this.state = {
            add_user: false,
            role: '',
            member: '',
            id: '',
        }
    }
    componentDidMount = () => {
        this.setState({
            id: this.props.role.id,
            role: this.props.role.role,
            member: this.props.role.member,
        })
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props) {
            this.setState({
                id: nextProps.role.id,
                role: nextProps.role.role,
                member: nextProps.role.member,
            })
        }
    }
    h_toggle_add_user = e => {
        e.stopPropagation()
        if(!this.state.add_user) {
            this.setState(prevState => {return {add_user: !prevState.add_user}})
        }
    }
    h_null_click = e => e.stopPropagation() //prevents triggering parent event
    h_update_field = e => this.setState({member: e.target.value})
    h_keyup = e => e.key === 'Enter' ? this.h_update() : null
    h_update = () => {
        this.setState({add_user: false})
        this.props.edit_user(this.state.id, this.state.member)
    }
    render = () =>
        <div
            className={this.props.active_roles.includes(this.props.role.role.toLowerCase())
            ?   'position active'
            :   this.props.active_roles.includes('none') && this.props.role.member === null
                ? 'position active'
                : 'position'
            }
            onClick={this.h_toggle_add_user}
            onKeyUp={this.h_keyup}
            onBlur={this.h_update}
        >
        {console.log(this.props)}
            {this.props.role.role === 'none'
                ?   <select onClick={this.h_null_click} onChange={this.props.add_role} value='role'>
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
                :   this.state.add_user
                    ?   <>
                            <pre className='role'>{this.props.role.role}</pre>
                            <input autoFocus type='text' onChange={this.h_update_field} placeholder={this.props.role.member} value={this.state.member ? this.state.member : ''} />
                        </>
                    :   <>
                            <pre className='role'>{this.props.role.role}</pre>
                            <pre className='member'>{this.state.member}</pre>
                        </>
            }
        </div>
}

export default Role