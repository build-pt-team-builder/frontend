import React from 'react'

import SideNav from '../User/SideNav'
import Wrapper from './style'
import Footer from '../../components/SharedComponents/Footer'

const Home = ({Content}) => 
    <Wrapper className='home'>
        <SideNav />
        <Content />
        <Footer />
    </Wrapper>

export default Home