import {} from '../actions'

const initialState = {
    user: {},
    error: null,
    fetching: false,
}

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}