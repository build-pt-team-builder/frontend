import {combineReducers} from 'redux'

import {usersReducer as users} from './userReducer'
import {rolesReducer as roles} from './rolesReducer'
import {cohortsReducer as cohorts} from './cohortsReducer'
import {projectManagersReducer as project_managers} from './projectManagerReducer'
import { projectsReducer as projects } from './projectsReducer'

export default combineReducers({
    users, projects, roles, cohorts, project_managers,
})