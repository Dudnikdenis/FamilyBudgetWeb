import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import cs from './expenses.module.css'


let ExpensesReduxForm = (props) => {

    const onSubmit = (dataForm) => {
        console.log(dataForm);
        //props.AddCreditCreator({id:props.credit.credit.length+1, nameBank:dataForm.nameBank, datePayment:dataForm.datePayment, amount:dataForm.amount})
    }


    return (
        <div >
            <Link className={cs.link} to="/expenses"> Назад </Link>
            <div className={cs.divForm}>
            <form className={cs.addForm} onSubmit={onSubmit}>
                <div className={cs.formFiled}>
                    <Field className={cs.formInput} component = {"input"} name = {"nameBank"} placeholder="Название "/>
                </div>
                <div className={cs.formFiled}>
                    <Field className={cs.formInput} component = {"input"} name = {"amount"} placeholder="Сумма"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить</button>
            </form>
            </div>
        </div>
    )
}

ExpensesReduxForm = reduxForm({form:'ExpensesForm'})(ExpensesReduxForm)

export default ExpensesReduxForm;