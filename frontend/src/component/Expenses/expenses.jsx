import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import cs from './expenses.module.css'


const Expenses = (props) => { 

    useEffect( ()=>{
        props.getExpenses();
    },[])


    const deleteExpenses = (e, id) =>{
        
        props.deleteExpenses({expenses_id:id});
    }

    const getColorRow = (value)=>{
        if(value) return cs.green
        
     }

     const UpdateAccomplishment = (e, accomplishment, expenses_id) =>{
        props.UpdateAccomplishment({accomplishment:!accomplishment, expenses_id:expenses_id})
     }

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
                                <div>{m.name_expenses}</div>
                            </td>
                            <td className={cs.tdAmount}>
                                <div>{m.amount}</div>
                            </td>
                            <td onClick={(e)=>{UpdateAccomplishment(e,m.accomplishment, m.expenses_id)}} className={cs.td}>
                                    <div className={getColorRow(m.accomplishment)}></div>
                            </td>
                            <td className={cs.td}>
                                <button onClick={(e)=>{deleteExpenses(e,m.expenses_id)}}>Удалить</button>
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