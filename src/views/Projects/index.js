import React, {Component} from 'react'
import Style from './style'

import Header from '../../components/SharedComponents/Header/Private/index'
import ProjectList from './projectList'
import ListOptions from './listOptions'

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
        positions: [
            {role: 'Lead', member: 'Joe MacMillan'},
            {role: 'WebUI', member: 'Donna Emerson'},
            {role: 'WebUI', member: 'John Bosworth'},
            {role: 'Frontend', member: 'Cameron Howe'},
            {role: 'Backend', member: 'Gordon Clark'},
        ],
        description: [
            {title: 'Description', value: 'Index the web!'},
            {title: 'Created', value: '03/21/1981'},
            {title: 'MVP', value: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.'},
            {title: 'Stretch', value: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.'},
            {title: 'Author', value: 'Haley Clark'},
        ],
    },
    {   id: 1,
        name: `The Giant`,
        active: true,
        status: 'Open',
        positions: [
            {role: 'Lead', member: null},
            {role: 'WebUI', member: 'Arki'},
            {role: 'WebUI', member: null},
            {role: 'Frontend', member: 'Tom Rendon'},
            {role: 'Backend', member: 'Ryan Rey'},
        ],
        description: [
            {title: 'Description', value: 'Fit a giant in a suitcase'},
            {title: 'Created', value: '03/21/1981'},
            {title: 'MVP', value: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.'},
            {title: 'Stretch', value: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.'},
            {title: 'Author', value: 'Cardiff Eletric'},
        ],
    },
    {   id: 2,
        name: `Rover`,
        active: false,
        status: 'Open',
        positions: [
            {role: 'Lead', member: 'Diane Gould'},
            {role: 'WebUI', member: 'Katie Herman'},
            {role: 'WebUI', member: 'Tanya Reese'},
            {role: 'Frontend', member: null},
            {role: 'Frontend', member: null},
            {role: 'Backend', member: null},
        ],
        description: [
            {title: 'Description', value: 'Crawl the web, index what you find, make it searchable.'},
            {title: 'Created', value: '03/13/1993'},
            {title: 'MVP', value: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.'},
            {title: 'Stretch', value: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.'},
            {title: 'Author', value: 'Haley Clark'},
        ],
    },
]

const settings = {
    showStats: true,
    status: [
        {name: 'All', value: false},
        {name: 'Open', value: true},
        {name: 'Archived', value: false},
    ],
    positions: [
        {name: 'Any', value: true},
        {name: 'UI', value: false},
        {name: 'Frontend', value: false},
        {name: 'Backend', value: false},
        {name: 'UI/UX', value: false},
        {name: 'Android', value: false},
        {name: 'DS', value: false},
        {name: 'None', value: false},
    ]
}

class Projects extends Component {
    constructor() {
        super()
        this.state = {
            headerStats: headerStats,
            projects: projects,
            settings: settings,
        }
    }
    componentDidMount = () => {
        //grab data from state
    }
    h_toggle_project = e => {
        e.stopPropagation()
        // const target = e.currentTarget.querySelector('.description')
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
    render = () => 
        <Style className='projects'>
            {this.state.settings.showStats && <Header stats={this.state.headerStats}/>}
            <ListOptions options={this.state.settings} toggle_status={this.h_toggle_status} toggle_position={this.h_toggle_position}/>
            <ProjectList projects={this.state.projects} toggle_active={this.h_toggle_project}/>
        </Style>
}

export default Projects