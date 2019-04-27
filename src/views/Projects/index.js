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
        positions: [
            {role: 'Lead', member: 'Joe MacMillan'},
            {role: 'WebUI', member: 'Donna Emerson'},
            {role: 'WebUI', member: 'John Bosworth'},
            {role: 'Frontend', member: 'Cameron Howe'},
            {role: 'Backend', member: 'Gordon Clark'},
        ],
        description: 'Index the web!',
        mvp: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.',
        stretch: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.',
        created: '07/22/1992',
        author: 'Haley Clark',
        active: false,
    },
    {   id: 1,
        name: `The Giant`,
        positions: [
            {role: 'Lead', member: null},
            {role: 'WebUI', member: 'Arki'},
            {role: 'WebUI', member: null},
            {role: 'Frontend', member: 'Tom Rendon'},
            {role: 'Backend', member: 'Ryan Rey'},
        ],
        description: 'Fit a giant in a suitcase',
        created: '03/21/1981',
        mvp: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.',
        stretch: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.',
        author: 'Cardiff Electric',
        active: true,
    },
    {   id: 2,
        name: `Rover`,
        positions: [
            {role: 'Lead', member: 'Diane Gould'},
            {role: 'WebUI', member: 'Katie Herman'},
            {role: 'WebUI', member: 'Tanya Reese'},
            {role: 'Frontend', member: null},
            {role: 'Frontend', member: null},
            {role: 'Backend', member: null},
        ],
        description: 'Crawl the web, index what you find, make it searchable.',
        created: '03/13/1993',
        mvp: 'Etiam vitae porttitor augue. Nullam luctus et ex et sollicitudin. Mauris cursus odio tristique, mollis metus non, vulputate dolor. Proin tristique vehicula est, dapibus dapibus ligula semper scelerisque. Duis facilisis porta ligula, in vestibulum dolor mollis eu. Sed ornare placerat finibus.',
        stretch: 'Suspendisse maximus mattis tellus, in aliquet magna interdum eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut in magna sed velit congue mollis. Suspendisse aliquam tincidunt sodales.',
        author: 'Haley Clark',
        active: false,
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