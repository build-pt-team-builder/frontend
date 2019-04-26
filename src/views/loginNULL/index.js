import React, {Component} from 'react'
import {connect} from 'react-redux'
//ACTIONS
import {login, forgotPassword, addUser} from '../../actions'
//COMPONENTS
import Header from '../../components/public/header'
import Login from '../../components/public/login/login'
import ForgotPassword from '../../components/public/login/forgotPassword'
import CreateAccount from '../../components/public/login/createAccount'
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
    h_login = () => {
        const credentials = {username: this.state.username, password: this.state.password}
        this.props.login(credentials)
    }
    h_forgotPassword = () => {
        this.props.forgotPassword(this.state.email)
    }
    h_createUser = () => {
        const user = {username: this.state.username, password: this.state.password, email: this.state.email}
        this.props.createUser(user)
    }
    //update the state with field inputs
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
                {this.props.match.url === '/createaccount' && <CreateAccount input={this.h_input}/>}
            </div>
        </Wrapper>
}

const mapStateToProps = state => {
    return {
        error: state.user.error,
        message: state.user.message,
    }
}

export default connect(
    mapStateToProps,
    {login, forgotPassword, addUser})(LoginPage)