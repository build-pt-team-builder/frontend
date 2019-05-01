import React from 'react'
import {Link} from 'react-router-dom'

import Content from './style'
import Profile from '../Profile'

const links = [
    {displayText: 'Announcements', to: '/home', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Users', to: '/users', imgSrc: '/', altText: '', selected: false},
    // {displayText: 'Groups', to: '/home', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Projects', to: '/projects', imgSrc: '/', altText: '', selected: true},
    {displayText: 'Settings', to: '/settings', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Log Out', to: '/', imgSrc: '/', altText: '', selected: false},
]

const SideNav = props =>
    <Content>
        <div className='logo'>
            <h3>Thursday</h3>
        </div>
        <Profile />
        <nav className='links'>
            {links.map(link =>
                <Link to={link.to} key={link.displayText} className={link.selected ? 'selected' : null} >
                    <img src={link.imgSrc} alt={link.altText}/>
                    <pre>{link.displayText}</pre>
                </Link>
            )}
        </nav>
    </Content>

export default SideNav