import { authAPI } from "../api/apiDAL";

const AUTH_STATUS = 'AUTH_STATUS';
const GET_USER_DATA = 'GET_USER_DATA';
const LOGIN = 'LOGIN';

let initialState = {
    isAuthorized: null,
    userId: null,
    email: null,
    login: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_STATUS:
            return {
                ...state, isAuthorized: action.authStatus
            }
        case GET_USER_DATA:
            return {
                ...state, userId: action.userId, email: action.email, login: action.login
            }
        default:
            return state;
    }
}

export const changeAuthStatus = (authStatus) => ({ type: AUTH_STATUS, authStatus });
const getUserData = (userId, email, login) => ({ type: GET_USER_DATA, userId, email, login})

export const checkAuthMe = () => (dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode == 1) {
            dispatch(changeAuthStatus(false));
        } else if (response.data.resultCode == 0) {
            dispatch(changeAuthStatus(true));
            dispatch(getUserData(response.data.data.id, response.data.data.email, response.data.data.login))
        }
    })
}

export const loginUser = (login, password, rememberMe) => (dispatch) => {
    authAPI.login(login, password, rememberMe).then(response => {
        if(response.data.resultCode == 1) {
            dispatch(changeAuthStatus(false));
        } else if (response.data.resultCode == 0) {
            dispatch(changeAuthStatus(true))
        }
    })
}

export default authReducer;