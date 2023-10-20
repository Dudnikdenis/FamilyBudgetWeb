import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import cs from './credit.module.css'


let CreditReduxForm = (props) => {

    const onSubmit = (dataForm) => {
        console.log(dataForm);
        //props.AddCreditCreator({id:props.credit.credit.length+1, nameBank:dataForm.nameBank, datePayment:dataForm.datePayment, amount:dataForm.amount})
    }


    return (
        <div >
            <Link className={cs.link} to="/credit"> Назад </Link>
            <form className={cs.addCreditForm} onSubmit={onSubmit}>
                <div className={cs.formFiled}>
                    <Field className={cs.formInput} component = {"input"} name = {"nameBank"} placeholder="Название Банка"/>
                </div>
                <div className={cs.formFiled}>
                    <Field className={cs.formInput} component = {"input"} name = {"datePayment"}  placeholder="Дата"/>
                </div>
                <div className={cs.formFiled}>
                    <Field className={cs.formInput} component = {"input"} name = {"amount"} placeholder="Сумма"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить кредит</button>
            </form>
        </div>
    )
}

CreditReduxForm = reduxForm({form:'CreditForm'})(CreditReduxForm)

export default CreditReduxForm;