import React, {Component} from 'react'
import Wrapper from './style'

import Header from '../../../components/SharedComponents/Header/Private'
import ListOptions from '../../../components/SharedComponents/ListOptions'
import User from './user'
// import Options from './options'

const headerStats = [
    {displayText: 'Total Users', value: 42},
    {displayText: 'Users With Projects', value: 15},
    {displayText: 'Total PM Groups', value: 27},
    {displayText: 'Largest Cohort', value: 'WebPT5: 196'},
]
const users = [
    {
        firstName: 'Gordon',
        lastName: 'Clark',
        email: 'Glark@gmail.com',
        avatar: 'avatar.png',
        cohort: 'webpt4',
        projectManager: 'Carlos',
        role: 'Backend',
        project: 'None',
    },
    {
        firstName: 'Donna',
        lastName: 'Emmerson',
        email: 'oopsididitagain@yahoo.com',
        avatar: 'avatar.png',
        cohort: 'webpt4',
        projectManager: 'Carlos',
        role: 'Backend',
        project: 'None',
    },
    {
        firstName: 'Elliot',
        lastName: 'Alderson',
        email: 'mrrobot@geocities.com',
        avatar: 'elliot.jpg',
        cohort: 'webpt3',
        projectManager: 'Lola',
        role: 'Data Science',
        project: 'None',
    }
]

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            headerStats: headerStats,
            users: users,
            edit: false,
        }
    }
    h_edit_user = user => {
        console.log('editing...')
        console.log(user)
    }
    h_remove_user = user => {
        console.log('removing...')
        console.log(user)
    }
    render = () => 
        <Wrapper className='users'>
            <Header stats={this.state.headerStats} />
            <div className='user-list'>
                <ListOptions />
                {this.state.users.map((user,idx) =>
                    <User
                        edit={this.h_edit_user}
                        remove={this.h_remove_user}
                        user={user}
                        key={idx}
                    />
                )}
            </div>
        </Wrapper>
}

export default UserList