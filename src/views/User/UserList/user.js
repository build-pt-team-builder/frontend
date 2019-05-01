import React from 'react'

const User = ({user}) =>
    <div className='user'>
        <div className='info'>
            <img src={`./img/${user.avatar}`} alt='nope'/>
        </div>
        <div className='info'>
            <pre className='name'>{user.firstName} {user.lastName}</pre>
            <pre className='role'>{user.cohort}</pre>
        </div>
        <div className='info'>
            <pre className='title'>Cohort</pre>
            <pre className='value'>{user.cohort}</pre>
        </div>
        <div className='info'>
            <pre className='title'>Preferred Role</pre>
            <pre className='value'>{user.role}</pre>
        </div>
        <div className='info'>
            <pre className='title'>Project Manager</pre>
            <pre className='value'>{user.projectManager}</pre>
        </div>
        <div className='info'>
            <pre className='title'>Project</pre>
            <pre className='value'>{user.project || 'None'}</pre>
        </div>
        <div className='actions'>
            <button>Edit</button>
            <button>Remove</button>
        </div>
    </div>

export default User