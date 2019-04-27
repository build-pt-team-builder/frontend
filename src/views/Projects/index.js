import React from 'react'
import Style from './style'

import Header from './header'
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
        status: 'open',
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
        status: 'open',
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
        status: 'open',
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
}

const Projects = () => 
    <Style className='projects'>
        {settings.showStats && <Header stats={headerStats}/>}
        <ListOptions />
        <ProjectList projects={projects}/>
    </Style>

export default Projects