import React from 'react'
import {Link} from 'react-router-dom'
// import Styled from 'styled-components'

const CreateAccount = () =>
    <div className='form'>
        <input type='text' name='username' placeholder='Username' />
        <input type='text' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password'/>
        <button>Sign Me Up, Scotty!</button>
        <div className='links'>
            <Link to='/login'>I Want To Log In!</Link>
            <pre>-</pre>
            <Link to='/lostandfound'>Forgot Password?</Link>
        </div>
    </div>

export default CreateAccount