import {combineReducers,applyMiddleware, createStore} from "redux";
import creditReducer from "./credit-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import ExpensesReduser from "./expenses-reducer";

let reducers = combineReducers({
    expenses: ExpensesReduser,
    credit: creditReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;