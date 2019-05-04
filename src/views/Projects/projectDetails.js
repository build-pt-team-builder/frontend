import React, {Component} from 'react'

class ProjectDetails extends Component {
    constructor() {
        super()
        this.state = {
            editing: false,
            pitch: '',
            mvp: '',
            stretch: '',
            author: '',
            created: '',
            status: '',
        }
    }
    componentDidMount = () => {
        this.setState({
            status: this.props.project.status,
            active: this.props.project.active,
            id: this.props.project.id,
            pitch: this.props.project.description[0].value,
            mvp: this.props.project.description[1].value,
            stretch: this.props.project.description[2].value,
            author: this.props.project.description[3].value,
            created: this.props.project.description[4].value,
        })
    }
    h_toggle_edit_mode = () => this.setState(prevState => {return {editing: !prevState.editing}})
    h_update = () => {

    }
    h_update_field = e => {
        e.stopPropagation()
        const value = e.target.value
        this.setState({[e.target.name]: value})
    }
    render = () =>
        <div className={this.props.project.active ? 'description active' : 'description'}>
            {this.props.project.description.map((desc,idx) =>
                <React.Fragment key={idx}>
                <pre className='title' >{desc.title}: </pre>
                {this.state.editing
                    ?   <input type='text' name={desc.title.toLowerCase()} onChange={this.h_update_field} placeholder={desc.title} value={this.state[desc.title.toLowerCase()]}/>
                    :   <p className='value'>{desc.value}</p>
                }
                </React.Fragment>
            )}
            <pre className='title'>Status:</pre>
            <p className='value'>{this.props.project.status}</p>
            <div className='options'>
                <button
                    onClick={this.state.editing ? this.h_toggle_edit_mode : null}>
                    {this.state.editing ? 'Back' : 'Complete'}
                </button>
                <button
                    id={this.props.project.id}
                    onClick={this.h_toggle_edit_mode}
                    className={this.state.editing ? 'active' : null}>
                    Edit
                </button>
                <button>Delete</button>
            </div>
        </div>
}

export default ProjectDetails