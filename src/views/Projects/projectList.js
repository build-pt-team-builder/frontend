import React from 'react'

const ProjectList = ({projects}) =>
    <div className='project-list'>
        {projects.map(project => 
            <div className='project' key={project.id}>
                <div className='summary'>
                    <div className='identity'>
                        {/* <pre className='id'>id:{project.id}</pre> */}
                        <pre className='name'>{project.name}</pre>
                    </div>
                    <div className='positions'>
                        {project.positions.map((position,idx) =>
                            <div className='position' key={idx}>
                                <pre className='role'>{position.role}</pre>
                                <pre className='member'>{position.member}</pre>
                            </div>
                        )}
                    </div>
                </div>
                <div className={project.active ? 'description active' : 'description'}>
                    {project.description.map((desc,idx) =>
                        <React.Fragment key={idx}>
                        <pre className='title' >{desc.title}: </pre>
                        <p className='value'>{desc.value}</p>
                        </React.Fragment>
                    )}
                </div>
            </div>
        )}
    </div>

export default ProjectList

// {   id: 0,
//     name: `Comet`,
//     positions: [
//         {role: 'Lead', member: 'Joe MacMillan'},
//         {role: 'WebUI', member: 'Donna Emerson'},
//         {role: 'WebUI', member: 'John Bosworth'},
//         {role: 'Frontend', member: 'Cameron Howe'},
//         {role: 'Backend', member: 'Gordon Clark'},
//     ],
//     description: 'Index the web!',
//     created: '07/22/1992',
//     author: 'Haley Clark',
//     active: false,
// },