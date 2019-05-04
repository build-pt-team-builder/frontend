import React, {Component} from 'react'
import Style from './style'

import Header from '../../components/SharedComponents/Header/Private/index'
import ProjectSummary from './projectSummary'
import ProjectDetails from './projectDetails'

import ListOptions from './listOptions'
import CreateProject from './createProject'

const headerStats = [
    {displayText: 'Total Projects', value: 42},
    {displayText: 'Open Projects', value: 15},
    {displayText: 'Full Projects', value: 27},
    {displayText: 'Total Users', value: 196},
]

const projects = [
    {   id: 0,
        name: `Comet`,
        active: false,
        status: 'Open',
        roles: [
            {id: 0, role: 'Lead', member: 'Joe MacMillan'},
            {id: 1, role: 'WebUI', member: 'Donna Emerson'},
            {id: 2, role: 'WebUI', member: 'John Bosworth'},
            {id: 3, role: 'Frontend', member: 'Cameron Howe'},
            {id: 4, role: 'Backend', member: 'Gordon Clark'},
        ],
        description: [
            {title: 'Pitch', value: 'Index the web!'},
            {title: 'MVP', value: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.'},
            {title: 'Stretch', value: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.'},
            {title: 'Author', value: 'Haley Clark'},
            {title: 'Created', value: '03/21/1981'},
        ],
    },
    {   id: 1,
        name: `The Giant`,
        active: false,
        status: 'Open',
        roles: [
            {id: 0, role: 'Lead', member: null},
            {id: 1, role: 'WebUI', member: 'Arki'},
            {id: 2, role: 'WebUI', member: null},
            {id: 3, role: 'Frontend', member: 'Tom Rendon'},
            {id: 4, role: 'Backend', member: 'Ryan Rey'},
        ],
        description: [
            {title: 'Pitch', value: 'Fit a giant in a suitcase'},
            {title: 'MVP', value: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.'},
            {title: 'Stretch', value: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.'},
            {title: 'Author', value: 'Cardiff Eletric'},
            {title: 'Created', value: '03/21/1981'},
        ],
    },
    {   id: 2,
        name: `Rover`,
        active: false,
        status: 'Open',
        roles: [
            {id: 0, role: 'Lead', member: 'Diane Gould'},
            {id: 1, role: 'WebUI', member: 'Katie Herman'},
            {id: 2, role: 'WebUI', member: 'Tanya Reese'},
            {id: 3, role: 'Frontend', member: null},
            {id: 4, role: 'Frontend', member: null},
            {id: 5, role: 'Backend', member: null},
        ],
        description: [
            {title: 'Pitch', value: 'Crawl the web, index what you find, make it searchable.'},
            {title: 'MVP', value: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.'},
            {title: 'Stretch', value: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.'},
            {title: 'Author', value: 'Haley Clark'},
            {title: 'Created', value: '03/13/1993'},
        ],
    },
]

const settings = {
    showStats: true,
    createProject: false,
    status: [
        {name: 'All', value: false},
        {name: 'Open', value: true},
        {name: 'Archived', value: false},
    ],
    positions: [
        {name: 'WebUI', value: false},
        {name: 'Frontend', value: false},
        {name: 'Backend', value: false},
        {name: 'UI/UX', value: false},
        {name: 'Android', value: false},
        {name: 'DS', value: false},
        {name: 'Lead', value: false},
        {name: 'None', value: false},
    ]
}

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            createProject: false,
            headerStats: headerStats,
            projects: projects,
            settings: settings,
        }
    }
    componentDidMount = () => {
        //grab data from state
    }
    h_toggle_project_open = e => {
        e.stopPropagation()
        const targetId = parseInt(e.currentTarget.id,10)
        this.setState(prevState => {
            const that = prevState.projects.map(project => {
                if(project.id === targetId) project.active = !project.active
                return project
            })
            return {projects: that}
        })
    }
    h_toggle_status = e => {
        //this is a horrible way of doing this; but it works for now
        const name = e.target.name
        this.setState(prevState => {
            prevState.settings.status = prevState.settings.status.map(setting => {
                if(setting.value) return {name: setting.name, value: false}
                if(setting.name === name) return {name: setting.name, value: true}
                return setting
            })
            return {settings: prevState.settings}
        })
    }
    h_toggle_position = e => {
        const name = e.target.name
        this.setState(prevState => {
            prevState.settings.positions = prevState.settings.positions.map(setting => {
                if(name === 'None') {
                    if(setting.name === name) return {name: name, value: true}
                    return {name: setting.name, value: false}
                }
                if(setting.name === name) return {name: setting.name, value: !setting.value}
                if(setting.name === 'None') return {name: setting.name, value: false}
                return setting
            })
            return {settings: prevState.settings}
        })
    }
    h_toggle_create = () => {
        this.setState(prevState => {
            return {
                createProject: !prevState.createProject,
            }
        })
    }
    h_edit_user = (project_id, role_id, user) => {
        //find role and change user
        this.setState(prevState => {
            prevState.projects = prevState.projects.map(project => {
                if(project.id === project_id) {
                    project = project.roles.map(role => {
                        if(role.id === role_id) role.member = user
                        return role
                    })
                }
                return project
            })
        })
    }
    h_add_project_role = (project_id, role) => {
        //capitalize first letter of each word in role
        role = role.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        //add new role to project
        this.setState(prevState => {
            prevState.projects = prevState.projects.map(project => { //id is temporary
                project.id === project_id && project.roles.unshift({id: 0, role: role, value: ''})
                return project
            })
            return {projects: prevState.projects}
        })
    }
    render = () => 
        <Style className='projects'>
            {this.state.settings.showStats && <Header stats={this.state.headerStats}/>}
            <ListOptions
                options={this.state.settings}
                toggle_status={this.h_toggle_status}
                toggle_position={this.h_toggle_position}
                toggle_create={this.h_toggle_create}
            />
            {this.state.createProject && <CreateProject />}
            <div className='project-list'>
                {projects.map(project =>
                    <div className='project' id={project.id} key={project.id}>
                        <ProjectSummary
                            project={project}
                            active_roles={this.state.settings.positions.filter(role => role.value)}
                            open={this.h_toggle_project_open}
                            add_role={this.h_add_project_role}
                            edit_user={this.h_edit_user}
                            toggle_active={this.h_toggle_project_open}
                        />
                        <ProjectDetails
                            project={project}
                            h_close={this.h_toggle_project_open}
                        />
                    </div>
                )}
            </div>
        </Style>
}

export default Projects