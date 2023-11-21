import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import cs from "./authorization.module.css"

const Authorization = (props) =>{

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const submit = (dataForm) => {
        props.postAddToken(dataForm)
        navigate('/credit');
    };
    return(
        <form onSubmit={handleSubmit(submit)}>
            <div className={cs.inp}>
                <input {...register("username")}  type="text" placeholder="Имя"/>
            </div>
            <div className={cs.inp}>
                <input {...register("password")}  type="password" placeholder="Пароль"/>
            </div>
            <button className={cs.but}>Войти</button>
        </form>
    )
};

export default Authorization;