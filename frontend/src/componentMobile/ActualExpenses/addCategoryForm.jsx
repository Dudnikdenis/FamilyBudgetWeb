
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from './actualExpenses.module.css';
import { postNewCategory } from "../../Redux/actualExpenses-reducer";


let AddCategoryForm = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const submit = (dataForm) => {
        postNewCategory(dataForm);
        navigate('/actualExpenses');
    }
    
    return( 
        <div >
            <Link className={cs.link} to="/actualExpenses"> Назад </Link>
            <form className={cs.addCreditForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>                    
                    <input className={cs.formInput} {...register("category")} placeholder="Введите категорию"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить</button>
            </form>
        </div>
    
    )
}
export default AddCategoryForm;