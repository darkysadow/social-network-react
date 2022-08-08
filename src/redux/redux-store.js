import { combineReducers, legacy_createStore as createStore } from "redux";
import homeReducer from "./home-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;