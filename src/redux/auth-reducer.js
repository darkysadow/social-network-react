import { authAPI, profileAPI } from "../api/apiDAL";

const AUTH_STATUS = 'AUTH_STATUS';
const GET_USER_DATA = 'GET_USER_DATA';
const SET_USER_AVATAR = 'SET_USER_AVATAR';
const ADD_ERROR_TO_STATE = 'ADD_ERROR_TO_STATE';

let initialState = {
    isAuthorized: null,
    userId: null,
    email: null,
    login: null,
    avatar: null,
    errorMessages: null
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
        case SET_USER_AVATAR:
            return {
                ...state, avatar: action.avatar
            }
        case ADD_ERROR_TO_STATE: 
            return {
                ...state, errorMessages: action.error
            }
        default:
            return state;
    }
}

export const changeAuthStatus = (authStatus) => ({ type: AUTH_STATUS, authStatus });
const getUserData = (userId, email, login) => ({ type: GET_USER_DATA, userId, email, login});
const setUserAvatar = (avatar) => ({type: SET_USER_AVATAR, avatar});
const addError = (error) => ({type: ADD_ERROR_TO_STATE, error});

export const checkAuthMe = () => (dispatch) => {
    let authUserId;
    authAPI.me().then(response => {
        if(response.data.resultCode === 1) {
            dispatch(changeAuthStatus(false));
        } else if (response.data.resultCode === 0) {
            authUserId = response.data.data.id;
            dispatch(getUserData(response.data.data.id, response.data.data.email, response.data.data.login));
            dispatch(changeAuthStatus(true));
        }
    }).then(() => {
        if(authUserId) {
        profileAPI.getUserProfile(authUserId).then(secondResponse => {
            dispatch(setUserAvatar(secondResponse.data.photos.large));
        })}
})
}

export const loginUser = (login, password, rememberMe) => (dispatch) => {
    authAPI.login(login, password, rememberMe).then(response => {
        /*if(response.data.resultCode === 1) {
            dispatch(changeAuthStatus(false));
            console.log(response.data);
            dispatch(addError(response.messages));
        } else if (response.data.resultCode === 0) {
            dispatch(changeAuthStatus(true))
        }*/
        if (response.data.resultCode === 0) {
            dispatch(changeAuthStatus(true));
            dispatch(addError(null));
        } else {
            dispatch(changeAuthStatus(false));
            dispatch(addError(response.data.messages));
        }
    });
}

export const logoutUser = () => (dispatch) => {
    authAPI.logout().then(response => {
        if(response.data.resultCode === 0) {
            dispatch(changeAuthStatus(false));
            dispatch(getUserData(null, null, null))
        } 
    })
}

export default authReducer;