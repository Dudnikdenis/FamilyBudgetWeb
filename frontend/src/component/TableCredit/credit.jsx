import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import cs from './credit.module.css'



const Credit = (props) => { 
    
    useEffect( ()=>{
        props.getCredit();
    },[])


    return(
        <div className={cs.creditDiv}>
            <table className={cs.table}>
                        <tr>
                            <th className={cs.td_name}>Название банка</th>
                            <th className={cs.td}>Дата платежа</th>
                            <th className={cs.td}>Сумма</th>
                            <th className={cs.td}>Оплата</th>
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
           <table className={cs.total_amount}>
                <tr>
                    <th className={cs.td_total_amount}>1 число</th>
                    <th className={cs.td_total_amount}>14 число</th>
                </tr>
                <tr>
                    <td className={cs.td_total_amount}>{props.credit.ferstNumberAmount}</td>
                    <td className={cs.td_total_amount}>{props.credit.secondNumberAmount}</td>
                </tr>
                <tr>
                    <th colspan="2" className={cs.td_total_amount}>Всего</th>
                </tr>
                <tr>
                    <td colspan="2" className={cs.td_total_amount}>{props.credit.totalAmount}</td>
                </tr>
           </table>
        </div>
    )
}

export default Credit;