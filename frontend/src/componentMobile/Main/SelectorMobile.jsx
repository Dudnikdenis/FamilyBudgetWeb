import React from "react";
import { Link, useNavigate } from "react-router-dom";
import cs from './mainMobile.module.css';

  
const SelectorMoble = () => { 

    const Navigate = useNavigate();

    const CreditBut = () =>{
        Navigate('/credit');
    };

    const ExpensesBut = () =>{
        Navigate('/expenses');
    }

    const ShopBut = () =>{
        Navigate('/shoppingList');
    }

    const ActualExpBut = () =>{
        Navigate('/actualExpenses');
    }
    
    return(
            
        <div className={cs.sel}>
            <div onClick={CreditBut} className={cs.cre}>
                <b>Кредиты</b> 
            </div>
            <div onClick={ExpensesBut} className={cs.exp}>
                <b>Расходы</b>
            </div>
            <div onClick={ShopBut} className={cs.shop}>
                <b>Список покупок</b>
            </div>
            <div onClick={ActualExpBut} className={cs.actExp}>
                <b>Фактические расходы</b>
            </div>
        </div>
           
    )
}

export default SelectorMoble;