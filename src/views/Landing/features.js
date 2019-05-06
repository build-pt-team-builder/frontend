import React from 'react'
import {Link} from 'react-router-dom'

import Wrapper from './style'

const Features = () =>
    <Wrapper className='features'>
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
        <div className="container features">
            <div className="hero">
                <h1>Features</h1>
                <p>Organize your product ideas and create teams to bring them to life.</p>
                <a href="https://teambuilderapp.netlify.com/">
                    <div className="get-started-btn">Get Started</div>
                </a>
                <p className="why-link">
                    <a href="#features">Features</a>
                </p>
                <a href="#features">
                    <img src = "/img/landing/down-arrow.png" className="down-arrow" alt='that'/>
                </a>
            </div>
            <div className="feature-list">
                <div className="feature">
                    <div className="feature-tab">
                        <h2 className="feature-name">Custom Columns</h2>
                    </div>
                    <div className="feature-details">
                        <p>Add custom columns to your tables.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-tab">
                        <h2 className="feature-name">Idea Submissions</h2>
                    </div>
                    <div className="feature-details">
                        <p>Let anyone submit product ideas.</p>
                    </div>
                </div>
                <div className="feature">
                    <div className="feature-tab">
                        <h2 className="feature-name">Role Based Permissions</h2>
                    </div>
                    <div className="feature-details">
                        <p>Choose who gets to do what.</p>
                    </div>
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

export default Features