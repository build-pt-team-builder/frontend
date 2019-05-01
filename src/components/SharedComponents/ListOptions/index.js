import React, {Component} from 'react'

import Wrapper from './style'

class ListOptions extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount = () => {

    }
    render = () =>
        <Wrapper className='options'>
            <div className='option'>
                <pre className='title'>Cohort</pre>
                <select>
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
                <select>
                    <option value='all'>All</option>
                    <option value='none'>None</option>
                    <option value='ds'>Data Science</option>
                    <option value='frontend'>FrontEnd</option>
                    <option value='backend'>Backend</option>
                    <option value='uiux'>UI/UX</option>
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Project Manager</pre>
                <select>
                    <option value='all'>All</option>
                    <option value='none'>None</option>
                    <option value='pm01'>Carlos</option>
                    <option value='pm02'>Lola</option>
                    <option value='pm03'>Gabe</option>
                    <option value='pm04'>Jack Daniels</option>
                </select>
            </div>
            <div className='option'>
                <pre className='title'>Project</pre>
                <select>
                    <option value='all'>All</option>
                    <option value='none'>None</option>
                    <option value='pj001'>Rover</option>
                    <option value='pj002'>The Giant</option>
                    <option value='pj003'>Comet</option>
                    <option value='pj004'>Dev Desk</option>
                </select>
            </div>
        </Wrapper>
}

export default ListOptions