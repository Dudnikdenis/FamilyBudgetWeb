import {combineReducers,applyMiddleware, createStore} from "redux";
import creditReducer from "./credit-reducer";
import ThunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    credit: creditReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;