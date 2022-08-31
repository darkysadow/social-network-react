import { combineReducers, legacy_createStore as createStore } from "redux";
import homeReducer from "./home-reducer";
import messagesReducer from "./messages-reducer";
import profileUserReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    profileUserPage: profileUserReducer
});

let store = createStore(reducers);

window.store = store;

export default store;