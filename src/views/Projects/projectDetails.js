import React, {Component} from 'react'

class ProjectDetails extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
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
            {/* {this.props.project.description.map((desc,idx) =>
                <React.Fragment key={idx}>
                    <pre className='title' >{desc.title}: </pre>
                    {this.state.editing
                        ?   <textarea type='text' name={desc.title.toLowerCase()} onChange={this.h_update_field} placeholder={desc.title} value={this.state[desc.title.toLowerCase()]}/>
                        :   <p className='value'>{this.state}</p>
                    }
                </React.Fragment>
            )} */}
            <pre className='title'>Pitch:</pre>
            {this.state.editing
            ?   <textarea name='pitch' onChange={this.h_update_field} placeholder='How good is your pitch?' value={this.state.pitch}/>
            :   <p className='value'>{this.state.pitch}</p>
            }
            <pre className='title'>MVP:</pre>
            {this.state.editing
            ?   <textarea name='mvp' onChange={this.h_update_field} placeholder='What are the project requirements?' value={this.state.mvp}/>
            :   <p className='value'>{this.state.mvp}</p>
            }
            <pre className='title'>Stretch:</pre>
            {this.state.editing
            ?   <textarea name='stretch' onChange={this.h_update_field} placeholder='What else would you like to see?' value={this.state.stretch}/>
            :   <p className='value'>{this.state.stretch}</p>
            }
            <pre className='title'>Author:</pre>
            {this.state.editing
            ?   <input type='text' name='author' onChange={this.h_update_field} placeholder='Who wrote this?' value={this.state.author}/>
            :   <p className='value'>{this.state.author}</p>
            }
            <pre className='title'>Created:</pre>
            {this.state.editing
            ?   <input name='created' onChange={this.h_update_field} placeholder='05/06/2019' value={this.state.created}/>
            :   <p className='value'>{this.state.created}</p>
            }
            <pre className='title'>Status:</pre>
            <p className='value'>{this.props.project.status}</p>
            <div className='options'>
                <button
                    onClick={this.state.editing ? this.h_toggle_edit_mode : null}>
                    {this.state.editing ? 'Back' : 'Complete'}
                </button>
                <button>Delete</button>
                <button
                    id={this.props.project.id}
                    onClick={this.h_toggle_edit_mode}
                    className={this.state.editing ? 'active' : null}>
                    Edit
                </button>
                <button
                    id={this.props.project.id}
                    onClick={this.props.h_close}>
                    Close
                </button>
            </div>
        </div>
}

export default ProjectDetails