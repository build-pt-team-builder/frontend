import {combineReducers} from 'redux'

import { user } from './user'
import { projectsReducer as projects } from './projectsReducer'

export default combineReducers({
    user, projects
})