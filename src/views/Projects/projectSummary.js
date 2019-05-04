import React, {Component} from 'react'

class ProjectSummary extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render = () =>
        <div id={this.props.project.id} className='summary' onClick={this.props.h_open}>
            <div className='identity'>
                <pre className='name'>{this.props.project.name}</pre>
            </div>
            <div className='positions'>
                <div className='position action'>
                    <button className='add'>Add Role</button>
                </div>
                {this.props.project.positions.map((position,idx) =>
                    <div
                        className={this.props.active_roles.filter(role => role.name === position.role).length !== 0 ? 'position active' : 'position'}
                        key={idx}
                    >
                        <pre className='role'>{position.role}</pre>
                        <pre className='member'>{position.member}</pre>
                    </div>
                )}
            </div>
        </div>
}

export default ProjectSummary