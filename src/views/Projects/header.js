import React from 'react'

const Header = ({stats}) =>
    <header>
        {stats.map((stat, idx) =>
            <div className='stat' key={idx}>
                <pre className='value'>{stat.value}</pre>
                <pre className='name'>{stat.displayText}</pre>
            </div>
        )}
    </header>

export default Header