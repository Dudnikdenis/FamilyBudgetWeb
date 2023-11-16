
import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from './actualExpenses.module.css'


let ActualExpensesForm = (props) => {

    useEffect( ()=>{
       props.getCategoryList();
    },[]);

    const [select, setSelect] = useState();

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();

    const submit = (dataForm) => {
        let res = {
            category:select,
            amount:dataForm.amount
          };
        props.postAddActualExpenses(res);
        navigate('/actualExpenses');
    }
    const handleChange = (event) =>{
        setSelect(event.target.value);
    }
    
    return( 
        <div >
            <Link className={cs.link} to="/actualExpenses"> Назад </Link>
            <form className={cs.addCreditForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>
                <label>Категория:
                    <select value={select} onChange={handleChange}>
                        {props.categoryList.map(c=><option value={c.id}>{c.category}</option>)}
                    </select>
                </label>
                </div>
                <div className={cs.formFiled}>
                    <label>Сумма:</label>
                    <input className={cs.formInput} {...register("amount")}/>
                </div>
                <button className={cs.formBut} type="submit">Добавить</button>
            </form>
        </div>
    
    )
}
export default ActualExpensesForm;