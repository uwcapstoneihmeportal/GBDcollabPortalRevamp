import { combineReducers } from 'redux'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants/actionTypes'

const intitialState = {
    isFetching: false,
    isAuthenticated: false
}

function authReducer(state = intitialState, action) {
    switch(action.type) {
        case LOGIN_REQUEST: 
            return Object.assign({}, state,
                action.data
            )
        case LOGIN_SUCCESS: 
            return Object.assign({}, state,
                action.data
            )
        case LOGIN_FAILURE: 
            return Object.assign({}, state,
                action.data
            )
        default:
            return state
    }
}

const rootReducer = combineReducers({auth: authReducer})

export default rootReducer
