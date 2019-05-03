import React, {Component} from 'react'

import Wrapper from './style'

class ListOptions extends Component {
    constructor(props) {
        super()
        this.state = {
            filters: [
                {name: 'cohort', value: 'all'},
                {name: 'role', value: 'all'},
                {name: 'project_manager', value: 'all'},
                {name: 'project', value: 'all'}
            ],
        }
    }
    h_filter = filters => {
        this.props.filter(filters)
    }
    h_select_filter = e => {
        console.log(e.target.value)
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
        <Wrapper className='options'>
            <div className='option'>
                <pre className='title'>Cohort</pre>
                <select onChange={this.h_select_filter} name='cohort' value={this.state.cohort}>
                    <optgroup label='Cohort'>
                        <option value='all'>All</option>
                        <option value='none'>None</option>
                    </optgroup>
                    <optgroup label='Data Science'>
                        <option value='ds01'>DS01</option>
                        <option value='ds02'>DS02</option>
                        <option value='ds03'>DS03</option>
                    </optgroup>
                    <optgroup label='Full Stack'>
                        <option value='web01'>Web01</option>
                        <option value='web02'>Web02</option>
                        <option value='web03'>Web03</option>
                        <option value='webpt01'>Webpt01</option>
                        <option value='webpt02'>Webpt02</option>
                        <option value='webpt03'>Webpt03</option>
                        <option value='webpt04'>Webpt04</option>
                    </optgroup>
                    <optgroup label='UI/UX'>
                        <option value='ux01'>UX01</option>
                        <option value='ux02'>UX02</option>
                        <option value='ux03'>UX03</option>
                    </optgroup>
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Role</pre>
                <select onChange={this.h_select_filter} name='role' value={this.state.role}>
                    <option value='all'>All</option>
                    <option value='none'>None</option>
                    <option value='data science'>Data Science</option>
                    <option value='frontend'>FrontEnd</option>
                    <option value='backend'>Backend</option>
                    <option value='uiux'>UI/UX</option>
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Project Manager</pre>
                <select onChange={this.h_select_filter} name='project_manager' value={this.state.project_manager}>
                    <option value='all'>All</option>
                    <option value='none'>None</option>
                    <option value='Carlos'>Carlos</option>
                    <option value='Lola'>Lola</option>
                    <option value='Gabe'>Gabe</option>
                    <option value='Jack Daniels'>Jack Daniels</option>
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Project</pre>
                <select onChange={this.h_select_filter} name='project' value={this.state.project}>
                    <option value='all'>All</option>
                    <option value='none'>None</option>
                    <option value='Rover'>Rover</option>
                    <option value='The Giant'>The Giant</option>
                    <option value='Comet'>Comet</option>
                    <option value='Dev Desk'>Dev Desk</option>
                </select>
            </div>
        </Wrapper>
}

export default ListOptions