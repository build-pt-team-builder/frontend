import React, {Component} from 'react'

class ListOptions extends Component {
    constructor(props) {
        super()
        this.state = {
            filters: [
                {name: 'cohort', value: 'All'},
                {name: 'role', value: 'All'},
                {name: 'project_manager', value: 'All'},
                {name: 'project', value: 'All'}
            ],
        }
    }
    h_filter = filters => {
        this.props.filter(filters)
    }
    h_select_filter = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState(prevState => { //update state of this component
            prevState.filters.map(filter => {
                if(filter.name === name) filter.value = value
                return filter
            })
            this.h_filter(prevState.filters)
            return {filters: prevState.filters}
        })
    }
    render = () =>
        <div className='options'>
            <div className='option'>
                <pre className='title'>Cohort</pre>
                <select onChange={this.h_select_filter} name='cohort' value={this.state.cohort}>
                    <option value='All'>All</option>
                    {this.props.cohorts.map(cohort =>
                        <option
                            value={cohort.name}
                            disabled={cohort.disabled}
                            key={cohort.id}>
                            {cohort.name}
                        </option>
                    )}
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Role</pre>
                <select onChange={this.h_select_filter} name='role' value={this.state.role}>
                    <option value='All'>All</option>
                    {this.props.roles.map(role =>
                        <option value={role.name} key={role.id}>{role.name}</option>
                    )}
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Project Manager</pre>
                <select onChange={this.h_select_filter} name='project_manager' value={this.state.project_manager}>
                    <option value='All'>All</option>
                    <option value='none'>None</option>
                    {this.props.project_managers.map(project_manager =>
                        <option
                            value={`${project_manager.firstName} ${project_manager.lastName}`}
                            key={project_manager.id}>
                            {project_manager.firstName} {project_manager.lastName}
                        </option>
                    )}
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Project</pre>
                <select onChange={this.h_select_filter} name='project' value={this.state.project}>
                    <option value='All'>All</option>
                    <option value='none'>None</option>
                    {this.props.projects.map(project =>
                        <option
                            value={project.name}
                            key={project.id}>
                            {project.name}
                        </option>
                    )}
                </select>
            </div>
        </div>
}

export default ListOptions