// actions.js
import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_REQUEST, LOGOUT_SUCCESS 
} from './actionTypes' 

function loginRequest(email, password) {
    return {
        type: LOGIN_REQUEST,
        data: {
            isFetching: true,
            isAuthenticated: false,
            userEmail: email
        }
    }
}

function loginSuccess() {
    return {
        type: LOGIN_SUCCESS,
        data: {
            isFetching: false,
            isAuthenticated: true,
        }
    }
}

function loginFailure(errorMessage) {
    return {
        type: LOGIN_FAILURE,
        data: {
            isFetching: false,
            isAuthenticated: false,
            error: errorMessage
        }
    }
}

function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
        data: {
            isFetching: false,
            isAuthenticated: false
        }
    }
}

export function loginUser(email, password) {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }

    return dispatch => {
        dispatch(loginRequest(email, password))

        fetch("https://api.infonexus.me/v1/authorize", config)
        .then(response => {
            switch (response.status) {
                // Successful log in
                case 200:
                    return response.json()

                // Unauthorized
                case 401:
                    throw Error("Sign In Failed: Incorrect email or password entered")

                default:
                    throw Error("Something went wrong :( try again soon!")
            }            
        })
        .then(json => {
            dispatch(loginSuccess())
        })
        .catch(error => {
            dispatch(loginFailure(error.message))
        })
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(logoutSuccess())
    }
}
