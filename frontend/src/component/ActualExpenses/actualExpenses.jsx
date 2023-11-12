//import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import cs from './actualExpenses.module.css';
import Delete from "../../Img/waste_bin_delete_remove_recycle_icon_123840.png";



const actualExpenses = (props) => { 
    
    return(
        <div className={cs.AEdiv}>
            <b><div className={cs.mounth}>{props.mounthActualExpenses}</div></b>
            <table className={cs.table}>
                <tr>
                    <th className={cs.td}>категория</th>
                    <th className={cs.td}>сумма</th>
                </tr>
            {props.actualExpenses.map(a=>
                <tr>
                    <td className={cs.td}>{a.category}</td>
                    <td className={cs.td}>{a.amount}</td>
                </tr>
                )}
            </table>
            <button className={cs.expensesButton}>потратил</button>
        </div>
    )
}

export default actualExpenses;