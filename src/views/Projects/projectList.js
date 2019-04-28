import React from 'react'

const ProjectList = ({projects, toggle_active}) =>
    <div className='project-list'>
        {projects.map(project => 
            <div className='project' onClick={toggle_active} id={project.id} key={project.id}>
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