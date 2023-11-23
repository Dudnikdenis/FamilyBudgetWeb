import React from "react";
import { Link } from "react-router-dom";
import cs from './mainMobile.module.css';
import {
    BrowserRouter, Routes,
    Route,
  } from 'react-router-dom'
  
import CreditContainer from '../TableCreditmobile/creditContainer';
import SelectorMoble from "./SelectorMobile";
import ExpensesContainer from '../Expenses/expensesContainer';
import CreditReduxForm from '../TableCreditmobile/creditForm';
import ExpensesReduxForm from '../Expenses/expensesForm';
import ShoppingListContainer from "../ShoppingList/ShoppingListContainer";
import ShoppingListForm from "../ShoppingList/shoppingListForm";
//import Authorization from "../Authorization/authorization";
import logo from '../../Img/pngegg.png'
import ActualExpensesContainer from "../ActualExpenses/actualExpensesContainer";
import ActualExpensesFormContainer from "../ActualExpenses/actualExpensesFormContainer";
import AddCategoryForm from "../ActualExpenses/addCategoryForm";
import UpdateActualExpensesFormContainer from "../../component/ActualExpenses/updateActualExpensesFormContainer";
import AuthorizationContainer from "../../componentMobile/Authorization/authorizationContainer";
import UpdateUserContainer from "../Authorization/updateUserContainer";


const MainMoble = (props) => { 

    return(
            <div className={cs.total}>
                <BrowserRouter>
                <div className={cs.header}>
                    <img src={logo} className={cs.img}/>
                    <div className={cs.divHeader}></div>
                    <div className={cs.butHeader}>
                        {props.user? <><label className={cs.UserAuthor}>{props.user}</label>
                                        <Link className={cs.linkAuthor} to="/updateuser" > n</Link>
                                      </>  
                        :<Link className={cs.linkAuthor} to="/" >Войти</Link>}
                    </div>
                </div>
                <div className={cs.panel}>
                    <Routes>
                        <Route path='/' element = {<AuthorizationContainer/>}/> 
                        <Route path="/updateuser" element = {<UpdateUserContainer/>}/>
                        <Route path='/select' element = {<SelectorMoble/>}/> 
                        <Route path='/credit' element = {<CreditContainer/>}/>
                        <Route path='/expenses' element = {<ExpensesContainer/>}/>
                        <Route path="/add/credit" element = {<CreditReduxForm /> }/> 
                        <Route path="/add/expenses" element = {<ExpensesReduxForm /> }/> 
                        <Route path="/shoppingList" element = {<ShoppingListContainer /> }/> 
                        <Route path="/add/shoppingList" element = {<ShoppingListForm /> }/>
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

export default MainMoble;