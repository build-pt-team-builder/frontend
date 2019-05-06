import {
    GET_COHORTS,
    COHORT_SUCCESS,
    COHORT_FAIL,
} from '../actions/cohorts'

const initState = {
    cohorts: [],
    fetching: false,
    error: null,
}

export const cohortsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_COHORTS:
            return {
                ...state,
                error: null,
                fetching: true,
            }
        case COHORT_SUCCESS:
            return {
                ...state,
                error: null,
                fetching: false,
                cohorts: action.payload,
            }
        case COHORT_FAIL:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        default:
            return state
    }
}