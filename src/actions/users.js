import axios from 'axios'

const url = 'https://team-builder-backend.herokuapp.com/api/'

export const USER_ADD     = 'USER_ADD'
export const USER_GET     = 'USER_GET'
export const USER_EDIT    = 'USER_EDIT'
export const USER_DELETE  = 'USER_DELETE'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL    = 'USER_FAIL'

export const add_user = user => dispatch => {
    dispatch({type: USER_ADD})
    return axios
        .post(url + 'users', user, {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: USER_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: USER_FAIL, payload: err})})
}
export const get_user = id => dispatch => {
    dispatch({type: USER_GET})
    return axios
        .get(url + `users/${id}`, {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: USER_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: USER_FAIL, payload: err})})
}
export const get_users = () => dispatch => {
    dispatch({type: USER_GET})
    return axios
        .get(url + 'users', {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: USER_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: USER_FAIL, payload: err})})
}
export const remove_user = id => dispatch => {
    dispatch({type: USER_DELETE})
    return axios
        .delete(url + `users/${id}`, {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: USER_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: USER_FAIL, payload: err})})
}