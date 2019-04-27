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
            <label className={options.status.all && 'active'} name='all'>All</label>
            <label className={options.status.open && 'active'} name='open'>Open</label>
            <label className={options.status.archived && 'active'} name='archived'>Archived</label>
        </div>
        <div className='options'>
            <h3 className='title'>Positions: </h3>
            <label className={options.positions.none && 'active'} name='none'>None</label>
            <label className={options.positions.webui && 'active'} name='webui'>Web UI</label>
            <label className={options.positions.frontend && 'active'} name='frontend'>Frontend</label>
            <label className={options.positions.backend && 'active'} name='backend'>Backend</label>
            <label className={options.positions.uiux && 'active'} name='uiux'>UI/UX</label>
            <label className={options.positions.android && 'active'} name='android'>Android</label>
            <label className={options.positions.datascience && 'active'} name='datascience'>Data Science</label>
            <label className={options.positions.any && 'active'} name='any'>Any</label>
        </div>
    </div>

export default ListOptions