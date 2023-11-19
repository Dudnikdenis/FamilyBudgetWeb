import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import cs from './actualExpenses.module.css';
//import Delete from "../../Img/waste_bin_delete_remove_recycle_icon_123840.png";



const ActualExpenses = (props) => { 

    useEffect( ()=>{
        props.getActualExpenses();
    },[]);
    
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
            <div className={cs.buttons}>
                <Link to = "/add/actualExpenses" className={cs.expensesButton}>потратил</Link>
                <Link  className={cs.AELink} to="/add/category">Добавить категорию</Link>
                <Link  className={cs.AELinkUpdate} to="/update/actualExpenses">Изменить</Link>
            </div>
        </div>
    )
}

export default ActualExpenses;