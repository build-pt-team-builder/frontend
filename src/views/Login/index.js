import React, {Component} from 'react'

import Header from '../../components/SharedComponents/Header/Public'
import Login from './login'
import ForgotPassword from './forgotPassword'
import CreateAccount from './createAccount'
//STYLE
import Wrapper from './style'

class LoginPage extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
            message: '',
        }
    }
    //actions
    h_login = () => {}
    h_forgotPassword = () => {}
    h_createUser = () => {}
    h_input = e => this.setState({[e.target.name]: e.target.value})
    render = () => 
        <Wrapper>
            <Header />
            <div className='content'>
                <div className='logo'>
                    <h1>Thursday</h1>
                </div>
                {this.props.match.url === '/login' && <Login input={this.h_input}/>}
                {this.props.match.url === '/lostandfound' && <ForgotPassword input={this.h_input}/>}
                {this.props.match.url === '/signup' && <CreateAccount input={this.h_input}/>}
            </div>
        </Wrapper>
}

export default LoginPage