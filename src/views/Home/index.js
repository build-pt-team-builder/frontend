import React from 'react'

import SideNav from '../User/SideNav'
import Wrapper from './style'
import Footer from '../../components/SharedComponents/Footer'
// import Header from '../../components/SharedComponents/Header/Public'
import ProjectList from '../Projects/ProjectList'

const Home = ({Content}) => 
    <Wrapper className='home'>
        <SideNav />
        <ProjectList />
        <Footer />
    </Wrapper>

export default Home