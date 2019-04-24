import React, {Component} from 'react'
import {connect} from 'react-redux'
import Styled from 'styled-components'
//ACTIONS
import {login, forgotPassword, addUser} from '../actions'
//COMPONENTS
import Header from '../components/outside/header'
import Login from '../components/outside/login/login'
import ForgotPassword from '../components/outside/login/forgotPassword'
import CreateAccount from '../components/outside/login/createAccount'

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
            <Content>
                <div className='logo'>
                    <h1>Thursday</h1>
                </div>
                {this.props.match.url === '/login' && <Login input={this.h_input}/>}
                {this.props.match.url === '/lostandfound' && <ForgotPassword input={this.h_input}/>}
                {this.props.match.url === '/createaccount' && <CreateAccount input={this.h_input}/>}
            </Content>
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


//should styled be in a seperate file?
const Wrapper = Styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`
const Content = Styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    justify-items: center;
    max-width: 800px;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 2px solid #888;
        font-size: 8rem;
        width: 100%;
        height: 100%;
        text-align: center;
        h1 {
            &::first-letter {
                color: #bb1333;
            }
        }
    }
    .form {
        display: flex;
        flex-direction: column;
        width: 100%;
        min-width: 400px;
        padding: 0 5rem;
        & > * {
            margin: 1rem 0;
        }
        input, button {
            border: 2px solid #888;
            border-radius: 0.5rem;
            font-size: 1.6rem;
            padding: 1.5rem 1rem;
        }
        input {
            background-color: transparent;
            color: #888;
            &:focus {
                border-color: #08addd;
                color: #ccc;
            }
        }
        button {
            background-color: #08addd;
            border-color: #08addd;
            color: #222;
            cursor: pointer;
            font-weight: 700;
            &:hover {
                color: #ccc;
            }
        }
        .links {
            display: flex;
            justify-content: space-between;
            font-size: 1.6rem;


            a {
                    &:hover {
                    color: #fff;
                }
            }
        }
    }
`