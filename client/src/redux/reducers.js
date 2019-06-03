import { combineReducers } from 'redux'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_SUCCESS, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL,
    UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE
} from './actionTypes'

const authIntitialState = {
    isFetching: false,
    isAuthenticated: false,
}

function authReducer(state = authIntitialState, action) {
    switch(action.type) {
        // Falls through if one is successful
        case LOGIN_REQUEST: 
        case LOGIN_SUCCESS: 
        case LOGIN_FAILURE: 
        case LOGOUT_SUCCESS:
        case OPEN_EDIT_MODAL:
        case CLOSE_EDIT_MODAL:
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PROFILE_FAILURE:
            return Object.assign({}, state,
                action.data
            )
        default:
            return state
    }
}

const rootReducer = combineReducers({auth: authReducer})

export default rootReducer
