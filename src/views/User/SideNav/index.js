import React from 'react'
import {Link} from 'react-router-dom'

import Content from './style'
import Profile from '../Profile'

const links = [
    {displayText: 'Announcements', to: '/home', imgSrc: '/', altText: ''},
    {displayText: 'Users', to: '/users', imgSrc: '/', altText: ''},
    // {displayText: 'Groups', to: '/home', imgSrc: '/', altText: ''},
    {displayText: 'Projects', to: '/projects', imgSrc: '/', altText: ''},
    {displayText: 'Settings', to: '/settings', imgSrc: '/', altText: ''},
    {displayText: 'Log Out', to: '/', imgSrc: '/', altText: ''},
]

const SideNav = props =>
    <Content>
        <div className='logo'>
            <h3>Thursday</h3>
        </div>
        <Profile />
        <nav className='links'>
            {links.map(link =>
                <Link
                    to={link.to}
                    key={link.displayText}
                    className={window.location.pathname === link.to ? 'selected' : null} >
                    <img src={link.imgSrc} alt={link.altText}/>
                    <pre>{link.displayText}</pre>
                </Link>
            )}
        </nav>
    </Content>
    

export default SideNav