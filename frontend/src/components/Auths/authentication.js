import {authType} from './authType'
import axios from 'axios'

export function loginRequest(username, password) {
    return (dispatch) => {
        // Inform Login API is starting
        dispatch(login());

        // API REQUEST
        return axios.post('/api/account/signin', { username, password })
            .then((response) => {
                // SUCCEED
                dispatch(loginSuccess(username));
            }).catch((error) => {
                // FAILED
                dispatch(loginFailure());
            });
    };
}

export function login() {
    return {
        type: authType.AUTH_LOGIN
    };
}

export function loginSuccess(username) {
    return {
        type: authType.AUTH_LOGIN_SUCCESS,
        username
    };
}

export function loginFailure() {
    return {
        type: authType.AUTH_LOGIN_FAILURE,
    };
}