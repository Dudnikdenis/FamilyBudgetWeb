import {combineReducers,applyMiddleware, createStore} from "redux";
import creditReducer from "./credit-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import ExpensesReduser from "./expenses-reducer";
import ShoppingListReducer from "./ShoppingList-reducer";
import CommunalPaymentsReduser from "./communalPayments-reducer";
import ActualExpensesReduser from "./actualExpenses-reducer";
import AuthorizationReduser from "./authorization-reducer"

let reducers = combineReducers({
    authorization: AuthorizationReduser,
    expenses: ExpensesReduser,
    credit: creditReducer,
    ShoppingList: ShoppingListReducer,
    communalPayments: CommunalPaymentsReduser,
    actualExpensesReduser: ActualExpensesReduser,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(ThunkMiddleware));


export default store;