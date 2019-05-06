import {
    GET_PROJECT_MANAGERS,
    PROJECT_MANAGER_SUCCESS,
    PROJECT_MANAGER_FAIL,
} from '../actions/projectManagers'

const initState = {
    project_managers: [],
    fetching: false,
    error: null,
}

export const projectManagersReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PROJECT_MANAGERS:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case PROJECT_MANAGER_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                project_managers: action.payload,
            }
        case PROJECT_MANAGER_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}