import { applyMiddleware } from "redux";
import { combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import homeReducer from "./home-reducer";
import messagesReducer from "./messages-reducer";
import profileUserReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    profileUserPage: profileUserReducer,
    auth: authReducer,
    app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;