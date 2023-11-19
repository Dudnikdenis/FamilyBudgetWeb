
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from './credit.module.css'
import { postAddCredit } from "../../Redux/credit-reducer";
import Back from "../../Img/backIcon.png";

let CreditReduxForm = () => {

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const submit = (dataForm) => {
        postAddCredit(dataForm);
        navigate('/credit');
        
        
        
    }

    
    return( 
        <>
        <Link  className={cs.backIcon} to="/credit">
            <img src={Back}/>
        </Link>
        <div >            
            <form className={cs.addCreditForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("nameBank")}  type="text" placeholder="Название Банка"/>
                </div>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("datePayment")} placeholder="Дата"/>
                </div>
                <div className={cs.formFiled}>
                    <input className={cs.formInput} {...register("amount")} placeholder="Сумма"/>
                </div>
                <button className={cs.formBut} type="submit">Добавить кредит</button>
            </form>
        </div>
        </>
    
    )
}



export default CreditReduxForm;