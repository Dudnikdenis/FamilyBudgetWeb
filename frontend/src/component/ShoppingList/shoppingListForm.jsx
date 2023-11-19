
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from './shoppingList.module.css'
import { postAddShoppingList } from "../../Redux/ShoppingList-reducer";
import Back from "../../Img/backIcon.png";


let ShoppingListForm = () => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const submit = (dataForm) => {
        postAddShoppingList(dataForm);
        navigate('/shoppingList');
        
        
        
    }

    
    return( 
        <>
        <Link  className={cs.backIcon} to="/shoppingList">
            <img src={Back}/>
        </Link>
        <div >
            <form className={cs.addCreditForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("product_name")}  type="text" placeholder="Название продукта"/>
                </div>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("product_quantity")} placeholder="Вес или кол-во"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить</button>
            </form>
        </div>
        </>
    
    )
}



export default ShoppingListForm;