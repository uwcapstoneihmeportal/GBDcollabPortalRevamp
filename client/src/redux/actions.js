// actions.js
import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    LOGOUT_SUCCESS, LOGOUT_FAILURE, OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL
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

function loginSuccess(user) {
    return {
        type: LOGIN_SUCCESS,
        data: {
            isFetching: false,
            isAuthenticated: true,
            user
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
        type: LOGIN_SUCCESS,
        data: {
            isFetching: false,
            isAuthenticated: false,
        }
    }
}

function openEditModal() {
    return {
        type: OPEN_EDIT_MODAL,
        data: {
            isEditModalOpen: true
        }
    }
}

function closeEditModal() {
    return {
        type: CLOSE_EDIT_MODAL,
        data: {
            isEditModalOpen: false
        }
    }
}

export function closeModal() {
    return dispatch => {
        dispatch(closeEditModal())
    }
}

export function openModal() {
    return dispatch => {
        dispatch(openEditModal())
    }
}

export function logoutUser() {
    // do something with cached key

    return dispatch => {
        dispatch(logoutSuccess())
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
            dispatch(fetchContactData(json))
        })
        .catch(error => {
            dispatch(loginFailure(error.message))
        })
    }
}

function fetchContactData(authInfo) {
    let contactObjectPath = authInfo.sobject_url
    let authToken = authInfo.token_type + " " + authInfo.access_token
    let baseURL = "https://ihme--ischool2.cs79.my.salesforce.com"
    let userURL = baseURL + contactObjectPath

    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        }
    }

    return dispatch => {
        fetch(userURL, config)
        .then(response => {
            switch(response.status) {
                case 200:
                    return response.json()
    
                // TODO ADD MORE CASES FOR ERRORS
    
                default:
                    throw Error("Error getting user data, try again!")
            }
        })
        .then(userData => {
            dispatch(loginSuccess(userData))
        })
        .catch(error => {
            dispatch(loginFailure(error.message))
        })
    }
}
