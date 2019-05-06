import axios from 'axios'

const api_c = 'https://teambuilderapp-api.netlify.com/.netlify/functions/server/api/signup'
const api_rud = 'https://teambuilderapp-api.netlify.com/.netlify/functions/server/api/users'

export const GET_USER = 'GET_USER'
export const GET_USERS = 'GET_USERS'
export const ADD_USER = 'ADD_USER'
export const REMOVE_USER = 'REMOVE_USER'
export const EDIT_USER = 'EDIT_USER'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL = 'USER_FAIL'

export const get_user = id => dispatch => {
    dispatch({type: GET_USER})
    return axios
        .get(`${api_rud}/${id}`)
        .then(res => dispatch({type: USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: USER_FAIL, payload: err}))
}
export const get_users = () => dispatch => {
    dispatch({type: GET_USER})
    return axios
        .get(api_rud)
        .then(res => dispatch({type: USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: USER_FAIL, payload: err}))
}
export const remove_user = id => dispatch => {
    dispatch({type: REMOVE_USER})
    return axios
        .delete(`${api_rud}/${id}`)
        .then(res => dispatch({type: USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: USER_FAIL, payload: err}))
}
export const edit_user = user => dispatch => {
    dispatch({type: EDIT_USER})
    return axios
        .put(`${api_rud}/${user.id}`, user)
        .then(res => dispatch({type: USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: USER_FAIL, payload: err}))
}
export const add_user = user => dispatch => {
    dispatch({type: ADD_USER})
    return axios
        .post(api_c, user)
        .then(res => dispatch({type: USER_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: USER_FAIL, payload: err}))
}
