import React from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const LandingPage = () =>
    <div className='landing-page'>
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
        <div className="container home">
            <div className="hero">
                <h1>Organize Teams Around Ideas</h1>
                <p>Organize your product ideas and create teams to bring them to life.</p>
                <a href="https://teambuilderapp.netlify.com/signup">
                    <div className="get-started-btn">Get Started</div>
                </a>
                <a href="#why">
                    <p className="why-link">Why TeamBuilder?</p>
                </a>
                <a href="#why">
                    <img src="/img/landing/down-arrow.png" className="down-arrow" alt='that'/>
                </a>
            </div>
            <div className="why-teambuilder">
                <h2>Stop Using Spreadsheets to Track Your Product Ideas</h2>
                <div className="content-block">
                    <div className="content-block-small">
                        <img src="/img/landing/idea-icon.svg" alt='that'/>
                    </div>
                    <div className="content-block-large">
                        <h3>Organize Your Product Ideas</h3>
                        <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-block-small">
                        <img src="/img/landing/choose-team-icon.svg" alt='that'/>
                    </div>
                    <div className="content-block-large">
                        <h3>Form The Perfect Teams</h3>
                        <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                    </div>
                </div>
                <div className="content-block">
                    <div className="content-block-small">
                        <img src="/img/landing/launch-icon.svg" alt='that'/>
                    </div>
                    <div className="content-block-large">
                        <h3>Launch Awesome Products</h3>
                        <p>Hate the feeling when you know you had a good idea but can't remember what it was?</p>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div className="footer-bar">
                <div className="references">
                    <p>Icons made by
                        <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>
                        from
                        <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a>
                    </p>
                </div>
            </div>
        </footer>
    </div>

export default LandingPage