import React from 'react'

const ProjectList = ({projects}) =>
    <div className='project-list'>
        {projects.map(project => 
            <div className='project' key={project.id}>
                <div className='summary'>
                    <div className='identity'>
                        <pre className='id'>id:{project.id}</pre>
                        <pre className='name'>{project.name}</pre>
                    </div>
                    {project.positions.map((position,idx) =>
                        <div className='position' key={idx}>
                            <pre>{position.role}: </pre>
                            <pre>{position.member}</pre>
                        </div>
                    )}
                </div>
                <div className={'description' + project.active && 'active'}>

                </div>
            </div>
        )}
    </div>

export default ProjectList