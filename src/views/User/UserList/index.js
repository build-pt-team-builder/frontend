import React, {Component} from 'react'
import Wrapper from './style'

import Header from '../../../components/SharedComponents/Header/Private'

import ListOptions from './options'
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
        cohort: 'webpt04',
        project_manager: 'Carlos',
        role: 'backend',
        project: 'none',
    },
    {
        firstName: 'Donna',
        lastName: 'Emmerson',
        email: 'oopsididitagain@yahoo.com',
        avatar: 'avatar.png',
        cohort: 'webpt04',
        role: 'frontend',
        project_manager: 'Carlos',
        project: 'none',
    },
    {
        firstName: 'Elliot',
        lastName: 'Alderson',
        email: 'mrrobot@geocities.com',
        avatar: 'elliot.jpg',
        cohort: 'webpt03',
        project_manager: 'Lola',
        role: 'data science',
        project: 'none',
    }
]

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            headerStats: headerStats,
            all_users: users,
            users: users,
            edit: false,
        }
    }
    h_filter_users = filters => {
        let users = this.state.all_users
        //filter out all the 'all' values from filters array
        //filter all users who don't have the corresponding name value relationion
        //update state with new list
        filters.forEach(filter =>
            filter.value !== 'all'
            ?   users = users.filter(user => user[filter.name] === filter.value)
            :   null
        )
        this.setState({users: users})
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
            <ListOptions filter={this.h_filter_users} />
            <div className='user-list'>
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