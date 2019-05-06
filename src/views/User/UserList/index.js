import React, {Component} from 'react'
import {connect} from 'react-redux'
import Wrapper from './style'

import {get_users, edit_user, remove_user} from '../../../actions/users'

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

class UserList extends Component {
    constructor() {
        super()
        this.state = {
            headerStats: headerStats,
            users: [],
            filters: [],
            edit: false,
        }
    }

    // componentWillReceiveProps = () => this.setState({users: this.props.users})
    componentDidMount = () => this.props.get_users()
    
    //RUD
    h_update_filters = filters => this.setState({filters: filters})
    h_edit_user = user => this.props.edit_user(user)
    h_remove_user = user => {
        console.log(user)
        this.props.remove_user(user.id)
    }

    filtered_users = filters => {
        let users = this.props.users
        filters.forEach(filter =>
            filter.value !== 'all'
            ?   users = users.filter(user => user[filter.name] === filter.value)
            :   null
        )
        return users
    }
    render = () => 
        <Wrapper className='users'>
            <Header stats={this.state.headerStats} />
            <ListOptions filter={this.h_update_filters} />
            <div className='user-list'>
                {this.filtered_users(this.state.filters).map(user => 
                    <User
                        edit={this.h_edit_user}
                        remove={this.h_remove_user}
                        user={user}
                        key={user.id}
                    />
                )}
            </div>
        </Wrapper>
}

const mapStateToProps = state => {
    return {users: state.users.users}
}

export default connect(
    mapStateToProps,{get_users, edit_user, remove_user})(UserList)