import React, {Component} from 'react'

class CreateProject extends Component {
    constructor() {
        super()
        this.state = {
            projectName: '',
            positions: [],
            pitch: '',
        }
    }
    h_input_change = e => {
        console.log('changed')
    }
    render = () =>
        <div className='create project'>
            <div className='summary'>
                <div className='identity'>
                    <input className='name' placeholder='Project Name' onChange={this.h_input_change} value={this.state.projectName}/>
                </div>
                <div className='positions'>
                    <div className='position'>
                        <button className='add'>Add Role</button>
                        {this.state.positions.map((position, idx) =>
                            <div className='position active' key={idx}>
                                <pre className='role'>{position.role}</pre>
                                <pre className='member'>{position.member}</pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='description active'>
                <label className='title'>Pitch: </label>
                <input type='text' name='pitch' placeholder='Tell us about the project.' value={this.state.pitch} onChange={this.h_input_change} />
                <label className='title'>MVP: </label>
                <input type='text' name='mvp' placeholder='What are the mininum goals?' value={this.state.pitch} onChange={this.h_input_change} />
                <label className='title'>Stretch: </label>
                <input type='text' name='stretch' placeholder='What extras should be included?' value={this.state.pitch} onChange={this.h_input_change} />
                <label className='title'>Author: </label>
                <input type='text' name='author' placeholder='Whose idea is this?' value={this.state.pitch} onChange={this.h_input_change} />
                <label className='title'>Created: </label>
                <pre className='value'>03/21/1981</pre>
                <label className='title'>Status: </label>
                <pre className='value'>Being Created...</pre>
            </div>
            <div className='actions'>
                <button>Cancel</button>
                <button>Create</button>
            </div>
        </div>
}

export default CreateProject