import {
    GET_USER,
    GET_USERS,
    ADD_USER,
    REMOVE_USER,
    EDIT_USER,
    USER_SUCCESS,
    USER_FAIL,
} from '../actions/users'

const initState = {
    users: [],
    fetching: false,
    error: null,
}

export const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_USER:
        case GET_USERS:
        case EDIT_USER:
        case ADD_USER:
        case REMOVE_USER:
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
                users: action.payload,
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