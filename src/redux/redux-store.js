import { combineReducers, legacy_createStore as createStore } from "redux";
import homeReducer from "./home-reducer";
import messagesReducer from "./messages-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    messagesPage: messagesReducer
});

let store = createStore(reducers);

export default store;