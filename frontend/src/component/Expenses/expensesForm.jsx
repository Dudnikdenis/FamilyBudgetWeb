import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import cs from './expenses.module.css';
import { postAddExpenses } from "../../Redux/expenses-reducer";
import Back from "../../Img/backIcon.png";


let ExpensesReduxForm = (props) => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();

    const submit = (dataForm) => {
        postAddExpenses(dataForm);
        navigate('/expenses');
    }


    return (
        <>
        <Link  className={cs.backIcon} to="/expenses">
            <img src={Back}/>
        </Link>
        <div >            
            <div className={cs.divForm}>
            <form className={cs.addForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("nameExpenses")}  type="text" placeholder="Название "/>
                </div>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("amount")}  type="text" placeholder="Сумма"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить</button>
            </form>
            </div>
        </div>
        </>
    )
}



export default ExpensesReduxForm;