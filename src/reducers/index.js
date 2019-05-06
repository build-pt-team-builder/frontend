import {combineReducers} from 'redux'

import {usersReducer as users} from './userReducer'
import { projectsReducer as projects } from './projectsReducer'

export default combineReducers({
    users, projects
})