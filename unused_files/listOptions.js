import React from 'react'

const ListOptions = ({options, toggle_status, toggle_position, toggle_create}) => 
    <div className='project-options'>
        <div className='options'>
            <h3 className='title'>Status: </h3>
            {options.status.map((option, idx) => 
                <button
                    className={option.value ? 'option active' : 'option'}
                    name={option.name}
                    onClick={toggle_status}
                    key={idx}
                >
                    {option.name}
                </button>    
            )}
        </div>
        <div className='options'>
            <h3 className='title'>Positions: </h3>
            {options.positions.map((option, idx) =>
                <button
                    className={option.value ? 'option active' : 'option'}
                    name={option.name}
                    onClick={toggle_position}
                    key={idx}
                >
                    {option.name}
                </button>
            )}
        </div>
        <div className='options action'>
            <button className='highlight' onClick={toggle_create}>Create</button>
        </div>
    </div>

export default ListOptions