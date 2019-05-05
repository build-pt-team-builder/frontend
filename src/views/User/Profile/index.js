import React, {Component} from 'react'

import Wrapper from './style'

const user = {
    username: 'mrrobot',
    firstName: 'Elliot',
    lastName: 'Alderson',
    avatarSrc: 'elliot.jpg',
    role: 'Front-End Developer',
}

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: user,
            edit: false,
        }
    }
    componentDidMount = () => {

    }
    h_update_field = e => {
        this.setState({
            user: {
                ...user,
                [e.target.name]: e.target.value,
            }
        })
    }
    h_edit = () => this.setState({edit: true})
    h_save = () => this.setState({edit: false})
    render = () =>
        <Wrapper className='profile user'>
            {this.state.edit
            ?   <>
                    <div className='avatar'>
                        <img src={`/img/${this.state.user.avatarSrc}`} alt='you'/>
                        <pre>Change</pre>
                    </div><div>
                        <pre className='title'>First Name:</pre>
                        <input type='text' onChange={this.h_update_field} name='firstName' placeholder='First Name' value={this.state.user.firstName}/>
                    </div><div>
                        <pre className='title'>Last Name:</pre>
                        <input type='text' onChange={this.h_update_field} name='lastName' placeholder='Last Name' value={this.state.user.lastName}/>
                    </div><div>
                        <pre className='title'>Cohort: </pre>
                        <select>
                            <optgroup label='Cohort'>
                            </optgroup>
                            <optgroup label='Full Stack'>
                                <option value='web01'>Web001</option>
                                <option value='web02'>Web002</option>
                                <option value='web03'>Web003</option>
                            </optgroup>
                        </select>
                    </div><div>
                        <pre className='title'>Preferred Role: </pre>
                        <select>
                            <optgroup label='Role'>
                            </optgroup>
                            <optgroup label='Full Stack'>
                                <option value='web01'>WebUI</option>
                                <option value='web02'>Frontend</option>
                                <option value='web03'>Backend</option>
                            </optgroup>
                        </select>
                    </div><div>
                        <pre className='title'>Project Manager: </pre>
                        <select>
                            <optgroup label='Role'>
                            </optgroup>
                            <optgroup label='Full Stack'>
                                <option value='web01'>I manage myself!</option>
                                <option value='web02'>Carlos</option>
                                <option value='web03'>Mario</option>
                            </optgroup>
                        </select>
                    </div><div className='actions'>
                        <button onClick={this.h_save}>Back</button>
                        <button onClick={this.h_save}>Save</button>
                    </div>
                </>
            :   <>
                    <div className='avatar'>
                        <img src={`/img/${this.state.user.avatarSrc}`} alt='you'/>
                        <pre onClick={this.h_edit}>Edit</pre>
                    </div>
                    <pre className='name'>{this.state.user.firstName} {this.state.user.lastName}</pre>
                    <pre className='role'>{this.state.user.role}</pre>
                </>
            }
        </Wrapper>
}

export default Profile