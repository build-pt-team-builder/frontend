import React from 'react'
import {Link} from 'react-router-dom'

const CreateAccount = props =>
    <div className='form'>
        <input onChange={props.input} type='text' name='username' placeholder='Username' />
        <input onChange={props.input} type='text' name='email' placeholder='Email' />
        <input onChange={props.input} type='password' name='password' placeholder='Password'/>
        <button>Sign Me Up, Scotty!</button>
        <div className='links'>
            <Link to='/login'>I Want To Log In!</Link>
            <pre>-</pre>
            <Link to='/lostandfound'>Forgot Password?</Link>
        </div>
    </div>

export default CreateAccount