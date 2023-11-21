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
                Кредиты 
            </div>
            <div onClick={ExpensesBut} className={cs.exp}>
                Расходы
            </div>
            <div onClick={ShopBut} className={cs.shop}>
                Список покупок
            </div>
            <div onClick={ActualExpBut} className={cs.actExp}>
                Фактические расходы
            </div>
        </div>
           
    )
}

export default SelectorMoble;