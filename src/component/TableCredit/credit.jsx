import React, {useState} from "react";
import { Link } from "react-router-dom";
import cs from './credit.module.css'
import CreditReduxForm from './creditForm'


const Credit = (props) => { 


    return(
        <div>
            <table className={cs.table}>
                        <tr>
                            <th className={cs.td_name}>Название банка</th>
                            <th className={cs.td}>Дата платежа</th>
                            <th className={cs.td}>Сумма</th>
                        </tr>
                {props.credit.credit.map(m=>
                        <tr >
                            <td className={cs.td_name}>
                                <div>{m.nameBank}</div>
                            </td>
                            <td className={cs.td}>
                                <div >{m.datePayment}</div>
                            </td>
                            <td className={cs.td}>
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
                <Link className={cs.link} to="/add/credit" >  Добавить </Link>
           </div>
        </div>
    )
}

export default Credit;