import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {add_user} from '../../actions/users'

import Header from './header'
import Wrapper from './style'

class CreateAccount extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            avatar: 'avatar.png',
            last_name: '',
            cohort: 'none',
            email: '',
            password: '',
        }
    }
    h_update_field = e => {
        this.setState({[e.target.name]: e.target.value})
        e.target.classList.remove('placeholder')
    }
    h_add_user = () => {
        const user = {
            firstName: this.state.first_name,
            lastName: this.state.last_name,
            email: this.state.email,
            avatar: this.state.avatar,
            cohort: this.state.cohort,
            password: this.state.password,
        }
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
                <input onChange={this.h_update_field} type='text' name='first_name' placeholder='Frist Name' value={this.state.first_name}/>
                <input onChange={this.h_update_field} type='text' name='last_name' placeholder='Last Name' value={this.state.last_name}/>
                <input onChange={this.h_update_field} type='text' name='email' placeholder='Email'  value={this.state.email}/>
                <select name='cohort' placeholder='Cohort' className='placeholder' onChange={this.h_update_field} value={this.state.cohort}>
                    <option value='none' disabled>Cohort</option>
                    <option value='webpt03'>Webpt03</option>
                    <option value='webpt04'>Webpt04</option>
                    <option value='webpt05'>Webpt05</option>
                </select>
                <input onChange={this.h_update_field} type='password' name='password' placeholder='Password' value={this.state.password}/>
                <button onClick={this.h_add_user}>Sign Me Up, Scotty!</button>
                <div className='links'>
                    <Link to='/login'>I Want To Log In!</Link>
                    <pre>-</pre>
                    <Link to='/forgetful'>Forgot Password?</Link>
                </div>
            </div>
        </div>
    </Wrapper>
}

const mapStateToProps = state => {
    return {users: state.users.users}
}

export default connect(
    mapStateToProps,{add_user})(CreateAccount)