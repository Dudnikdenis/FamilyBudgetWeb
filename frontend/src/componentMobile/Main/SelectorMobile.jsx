import React from "react";
import { Link } from "react-router-dom";
import cs from './mainMobile.module.css';

  
const SelectorMoble = (props) => { 
    
    return(
            
        <div >
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
           
    )
}

export default SelectorMoble;