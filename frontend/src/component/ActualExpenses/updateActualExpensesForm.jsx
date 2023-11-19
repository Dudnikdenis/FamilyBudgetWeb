
import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from './actualExpenses.module.css';
import Back from "../../Img/backIcon.png";


let UpdateActualExpensesForm = (props) => {

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
        props.postUpdateActualExpenses(res);   
        navigate('/actualExpenses');
    }
    const handleChange = (event) =>{
        setSelect(event.target.value);
    }
    
    return( 
        <>
        <Link  className={cs.backIcon} to="/actualExpenses">
            <img src={Back}/>
        </Link>
        <div >            
            <form className={cs.addCreditForm} onSubmit={handleSubmit(submit)}>
                <div className={cs.formFiled}>
                <label>Категория:
                    <select value={select} onChange={handleChange}>
                    <option value='0'>выбери категорию</option>
                        {props.categoryList.map(c=><option value={c.id}>{c.category}</option>)}
                    </select>
                </label>
                </div>
                <div className={cs.formFiled}>
                    <label>Сумма:</label>
                    <input className={cs.formInput} {...register("amount")}/>
                </div>
                <button className={cs.formBut} type="submit">Изменить</button>
            </form>
        </div>
        </>
    
    )
}
export default UpdateActualExpensesForm;