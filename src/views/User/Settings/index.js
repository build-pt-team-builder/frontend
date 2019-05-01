import React, {Component} from 'react'

import Wrapper from './style'

//This is lazy, fix it!

class Settings extends Component {
    constructor() {
        super()
        this.state = {
            starting_page: 'projects',//groups, announcments
            theme: 'dark',//light
            consistant_log: true,
            projects_per_page: 24,
            users_per_page: 48,
            display_project_stats: true,
            default_status_sort: 'open',//all,archived
            default_position_sort: 'any',//...
        }
    }
    render = () =>
        <Wrapper>
            <pre className='title'>Application</pre>

            <pre className='setting-name'>Starting Page</pre>
            <div className='setting-options'>
                <button name='announcements'>Announcements</button>
                <button name='users'>Users</button>
                <button name='groups'>Groups</button>
                <button name='projects' className='active'>Projects</button>
            </div>

            <pre className='setting-name'>Theme</pre>
            <div className='setting-options'>
                <button name='light'>Light</button>
                <button name='dark' className='active'>Dark</button>
            </div>

            <pre className='setting-name'>Stay Logged In</pre>
            <div className='setting-options'>
                <button name='yes' className='active'>Yes</button>
                <button name='no'>No</button>
            </div>

            <pre className='title'>Projects</pre>

            <pre className='setting-name'>Projects Per Page</pre>
            <div className='setting-options'>
                <input type='number' name='projects_per_page' placeholder={this.state.projects_per_page}/>
            </div>

            <pre className='setting-name'>Show Project Stats</pre>
            <div className='setting-options'>
                <button name='yes' className='active'>Yes</button>
                <button name='no'>No</button>
            </div>

            <pre className='setting-name'>Default Status Sort</pre>
            <div className='setting-options'>
                <button name='any'>Any</button>
                <button name='open' className='active'>Open</button>
                <button name='archived'>Archived</button>
            </div>

            <pre className='setting-name'>Default Position Sort</pre>
            <div className='setting-options'>
                <button name='any' className='active'>Any</button>
                <button name='ui'>UI</button>
                <button name='frontend'>Frontend</button>
                <button name='backend'>Backend</button>
                <button name='uiux'>UI/UX</button>
                <button name='android'>Android</button>
                <button name='ds'>DS</button>
                <button name='none'>None</button>
            </div>

            <pre className='title'>Users</pre>

            <pre className='setting-name'>Users Per Page</pre>
            <div className='setting-options'>
                <input type='number' name='users_per_page' placeholder={this.state.users_per_page}/>
            </div>
        </Wrapper>
}

export default Settings