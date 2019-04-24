import React from 'react'
import {Link} from 'react-router-dom'

const ForgotPassword = props =>
    <div className='form'>
        <input onChange={props.input} type='text' name='email' placeholder='email' />
        <button>Help Me Remember</button>
        <div className='links'>
            <Link to='/login'>I Want To Log In!</Link>
            <pre>-</pre>
            <Link to='/createaccount'>Create an Account</Link>
        </div>
    </div>

export default ForgotPassword