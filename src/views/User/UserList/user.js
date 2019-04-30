import React from 'react'

const User = ({user}) =>
    <tr className='user'>
        <td><img src={user.avatar}/></td>
        <td>
            <pre className='name'>{user.firstName} {user.lastName}</pre>
            <pre className='role'>{user.role}</pre>
        </td>
        <td><pre className='value'>{user.cohort}</pre></td>
        <td><pre className='value'>{user.role}</pre></td>
        <td><pre className='value'>{user.projectManager}</pre></td>
        <td><pre className='value'>{user.project}</pre></td>
        <td>
            <button>Edit</button>
            <button>Remove</button>
        </td>
    </tr>

export default User