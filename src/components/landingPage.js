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

const LandingPage = () =>
    <>
        <Header>
            {links.map(link => 
                <div className={link.class} key={link.display}>
                    <Link to={link.to}>{link.display}</Link>
                </div>
            )}
        </Header>
        <Content>
            <section className='main'>
                <div></div>
                <div className='words'>
                    <h1 className='title'>Thursday</h1>
                    <div class='description'>
                        <p>Etiam nibh nibh, rhoncus vel congue id, iaculis nec lacus. Etiam non rhoncus diam.</p>
                        <p>Suspendisse potenti. Pellentesque elementum volutpat ex.</p>
                    </div>
                    <div className='buttons'>
                        <button className='blue'>Free Trial</button>
                        <button className='red'>Sign Up</button>
                    </div>
                </div>
                <div className='arrow'>
                    <figure></figure>
                </div>
            </section>
        </Content>
    </>

const Content = Styled.div`
    align-items: center; 
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    .main {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;

        .words {
            display: flex;
            flex-direction: column;
            height: 175px;
            justify-content: space-between;
            text-align: center;
            .title {
                font-size: 5rem;
                font-weight: 700;
                text-transform: uppercase;
                &::first-letter {
                    color: #bb1333;
                }
            }
            .description {
                display: flex;
                flex-direction: column;
                height: 35px;
                justify-content: space-between;
                p {
                    color: #888;
                    font-size: 1.4rem; 
                }
            }
            .buttons {
                button {
                    background-color: transparent;
                    border: 2px solid transparent;
                    color: #ccc;
                    font-size: 1.6rem;
                    margin: 0 1rem;
                    padding: 0.75rem;
                    width: 10rem;
                    &.blue {
                        border-color: #08addd;
                        &:hover {
                            background-color: #08addd;
                            color: #222;
                        }
                    }
                    &.red {
                        border-color: #bb1333;
                        &:hover {
                            background-color: #bb1333;
                            color: #222;
                        }
                    }
                }
            }
        }
        .arrow {
            align-self: center;
            border: 5px solid #08addd;
            border-width: 0 0 5px 5px;
            cursor: pointer;
            height: 75px;
            transform: translateY(-5rem) rotateZ(-45deg);
            width: 75px;
        }
    }
`

const Header = Styled.header`
    align-items: center;
    border-bottom: 2px solid #888;
    display: flex;
    height: 5rem;
    padding: 0 2rem;
    position: fixed;
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
            text-transform: uppercase;
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

export default LandingPage