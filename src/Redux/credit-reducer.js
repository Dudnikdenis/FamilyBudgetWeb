import {combineReducer,applyMiddleware, createStore} from "redux";
import creditReducer from "./Redux-store";

let reducers = combineReducer({
    credit: creditReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;