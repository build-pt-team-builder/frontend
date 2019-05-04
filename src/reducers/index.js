import {combineReducers} from 'redux'

import {users} from './users'
import {projectsReducer as projects} from './projectsReducer'

export default combineReducers({
    users, projects
})