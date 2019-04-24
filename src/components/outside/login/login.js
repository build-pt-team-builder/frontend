import React from 'react'
import {Link} from 'react-router-dom'

const Login = props =>
    <div className='form'>
        <input onChange={props.input} type='text' name='username' placeholder='Username' />
        <input onChange={props.input} type='password' name='password' placeholder='Password'/>
        <button>Log In</button>
        <div className='links'>
            <Link to='/lostandfound'>Forgot Password?</Link>
            <pre>-</pre>
            <Link to='/createaccount'>Create an Account</Link>
        </div>
    </div>

export default Login