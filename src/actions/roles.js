import axios from 'axios'

const api = 'https://teambuilderapp-api.netlify.com/.netlify/functions/server/api/roles'

export const GET_ROLES = 'GET_ROLES'
export const ROLE_SUCCESS = 'ROLE_SUCCESS'
export const ROLE_FAIL = 'ROLE_FAIL'

const faux_payload = [
    {id: 0, name: 'None'},
    {id: 1, name: 'UIUX'},
    {id: 2, name: 'WebUI'},
    {id: 3, name: 'Frontend'},
    {id: 4, name: 'Backend'},
    {id: 5, name: 'Lead'},
]

export const get_roles = () => dispatch => {
    dispatch({type: GET_ROLES})
    return axios
        .get(api)
        .then(() => dispatch({type: ROLE_SUCCESS, payload: faux_payload}))
        .catch(err => dispatch({type: ROLE_FAIL, payload: err}))
}