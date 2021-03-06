import React from 'react'
import {Link} from 'react-router-dom'

import Wrapper from './style'

const AboutUs = () =>
    <Wrapper className='about-us'>
        <header>
            <div className="header-bar">
                <span className="logo">T</span>
                <span className="logo logo-grey">hursday</span>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/features'>Features</Link>
                    <Link to='/aboutus'>About Us</Link>
                    <Link to='/resources'>Resources</Link>
                </nav>
                <div className="header-buttons">
                    <Link to='/signup'>
                        <div className='get-started-btn'>Get Started</div>
                    </Link>
                    <Link to='/login'>
                        <div className='log-in-btn'>Log In</div>
                    </Link>
                </div>
            </div>
        </header>
        <div className="container about-us">
            <div className="hero">
                <h1>Our Team</h1>
            </div>
            <div className="content-block">
                <div className="content-block-small">
                    <img src = "/img/landing/tommy-huynh.png" alt='that'/>
                </div>
                <div className="content-block-large">
                    <h3>Tommy Huynh: Team Lead</h3>
                    <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                </div>
            </div>
            <div className="content-block">
                <div className="content-block-small">
                    <img src = "/img/landing/lavon-stalling.png"alt='that'/>
                </div>
                <div className="content-block-large">
                    <h3>Lavon Stalling: Backend Developer</h3>
                    <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                </div>
            </div>
            <div className="content-block">
                <div className="content-block-small">
                    <img src = "/img/landing/dustin-snoap.png"alt='that'/>
                </div>
                <div className="content-block-large">
                    <h3>Dustin Snoap: Frontend Developer</h3>
                    <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                </div>
            </div>
            <div className="content-block">
                <div className="content-block-small">
                    <img src = "/img/landing/wilfred-morgan.png"alt='that'/>
                </div>
                <div className="content-block-large">
                    <h3>Wilfred Morgan: Frontend Developer</h3>
                    <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                </div>
            </div>
            <div className="content-block">
                <div className="content-block-small">
                    <img src = "/img/landing/joshua-kinslow.png"alt='that'/>
                </div>
                <div className="content-block-large">
                    <h3>Joshua Kinslow: Web UI Developer</h3>
                    <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                </div>
            </div>
            <div className="content-block">
                <div className="content-block-small">
                    <img src = "/img/landing/kenichi-ruf.png"alt='that'/>
                </div>
                <div className="content-block-large">
                    <h3>Kenichi Ruf: Web UI Developer</h3>
                    <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                </div>
            </div>
        </div>
        <footer>
            <div>Icons made by
            <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
            </div>
        </footer>
    </Wrapper>

export default AboutUs