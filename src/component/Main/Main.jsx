import React from "react";
import { Link } from "react-router-dom";
import cs from './main.module.css'


const Main = (props) => { 

    
    return(
        <div>
            <Link className={cs.link} to="/credit" >Кредиты </Link>
            <Link className={cs.link} to="/expenses" >Расходы</Link>
        </div>
    )
}

export default Main;