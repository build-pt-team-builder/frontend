import {
    USER_ADD,
    USER_GET,
    USER_EDIT,
    USER_DELETE,
    USER_SUCCESS,
    USER_FAIL,
} from '../actions/users'

const initState = {
    users: [],
    fetching: false,
    error: null,
}

export const users = (state = initState, action) => {
    switch(action.type) {
        case USER_ADD:
        case USER_GET:
        case USER_EDIT:
        case USER_DELETE:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case USER_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                friends: action.payload,
            }
        case USER_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}