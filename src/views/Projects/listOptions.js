import React, {Component} from 'react'

class ListOptions extends Component {
    constructor() {
        super()
        this.state = {
            status_filters: [],
            role_filters: [],
            roles: ['WebUI','Frontend','Backend','UI/UX','Android','DS','Lead','None'],
        }
    }
    h_toggle_status_filter = e => {

        this.props.toggle_status(e)
    }
    h_toggle_position_filter = e => {
        const name = e.target.name.toLowerCase()
        this.setState(prevState => {
            let role_filters = prevState.role_filters
            role_filters.includes(name)
            ?   role_filters = prevState.role_filters.filter(role => role !== name)
            :   role_filters.push(name)
            this.props.toggle_position(role_filters)
            return {role_filters: role_filters}
        })
    }
    render = () =>
        <div className='project-options'>
            <div className='options'>
                <h3 className='title'>Status: </h3>
                {this.props.options.status.map((option, idx) => 
                    <button
                        className={option.value ? 'option active' : 'option'}
                        name={option.name}
                        onClick={this.h_toggle_status_filter}
                        key={idx}
                    >
                        {option.name}
                    </button>    
                )}
            </div>
            <div className='options'>
                <h3 className='title'>Positions: </h3>
                {this.state.roles.map((role, idx) => 
                    <button
                        className={this.state.role_filters.includes(role.toLowerCase()) ? 'option active' : 'option'}
                        name={role}
                        onClick={this.h_toggle_position_filter}
                        key={idx}
                    >
                        {role}
                    </button>
                )}
            </div>
            <div className='options action'>
                <button className='highlight' onClick={this.props.toggle_create}>Create</button>
            </div>
        </div>
}

export default ListOptions