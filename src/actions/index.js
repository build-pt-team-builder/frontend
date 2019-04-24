/*
    This should be seperated into different files
    login, user(maybe include login with user?), projects
*/
import axios from 'axios'

export const USER_CALL = 'USER_CALL'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL = 'USER_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOST_PASSWORD_SUCCESS = 'LOST_PASSWORD_SUCCESS'
export const LOST_PASSWORD_FAIL = 'LOST_PASSWORD_FAIL'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'
const url = '' //UPDATE THIS LATER

export const login = user => dispatch => {
    dispatch({type: USER_CALL})
    return axios
        .post(url + '/login', user)
        .then(res => {dispatch({type: LOGIN_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: LOGIN_FAIL, payload: err})})
}
export const forgotPassword = user => dispatch => {
    dispatch({type: USER_CALL})
    return axios
        .post(url + '/forgotPAssword', user)
        .then(res => {dispatch({type: LOST_PASSWORD_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: LOST_PASSWORD_FAIL, payload: err})})
}
export const addUser = user => dispatch => {
    dispatch({type: USER_CALL})
    return axios
        .post(url + '/addUser', user)
        .then(res => {dispatch({type: ADD_USER_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: ADD_USER_FAIL, payload: err})})
}