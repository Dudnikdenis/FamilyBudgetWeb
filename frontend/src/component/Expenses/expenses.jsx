import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import cs from './expenses.module.css'


const Expenses = (props) => { 

    useEffect( ()=>{
        props.getExpenses();
    },[])

    return(
        <div>
            <table  className={cs.table}>
                        <tr>
                            <th className={cs.td_name}>Название</th>
                            <th className={cs.td}>Сумма</th>
                            <th className={cs.td}>Результат</th>
                        </tr>
                {props.expenses.expenses.map(m=>
                        <tr >
                            <td className={cs.td_name}>
                                <div>{m.nameExpenses}</div>
                            </td>
                            <td className={cs.tdAmount}>
                            <div>{m.amount}</div>
                            </td>
                            <td className={cs.td}>
                                <input type="checkbox"></input>
                            </td>                            
                        </tr> 
                    
                    )
                }
                </table>
                <div className={cs.addCredit}>
                    <Link className={cs.link} to="/add/expenses" > Добавить </Link>
                </div>
        </div>
    )
}

export default Expenses;