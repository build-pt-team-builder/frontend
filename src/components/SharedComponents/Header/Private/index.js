import React from 'react'
import Wrapper from './style'

const Header = ({stats}) =>
    <Wrapper className='header'>
        {stats.map((stat, idx) =>
            <div className='stat' key={idx}>
                <pre className='value'>{stat.value}</pre>
                <pre className='name'>{stat.displayText}</pre>
            </div>
        )}
    </Wrapper>

export default Header