import React from 'react'
import {Link} from 'react-router-dom'

import Content from './style'
import Elliot from '../../../assets/imgs/elliot.jpg'

const user = {
    username: 'mrrobot',
    firstName: 'Elliot',
    lastName: 'Alderson',
    avatarSrc: 'elliot.jpg',
    role: 'Front-End Developer',
}
const links = [
    {displayText: 'News', to: '/home', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Inbox', to: '/home', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Groups', to: '/home', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Projects', to: '/home', imgSrc: '/', altText: '', selected: true},
    {displayText: 'Settings', to: '/home', imgSrc: '/', altText: '', selected: false},
    {displayText: 'Log Out', to: '/', imgSrc: '/', altText: '', selected: false},
]

const SideNav = props =>
    <Content>
        <div className='logo'>
            <h3>Thursday</h3>
        </div>
        <div className='user'>
            <div className='avatar'>
                <img src={Elliot} alt={user.username}/>
            </div>
            <pre className='name'>{user.firstName} {user.lastName}</pre>
            <pre className='role'>{user.role}</pre>
            {/* <pre className='username'>{'@' + user.username}</pre> */}
        </div>
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