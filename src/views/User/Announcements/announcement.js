import React from 'react'

const Announcement = ({content}) =>
    <div className='announcement'>
        <p className='title'>{content.title}</p>
        <div className='author'>
            <p>{content.author}</p>
            <pre> - </pre>
            <p>{content.created}</p>
        </div>
        <p className='content'>{content.content}</p>
    </div>

export default Announcement