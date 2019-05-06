import React from 'react'
import {Link} from 'react-router-dom'

import Wrapper from './style'

const Resources = () =>
    <Wrapper className='resources'>
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
        <div className="container resources">
            <div className="hero">
                <h1>Resources</h1>
            </div>
            <div className="resource-categories">
                <span>Categories:</span>
                <div className="resource-tab" data-tab = "all">All Resources</div>
                <div className="resource-tab" data-tab = "product">Product Mangement</div>
                <div className="resource-tab" data-tab = "team">Team Building</div>
                <div className="resource-tab" data-tab = "leadership">Leadership</div>
            </div>
            <div className="resource-list">
                <div className="resource-card" data-tab = "leadership">
                    <h2>Resource</h2>
                    <p>Resource Description</p>
                </div>
                <div className="resource-card" data-tab = "product">
                    <h2>Resource</h2>
                    <p>Resource Description</p>
                </div>
                <div className="resource-card" data-tab = "team">
                    <h2>Resource</h2>
                    <p>Resource Description</p>
                </div>
                <div className="resource-card" data-tab = "team">
                    <h2>Resource</h2>
                    <p>Resource Description</p>
                </div>
            </div>
        </div>
        <footer>
            <div>
                <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                is licensed by
                <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
            </div>
        </footer>
    </Wrapper>

export default Resources