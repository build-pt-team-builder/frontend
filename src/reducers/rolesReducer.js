import {
    GET_ROLES,
    ROLE_SUCCESS,
    ROLE_FAIL,
} from '../actions/roles'

const initState = {
    roles: [],
    fetching: false,
    error: null,
}

export const rolesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_ROLES:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case ROLE_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                roles: action.payload,
            }
        case ROLE_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}