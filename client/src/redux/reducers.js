import { combineReducers } from 'redux'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_SUCCESS, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL,
    UPDATE_PROFILE_REQUEST
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
            return Object.assign({}, state,
                action.data
            )
        default:
            return state
    }
}

// function editReducer(state = editInitalState, action) {
//     switch (action) {
//         case OPEN_EDIT_MODAL:
//         case CLOSE_EDIT_MODAL:
//             return Object.assign({}, state,
//                 action.data
//             )
//         default: 
//             return state
//     }
// }

const rootReducer = combineReducers({auth: authReducer})

export default rootReducer
