/*
    should this be called login and have user actions seperate?
*/
import {
    USER_CALL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOST_PASSWORD_SUCCESS,
    LOST_PASSWORD_FAIL,
    ADD_USER_SUCCESS,
    ADD_USER_FAIL,
} from '../actions'

const initialState = {
    error: null,
    fetching: false,
    loggedIn: false,
    message: '',
    token: '',
    user: {},
}

export const user = (state = initialState, action) => {
    switch(action.type) {
        case USER_CALL:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                loggedIn: true,
                message: action.payload.message,
                token: action.payload.token,
                user: action.payload.user,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: action.payload.error,
                fetching: false,
                loggedIn: false,
                token: '',
                user: {},
            }
        case LOST_PASSWORD_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                message: action.payload.message,
            }
        case LOST_PASSWORD_FAIL:
            return {
                ...state,
                error: action.payload.error,
                fetching: false,
            }
        case ADD_USER_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                loggedIn: false,
                message: action.payload.message,
                user: {},
            }
        case ADD_USER_FAIL:
            return {
                ...state,
                error: action.payload.error,
                fetching: false,
                loggedIn: false,
                user: {},
            }
        default:
            return state
    }
}