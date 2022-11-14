import { authAPI } from "../api/apiDAL";

const AUTH_STATUS = 'AUTH_STATUS'

let initialState = {
    isAuthorized: null
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_STATUS:
            return {
                ...state, isAuthorized: action.authStatus
            }
        default:
            return state;
    }
}

export const changeAuthStatus = (authStatus) => ({ type: AUTH_STATUS, authStatus })

export const checkAuthMe = (dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode == 1) {
            dispatch(changeAuthStatus(false));
        } else if (response.data.resultCode == 0) {
            dispatch(changeAuthStatus(true))
        }
    })
}

export default authReducer;