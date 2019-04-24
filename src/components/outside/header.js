import React from 'react'
import Styled from 'styled-components'
import {Link} from 'react-router-dom'

const links = [
    {display: 'Thursday', to: '/', class: 'logo'},
    {display: 'Home', to: '/', class: null},
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

const Content = Styled.header`
    align-items: center;
    border-bottom: 2px solid #888;
    display: flex;
    height: 5rem;
    padding: 0 2rem;
    position: fixed;
    top: 0;
    width: 100%;

    div {
        align-items: center;
        border-bottom: 2px solid #888;
        display: flex;
        font-size: 1.8rem;
        height: 100%;
        margin: 0 1rem;
        transform: translateY(2px);

        &:hover:not(.logo):not(.login) {
            border-color: #fff;
            a {
                color: #fff;
            }
        }
    }
    .logo {
        margin-right: auto;
        a {
            font-size: 2.4rem;
            &::first-letter {
                color: #bb1333;
            }
        }
    }
    .login {
        a {
            border: 2px solid #08addd;
            border-radius: 2.5rem;
            padding: 0.7rem;
        }
        &:hover {
            color: #fff;
        }
    }
`