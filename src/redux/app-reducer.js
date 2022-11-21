import { checkAuthMe } from "./auth-reducer";

const INITIALIZE_USER = 'INITIALIZE_USER';

let initialState = {
    initialized: false,
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_USER:
            return {
                ...state, initialized: true
            }
        default:
            return state;
    }
}

const initializeUser = () => ({type: INITIALIZE_USER})

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(checkAuthMe())
    promise.then(() => {
        dispatch(initializeUser());
    });
}

export default appReducer;