import axios from 'axios'

const api = 'https://teambuilderapp-api.netlify.com/.netlify/functions/server/api/users'

export const GET_PROJECT_MANAGERS = 'GET_PROJECT_MANAGERS'
export const PROJECT_MANAGER_SUCCESS = 'PROJECT_MANAGER_SUCCESS'
export const PROJECT_MANAGER_FAIL = 'PROJECT_MANAGER_FAIL'

const faux_payload = [
    {id: 0, firstName: 'Tommy', lastName: 'Huynh'},
    {id: 1, firstName: 'Randy', lastName: 'Wilson'},
    {id: 2, firstName: 'David', lastName: 'Loveday'},
    {id: 3, firstName: 'Kyran', lastName: 'McCann'},
    {id: 4, firstName: 'Lola', lastName: 'Heffernan'},
    {id: 5, firstName: 'Jeff', lastName: 'Kang'},
    {id: 6, firstName: 'Elvis', lastName: 'Ibarra'},
    {id: 7, firstName: 'Carlos', lastName: 'Lantigua'},
    {id: 8, firstName: 'Kayanna', lastName: 'Chandler'},
    {id: 9, firstName: 'Christina', lastName: 'Laryea'},
]

export const get_project_managers = () => dispatch => {
    dispatch({type: GET_PROJECT_MANAGERS})
    return axios
        .get(api)
        .then(() => dispatch({type: PROJECT_MANAGER_SUCCESS, payload: faux_payload}))
        .catch(err => dispatch({type: PROJECT_MANAGER_FAIL, payload: err}))
}