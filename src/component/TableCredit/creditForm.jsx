import React from "react";
import { Field, reduxForm } from "redux-form";


let CreditReduxForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component = {"input"} name = {"nameBank"} placeholder="Название Банка"/>
            <Field component = {"input"} name = {"datePayment"}  placeholder="Дата"/>
            <Field component = {"input"} name = {"amount"} placeholder="Сумма"/>
            <button type="submit">Добавить кредит</button>
        </form>
    )
}

CreditReduxForm = reduxForm({form:'CreditForm'})(CreditReduxForm)

export default CreditReduxForm;