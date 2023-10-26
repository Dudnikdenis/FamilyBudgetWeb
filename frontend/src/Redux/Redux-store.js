import {combineReducers,applyMiddleware, createStore} from "redux";
import creditReducer from "./credit-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import ExpensesReduser from "./expenses-reducer";
import ShoppingListReducer from "./ShoppingList-reducer";
import CommunalPaymentsReduser from "./communalPayments-reducer";

let reducers = combineReducers({
    expenses: ExpensesReduser,
    credit: creditReducer,
    ShoppingList: ShoppingListReducer,
    communalPayments: CommunalPaymentsReduser,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;