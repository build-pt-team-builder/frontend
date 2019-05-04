import React from 'react'

import SideNav from '../User/SideNav'
import Wrapper from './style'

const Home = ({Content}) => 
    <Wrapper className='home'>
        <SideNav />
        <Content />
    </Wrapper>

export default Home