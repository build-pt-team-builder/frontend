import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>
    <header className='header'>
        <span className="logo">Thursday</span>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/features'>Features</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/resources'>Resources</Link>
        </nav>
        <div className="buttons">
            <Link to='/signup'>Get Started</Link>
            <Link to='/login'>Log In</Link>
        </div>
    </header>

export default Header