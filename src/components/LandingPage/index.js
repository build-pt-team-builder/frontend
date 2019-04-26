import React from 'react'

import Header from '../SharedComponents/Header'
import Content from './style'

const LandingPage = () =>
    <>
        <Header />
        <Content>
            <section className='main'>
                <div></div>
                <div className='words'>
                    <h1 className='title'>Thursday</h1>
                    <div className='description'>
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

export default LandingPage