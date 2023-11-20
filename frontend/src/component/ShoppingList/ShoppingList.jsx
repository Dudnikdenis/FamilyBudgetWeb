import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import cs from './shoppingList.module.css';
import Delete from "../../Img/waste_bin_delete_remove_recycle_icon_123840.png";



const ShoppingList = (props) => { 
    
    useEffect( ()=>{
        props.getShoppingList(props.token);
    },[])

    const deleteShoppingList = (e, id) =>{
        
        props.deleteShoppingList({shoppingList_id:id});
    }

    const deleteList = () =>{
        props.deleteShoppingListTotal();
    }

    const getColorRow = (value)=>{
        if(value) return cs.green
        
     }

     const UpdateAccomplishment = (e, accomplishment, shoppinglist_id) =>{
        props.UpdateAccomplishment({accomplishment:!accomplishment, shoppinglist_id:shoppinglist_id})
     }

    return(
        <>
        {props.error? <label>{props.message}</label>:
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
                            <td onClick={(e)=>{UpdateAccomplishment(e,m.accomplishment, m.shoppinglist_id)}}  className={cs.td}>
                                <div className={getColorRow(m.accomplishment)}></div>
                            </td> 
                            <td className={cs.td}>
                                <img onClick={(e)=>{deleteShoppingList(e,m.shoppinglist_id)}} src={Delete}/>
                            </td>                            
                        </tr> 
                    )
                }
                </table>:"Подождите!"}
            <div className={cs.addCredit}>
                <Link className={cs.link} to="/add/ShoppingList" >  Добавить </Link>
                <button className={cs.link} onClick={deleteList} >  Очистить </button>
           </div>
        </div>}
        </>
    )
}

export default ShoppingList;