import axios from 'axios'

const api = 'https://teambuilderapp-api.netlify.com/.netlify/functions/server/api/users'

export const GET_COHORTS = 'GET_COHORTS'
export const COHORT_SUCCESS = 'COHORT_SUCCESS'
export const COHORT_FAIL = 'COHORT_FAIL'

const faux_payload = [
    {id: 1, name: 'None', disabled: false},
    {id: 2, name: 'UIUX', disabled: true},
    {id: 3, name: 'UIUX01', disabled: false},
    {id: 4, name: 'UIUX02', disabled: false},
    {id: 5, name: 'UIUX03', disabled: false},
    {id: 6, name: 'Full Stack', disabled: true},
    {id: 7, name: 'Web01', disabled: false},
    {id: 8, name: 'Web02', disabled: false},
    {id: 9, name: 'Web03', disabled: false},
    {id: 10, name: 'Web04', disabled: false},
    {id: 11, name: 'Web05', disabled: false},
    {id: 12, name: 'Webpt01', disabled: false},
    {id: 13, name: 'Webpt02', disabled: false},
    {id: 14, name: 'Webpt03', disabled: false},
    {id: 15, name: 'Webpt04', disabled: false},
    {id: 16, name: 'Webpt05', disabled: false},
]

export const get_cohorts = () => dispatch => {
    dispatch({type: GET_COHORTS})
    return axios
        .get(api)
        .then(() => dispatch({type: COHORT_SUCCESS, payload: faux_payload}))
        .catch(err => dispatch({type: COHORT_FAIL, payload: err}))
}