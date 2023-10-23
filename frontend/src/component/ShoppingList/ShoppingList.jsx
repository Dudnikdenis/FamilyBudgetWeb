import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import cs from './shoppingList.module.css'



const ShoppingList = (props) => { 
    
    useEffect( ()=>{
        props.getShoppingList();
    },[])


    return(
        <div className={cs.creditDiv}>
            {props.shoppingList?
            <table className={cs.table}>
                        <tr>
                            <th className={cs.td_name}>Список покупок</th>
                            <th className={cs.td}>вес,кол-во</th>
                            <th className={cs.td}>Покупка   </th>
                        </tr>
                {props.shoppingList.map (m=>
                        <tr >
                            <td className={cs.td_name}>
                                <div>{m.product_name}</div>
                            </td>
                            <td className={cs.td}>
                                <div >{m.product_quantity}</div>
                            </td>
                            <td className={cs.td}>
                                <input type="checkbox"></input>
                            </td>                            
                        </tr> 
                    )
                }
                </table>:"Подождите!"}
            <div className={cs.addCredit}>
                <Link className={cs.link} to="/add/ShoppingList" >  Добавить </Link>
           </div>
           <div className={cs.resetShoppingList}>
                <button className={cs.link} >  Очистить </button>
           </div>
        </div>
    )
}

export default ShoppingList;