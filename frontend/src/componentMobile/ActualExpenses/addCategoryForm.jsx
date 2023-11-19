
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from './actualExpenses.module.css';
import { postNewCategory } from "../../Redux/actualExpenses-reducer";
import Back from "../../Img/backIcon.png";


let AddCategoryForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const submit = (dataForm) => {
        postNewCategory(dataForm);
        navigate('/actualExpenses');
    }
    
    return( 
        <>
        <Link  className={cs.backIcon} to="/">
            <img src={Back}/>
        </Link>
        <div >            
            <form className={cs.addCreditForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>                    
                    <input className={cs.formInput} {...register("category")} placeholder="Введите категорию"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить</button>
            </form>
        </div>
        </>
    
    )
}
export default AddCategoryForm;