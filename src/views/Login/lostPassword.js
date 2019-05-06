import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {add_user} from '../../actions/users'

import Header from './header'
import Wrapper from './style'

class LostPassword extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }
    h_update_field = e => {
        this.setState({[e.target.name]: e.target.value})
        e.target.classList.remove('placeholder')
    }
    h_add_user = () => {
        const user = {email: this.state.email}
        this.props.add_user(user)
    }
    render = () =>
    <Wrapper className='main'>
        <Header />
        <div className='content'>
            <div className='logo'>
                <h1>Thursday</h1>
            </div>
            <div className='form'>
                <input onChange={this.h_update_field} type='text' name='email' placeholder='Email'  value={this.state.email}/>
                <button onClick={this.h_add_user}>Refresh My Memory</button>
                <div className='links'>
                    <Link to='/login'>Log Me In!</Link>
                    <pre>-</pre>
                    <Link to='/signup'>Sign Me Uo!</Link>
                </div>
            </div>
        </div>
    </Wrapper>
}

const mapStateToProps = state => {
    return {users: state.users.users}
}

export default connect(
    mapStateToProps,{add_user})(LostPassword)