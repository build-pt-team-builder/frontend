import React, {Component} from 'react'
import Wrapper from './style'


class Header extends Component {
    constructor() {
        super()
        this.state = {
            total_users: 0,
            users_with_projects: 0,
            total_pm_groups: 0,
            largest_cohort: 0,
        }
    }
    componentWillReceiveProps = () => {
        this.setState({cohorts: this.props.cohorts})
    }
    get_users_with_projects = () =>
        this.props.users.filter(user =>
            user.project === 'none'
                || user.project === 'None'
                || user.project === null
        ).length
    get_largest_cohort = () => {
        let largest = ''
        let total = 0
        this.props.cohorts.forEach(cohort => {
            const users_in_cohort = this.props.users.filter(user => user.cohort === cohort.name.toLowerCase()).length
            if(users_in_cohort > total) {
                largest = cohort.name
                total = users_in_cohort
            }
        })
        return `${largest} -- ${total}`
    }
    render = () =>
        <Wrapper className='header'>
                <div className='stat'>
                    <pre className='value'>{this.props.users.length}</pre>
                    <pre className='name'>Total Users</pre>
                </div>
                <div className='stat'>
                    <pre className='value'>{this.get_users_with_projects()}</pre>
                    <pre className='name'>Users Without Projects</pre>
                </div>
                <div className='stat'>
                    <pre className='value'>{this.props.project_managers.length}</pre>
                    <pre className='name'>Total PM Groups</pre>
                </div>
                <div className='stat'>
                    <pre className='value'>{this.get_largest_cohort()}</pre>
                    <pre className='name'>Largest Cohort</pre>
                </div>
        </Wrapper>
}

export default Header