import { combineReducers } from 'redux'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_FAILURE, LOGOUT_SUCCESS } from './actionTypes'

const intitialState = {
    isFetching: false,
    isAuthenticated: false,
}

function authReducer(state = intitialState, action) {
    switch(action.type) {
        // Falls through if one is successful
        case LOGIN_REQUEST: 
        case LOGIN_SUCCESS: 
        case LOGIN_FAILURE: 
        case LOGOUT_SUCCESS:
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
