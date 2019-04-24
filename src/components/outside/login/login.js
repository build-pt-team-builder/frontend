import React from 'react'
import {Link} from 'react-router-dom'
// import Styled from 'styled-components'

const Login = () =>
    <div className='form'>
        <input type='text' name='username' placeholder='Username' />
        <input type='password' name='password' placeholder='Password'/>
        <button>Log In</button>
        <div className='links'>
            <Link to='/lostandfound'>Forgot Password?</Link>
            <pre>-</pre>
            <Link to='/createaccount'>Create an Account</Link>
        </div>
    </div>

export default Login