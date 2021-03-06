import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Content from './style'
import Profile from '../Profile'

const links = [
    {displayText: 'Announcements', to: '/main/announcements', imgSrc: '/', altText: ''},
    {displayText: 'Users', to: '/main/users', imgSrc: '/', altText: ''},
    // {displayText: 'Groups', to: '/home', imgSrc: '/', altText: ''},
    {displayText: 'Projects', to: '/main/projects', imgSrc: '/', altText: ''},
    {displayText: 'Add Project', to: '/main/projects/add', imgSrc: '/', altText: ''},
    {displayText: 'Settings', to: '/main/settings', imgSrc: '/', altText: ''},
    {displayText: 'Log Out', to: '/', imgSrc: '/', altText: ''},
]

class SideNav extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render = () =>
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
                        className={this.props.location.pathname === link.to ? 'selected' : null} >
                        <img src={link.imgSrc} alt={link.altText}/>
                        <pre>{link.displayText}</pre>
                    </Link>
                )}
            </nav>
        </Content>
}

export default SideNav