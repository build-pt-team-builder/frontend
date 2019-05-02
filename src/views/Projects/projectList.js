import React from 'react'

// const test = 'Frontend'

const ProjectList = ({projects, active_roles, toggle_active}) =>
    <div className='project-list'>
        {projects.map(project => 
            <div className='project' onClick={toggle_active} id={project.id} key={project.id}>
                <div className='summary'>
                    <div className='identity'>
                        <pre className='name'>{project.name}</pre>
                    </div>
                    <div className='positions'>
                        <div className='position action'>
                            <pre className='add'>Add Role</pre>
                        </div>
                        {project.positions.map((position,idx) =>
                            <div
                                className={active_roles.filter(role => role.name === position.role).length !== 0 ? 'position active' : 'position'}
                                key={idx}
                            >
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
                    <pre className='title'>Status:</pre>
                    <p className='value'>{project.status}</p>
                    <div className='options'>
                        <button>Complete</button>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
            </div>
        )}
    </div>

export default ProjectList