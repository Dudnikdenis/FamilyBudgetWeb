import React from "react";
import { Link } from "react-router-dom";
import cs from './main.module.css';
import {
    BrowserRouter, Routes,
    Route,
  } from 'react-router-dom'
import CreditContainer from '../TableCredit/creditContainer';
import ExpensesContainer from '../Expenses/expensesContainer';
import CreditReduxForm from '../TableCredit/creditForm';
import ExpensesReduxForm from '../Expenses/expensesForm';
import ShoppingListContainer from "../ShoppingList/ShoppingListContainer";
import ShoppingListForm from "../ShoppingList/shoppingListForm";
import AuthorizationContainer from "../Authorization/authorizationContainer";
import logo from '../../Img/pngegg.png'
import CommunalPaymentsContainer from "../CommunalPayments/communalPaymentsContainer";
import ActualExpensesContainer from "../ActualExpenses/actualExpensesContainer";
import ActualExpensesFormContainer from "../ActualExpenses/actualExpensesFormContainer";
import AddCategoryForm from "../ActualExpenses/addCategoryForm";
import UpdateActualExpensesFormContainer from "../ActualExpenses/updateActualExpensesFormContainer";


const Main = () => { 
    
    return(
            <div className={cs.total}>
                <BrowserRouter>
                    <div className={cs.header}>
                        <img src={logo} className={cs.img}/>
                        <div className={cs.divHeader}></div>
                        <div className={cs.butHeader}>
                            <Link className={cs.linkAuthor} to="/" >Войти</Link>
                        </div>
                    </div>
                    <div className={cs.panel}>
                        <div className={cs.tabs}>
                            <Link className={cs.link} to="/credit" >Кредиты </Link>
                        </div>
                        <div className={cs.tabs}>
                            <Link className={cs.link} to="/expenses" >Расходы</Link>
                        </div>
                        <div className={cs.tabs}>
                            <Link className={cs.link} to="/shoppingList" >Список покупок</Link>
                        </div>
                        <div className={cs.tabs}>
                            <Link className={cs.link} to="/communalPayments" >Коммунальные платежи</Link>
                        </div>
                        <div className={cs.tabs}>
                            <Link className={cs.link} to="/actualExpenses" >Фактические расходы</Link>
                        </div>
                    </div>
                    <div className={cs.main}>
                        <Routes>
                            <Route path='/' element = {<AuthorizationContainer/>  }/>
                            <Route path='/credit' element = {<CreditContainer/>  }/>
                            <Route path='/expenses' element = {<ExpensesContainer/>  }/> 
                            <Route path="/add/credit" element = {<CreditReduxForm /> }/> 
                            <Route path="/add/expenses" element = {<ExpensesReduxForm /> }/>                         
                            <Route path="/shoppingList" element = {<ShoppingListContainer /> }/> 
                            <Route path="/add/shoppingList" element = {<ShoppingListForm /> }/>
                            <Route path="/communalPayments" element = {<CommunalPaymentsContainer /> }/> 
                            <Route path="/actualExpenses" element = {<ActualExpensesContainer /> }/> 
                            <Route path="/add/actualExpenses" element = {<ActualExpensesFormContainer /> }/>
                            <Route path="/add/category" element = {<AddCategoryForm/> }/>
                            <Route path="/update/actualExpenses" element = {<UpdateActualExpensesFormContainer /> }/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
    )
}

export default Main;