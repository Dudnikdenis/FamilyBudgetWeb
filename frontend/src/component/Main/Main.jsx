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


const Main = (props) => { 
    
    return(
            <div className={cs.total}>
                <BrowserRouter>
                <div className={cs.header}>

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
                    </div>
                    <div className={cs.main}>
                        <Routes>
                            <Route path='/credit' element = {<CreditContainer/>  }/>
                            <Route path='/expenses' element = {<ExpensesContainer/>  }/> 
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

export default Main;