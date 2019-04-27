import React from 'react'

const options = {
    status: {
        all: false,
        open: true,
        archived: false,
    },
    positions: {
        any: true,
        webui: false,
        frontend: false,
        backend: false,
        uiux: false,
        android: false,
        datascience: false,
        none: false,
    }
}

const ListOptions = props =>
    <div className='project-options'>
        <div className='options'>
            <h3 className='title'>Status: </h3>
            <label className={options.status.all ? 'active' : null} name='all'>All</label>
            <label className={options.status.open ? 'active' : null} name='open'>Open</label>
            <label className={options.status.archived ? 'active' : null} name='archived'>Archived</label>
        </div>
        <div className='options'>
            <h3 className='title'>Positions: </h3>
            <label className={options.positions.none ? 'active' : null} name='none'>None</label>
            <label className={options.positions.webui ? 'active' : null} name='ui'>UI</label>
            <label className={options.positions.frontend ? 'active' : null} name='frontend'>Frontend</label>
            <label className={options.positions.backend ? 'active' : null} name='backend'>Backend</label>
            <label className={options.positions.uiux ? 'active' : null} name='uiux'>UI/UX</label>
            <label className={options.positions.android ? 'active' : null} name='android'>Android</label>
            <label className={options.positions.datascience ? 'active' : null} name='datascience'>DS</label>
            <label className={options.positions.any ? 'active' : null} name='any'>Any</label>
        </div>
        <div className='options'>
            <button>Create</button>
        </div>
    </div>

export default ListOptions