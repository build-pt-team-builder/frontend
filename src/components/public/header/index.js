import React from 'react'
import {Link} from 'react-router-dom'

import Content from './style'

const links = [
    {display: 'Thursday', to: '/', class: 'logo'},
    {display: 'Home', to: '/home', class: null},
    {display: 'Product', to: '/', class: null},
    {display: 'Use Cases', to: '/', class: null},
    {display: 'Pricing', to: '/', class: null},
    {display: 'Login', to: '/login', class: 'login'},
]

const Header = () =>
    <Content>
        {links.map(link => 
            <div className={link.class} key={link.display}>
                <Link to={link.to}>{link.display}</Link>
            </div>
        )}
    </Content>

export default Header