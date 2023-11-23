import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
import cs from "./authorization.module.css";
import Back from "../../Img/backIcon.png";

const Authorization = (props) =>{


    useEffect( ()=>{
        props.getUserList(props.token);
     },[]);
 
    const navigate = useNavigate();
    const [select, setSelect] = useState();
    const { register, handleSubmit } = useForm();
    const submit = (dataForm) => {
        let res = {
            user_id:select,
            password:dataForm.password
          };
        props.postUpdateUser(res);
        navigate('/select');
    };

    const handleChange = (event) =>{
        setSelect(event.target.value);
    };

    return(
        <>
        <Link  className={cs.backIcon} to="/select">
            <img src={Back}/>
        </Link>
        {props.error? <label>{props.message}</label>:
        <form onSubmit={handleSubmit(submit)}>
            <div className={cs.formFiled}>
                <label>Пользователь:
                    <select value={select} onChange={handleChange}>
                        <option value='0'>выбери пользователя</option>
                        {props.userList.map(c=><option value={c.id}>{c.username}</option>)}
                    </select>
                </label>
            </div>
            <div className={cs.inp}>
                <label>Новый пароль</label>
                <input {...register("password")}  type="password" placeholder="Пароль"/>
            </div>
            <button className={cs.but}>Сохранить</button>
        </form>}
        </>
    )
};

export default Authorization;