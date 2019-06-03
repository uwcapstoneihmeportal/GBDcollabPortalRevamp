// actions.js
import { 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    OPEN_EDIT_MODAL, CLOSE_EDIT_MODAL, 
    UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAILURE
} from './actionTypes' 

//////// LOGIN ACTIONS ///////////
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

export function loginSuccess(user, metaData) {
    return {
        type: LOGIN_SUCCESS,
        data: {
            isFetching: false,
            isAuthenticated: true,
            user,
            metaData
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

///////// LOGOUT ACTIONS /////////
export function logoutUser() {
    return dispatch => {
        dispatch(logoutSuccess())
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

//////// UPDATE PROFILE ACTIONS ///////////
function updataProfileRequest() {
    return {
        type: UPDATE_PROFILE_REQUEST,
        data: {
            isFetching: true,
            error: ''
        }
    }
}

function updateInfoFailure(errorMessage) {
    return {
        type: UPDATE_PROFILE_FAILURE,
        data: {
            isFetching: false,
            error: errorMessage
        }
    }
}


///////// EDIT MODAL ACTIONS //////////
export function openModal(title, data) {
    return dispatch => {
        dispatch(openEditModal(title, data))
    }
}

function openEditModal(title, data) {
    return {
        type: OPEN_EDIT_MODAL,
        data: {
            isEditModalOpen: true,
            modalTitle: title,
            modalData: data
        }
    }
}

export function closeModal() {
    return dispatch => {
        dispatch(closeEditModal())
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


////////// API ACTION CALLS ///////// 
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
            // store data in local storage
            localStorage.setItem('authToken', authToken)
            localStorage.setItem('user', JSON.stringify(userData))
            localStorage.setItem('metaData', JSON.stringify(authInfo))

            // successfully login user / close edit modal when changes complete
            dispatch(loginSuccess(userData, authInfo))
            dispatch(closeModal()) // closes edit modal view if edit occurs
        })
        .catch(error => {
            dispatch(loginFailure(error.message))
        })
    }
}

export function updateContactData(metaData, fields) {
    let baseURL = "https://ihme--ischool2.cs79.my.salesforce.com"
    let userURL = baseURL + metaData.sobject_url

    let authToken = metaData.token_type + " " + metaData.access_token

    let config = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken
        },
        body: JSON.stringify(fields) // make fields a js object (key to map)
    }

    return dispatch => {
        dispatch(updataProfileRequest())

        fetch(userURL, config)
        .then(response => {
            console.log(response)

            switch(response.status) {
                case 204: // success (no content returned)
                    // go update fetch user data
                    dispatch(fetchContactData(metaData)) // Goes and fetches new user data
                    break
    
                case 400:
                    throw Error("Sorry, we don't support updating one or more of these fields this time. Try each one individually. We are working on it, so check back soon!")
    
                default:
                    throw Error("Error updating your information, try again soon!")
            }
        })
        .catch(error => {
            dispatch(updateInfoFailure(error.message))
        })
    }
}
