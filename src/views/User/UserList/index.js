import React, {Component} from 'react'
import {connect} from 'react-redux'
import Wrapper from './style'

import {get_users, edit_user, remove_user} from '../../../actions/users'
import {fetchProjectData} from '../../../actions/projects'
import {get_roles} from '../../../actions/roles'
import {get_cohorts} from '../../../actions/cohorts'
import {get_project_managers} from '../../../actions/projectManagers'

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
    //R -- INIT COMPONENT
    componentDidMount = () => {
        //get data from api
        this.props.get_users()
        this.props.fetchProjectData()
        this.props.get_roles()
        this.props.get_cohorts()
        this.props.get_project_managers()
    }
    //UD
    h_edit_user = user => this.props.edit_user(user)
    h_remove_user = user => this.props.remove_user(user.id)
    //METHODS
    h_update_filters = filters => this.setState({filters: filters})
    filtered_users = filters => {
        let users = this.props.users
        filters.forEach(filter =>
            filter.value !== 'All'
            ?   users = users.filter(user => user[filter.name] === filter.value)
            :   null
        )
        return users
    }
    render = () => 
        <Wrapper className='users'>
            <Header stats={this.state.headerStats} />
            <ListOptions
                filter={this.h_update_filters}
                cohorts={this.props.cohorts}
                roles={this.props.roles}
                project_managers={this.props.project_managers}
                projects={this.props.projects}
            />
            <div className='user-list'>
                {this.filtered_users(this.state.filters).map(user => 
                    <User
                        edit={this.h_edit_user}
                        remove={this.h_remove_user}
                        roles={this.props.roles}
                        cohorts={this.props.cohorts}
                        project_managers={this.props.project_managers}
                        user={user}
                        key={user.id}
                    />
                )}
            </div>
        </Wrapper>
}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        projects: state.projects.projects,
        roles: state.roles.roles,
        cohorts: state.cohorts.cohorts,
        project_managers: state.project_managers.project_managers,
    }
}

export default connect(
    mapStateToProps,
    {   get_users, edit_user, remove_user,
        fetchProjectData,
        get_roles,
        get_cohorts,
        get_project_managers,
    })(UserList)