import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from './style'

const Footer = () =>
    <Wrapper>
        <div className='links'>
            <Link to='/projects' className='link'>About</Link>
            <Link to='/projects' className='link'>Blog</Link>
            <Link to='/projects' className='link'>Contact</Link>
            <Link to='/projects' className='link'>Tw</Link>
            <Link to='/projects' className='link'>Fb</Link>
            <Link to='/projects' className='link'>Git</Link>
        </div>
    </Wrapper>

export default Footer
