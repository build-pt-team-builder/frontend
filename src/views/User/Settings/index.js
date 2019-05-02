import React, {Component} from 'react'

import Wrapper from './style'

//This is lazy, fix it!

class Settings extends Component {
    constructor() {
        super()
        this.state = {
            start_page: 'announcements',//groups, announcments
            theme: 'dark',//light
            consistant_log: false,
            projects_per_page: 24,
            users_per_page: 48,
            show_project_stats: true,
            default_status: 'open',//all,archived
            default_position_ui: false,
            default_position_frontend: false,
            default_position_backend: false,
            default_position_uiux: false,
            default_position_android: false,
            default_position_ds: false,
            default_position_none: false,
        }
    }
    h_toggle_start_page = e => this.setState({start_page: e.target.name})
    h_toggle_theme = e => this.setState({theme: e.target.name})
    h_toggle_consistant_log = e => this.setState(prevState => {return {consistant_log: !prevState.consistant_log}})
    h_update_number = e => this.setState({[e.target.name]: e.target.value})
    h_click_number = e => this.setState({[e.target.name]: ''})
    h_toggle_show_project_stats = e => this.setState(prevState => {return {show_project_stats: !prevState.show_project_stats}})
    h_toggle_default_status = e => this.setState({default_status: e.target.name})
    h_toggle_default_position = e => {
        const name = e.target.name //not sure why e.target.name doesn't work, but this fixes it
        name === 'none'
            ? this.setState({
                default_position_ui: false,
                default_position_frontend: false,
                default_position_backend: false,
                default_position_uiux: false,
                default_position_android: false,
                default_position_ds: false,
                default_position_none: true,
            })
            : this.setState(prevState => {return {
                ['default_position_'+name]: !prevState['default_position_'+name],
                default_position_none: false,
            }})
    }
    render = () =>
        <Wrapper>
            <pre className='title'>Application</pre>

            <pre className='setting-name'>Start Page</pre>
            <div className='setting-options'>
                <button name='announcements' onClick={this.h_toggle_start_page} className={this.state.start_page === 'announcements' ? 'active' : null}>Announcements</button>
                <button name='users' onClick={this.h_toggle_start_page} className={this.state.start_page === 'users' ? 'active' : null}>Users</button>
                <button name='projects' onClick={this.h_toggle_start_page} className={this.state.start_page === 'projects' ? 'active' : null}>Projects</button>
            </div>

            <pre className='setting-name'>Theme</pre>
            <div className='setting-options'>
                <button name='light' onClick={this.h_toggle_theme} className={this.state.theme === 'light' ? 'active' : null}>Light</button>
                <button name='dark' onClick={this.h_toggle_theme} className={this.state.theme === 'dark' ? 'active' : null}>Dark</button>
            </div>

            <pre className='setting-name'>Stay Logged In</pre>
            <div className='setting-options'>
                <button name='yes' onClick={this.h_toggle_consistant_log} className={this.state.consistant_log ? 'active' : null}>Yes</button>
                <button name='no' onClick={this.h_toggle_consistant_log} className={!this.state.consistant_log ? 'active' : null}>No</button>
            </div>

            <pre className='title'>Projects</pre>

            <pre className='setting-name'>Projects Per Page</pre>
            <div className='setting-options'>
                <input type='number' onClick={this.h_click_number} onChange={this.h_update_number} name='projects_per_page' placeholder={this.state.projects_per_page} value={this.state.projects_per_page}/>
            </div>

            <pre className='setting-name'>Show Project Stats</pre>
            <div className='setting-options'>
                <button name='yes' onClick={this.h_toggle_show_project_stats} className={this.state.show_project_stats ? 'active' : null}>Yes</button>
                <button name='no' onClick={this.h_toggle_show_project_stats} className={!this.state.show_project_stats ? 'active' : null}>No</button>
            </div>

            <pre className='setting-name'>Default Status Sort</pre>
            <div className='setting-options'>
                <button name='any' onClick={this.h_toggle_default_status} className={this.state.default_status === 'any' ? 'active' : 'null'}>Any</button>
                <button name='open' onClick={this.h_toggle_default_status} className={this.state.default_status === 'open' ? 'active' : 'null'}>Open</button>
                <button name='archived' onClick={this.h_toggle_default_status} className={this.state.default_status === 'archived' ? 'active' : 'null'}>Archived</button>
            </div>

            <pre className='setting-name'>Default Position Sort</pre>
            <div className='setting-options'>
                <button name='ui' onClick={this.h_toggle_default_position} className={this.state.default_position_ui ? 'active' : null}>UI</button>
                <button name='frontend' onClick={this.h_toggle_default_position} className={this.state.default_position_frontend ? 'active' : null}>Frontend</button>
                <button name='backend' onClick={this.h_toggle_default_position} className={this.state.default_position_backend ? 'active' : null}>Backend</button>
                <button name='uiux' onClick={this.h_toggle_default_position} className={this.state.default_position_uiux ? 'active' : null}>UI/UX</button>
                <button name='android' onClick={this.h_toggle_default_position} className={this.state.default_position_android ? 'active' : null}>Android</button>
                <button name='ds' onClick={this.h_toggle_default_position} className={this.state.default_position_ds ? 'active' : null}>DS</button>
                <button name='none' onClick={this.h_toggle_default_position} className={this.state.default_position_none ? 'active' : null}>None</button>
            </div>

            <pre className='title'>Users</pre>

            <pre className='setting-name'>Users Per Page</pre>
            <div className='setting-options'>
            <input type='number' onClick={this.h_click_number} onChange={this.h_update_number} name='users_per_page' placeholder={this.state.users_per_page} value={this.state.users_per_page}/>
            </div>
        </Wrapper>
}

export default Settings