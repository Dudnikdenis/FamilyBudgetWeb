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


const MainMoble = (props) => { 
    
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
                    <Routes>
                        <Route path='/' element = {<SelectorMoble/>}/>
                        <Route path='/credit' element = {<CreditContainer/>}/>
                        <Route path='/expenses' element = {<ExpensesContainer/>}/>
                        <Route path="/add/credit" element = {<CreditReduxForm /> }/> 
                        <Route path="/add/expenses" element = {<ExpensesReduxForm /> }/> 
                        <Route path="/shoppingList" element = {<ShoppingListContainer /> }/> 
                        <Route path="/add/shoppingList" element = {<ShoppingListForm /> }/>
                    </Routes>
                </div>
                </BrowserRouter>
            </div>
    )
}

export default MainMoble;