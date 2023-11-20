import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";

const Authorization = (props) =>{

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const submit = (dataForm) => {
        props.postAddToken(dataForm)
        navigate('/select');
    };
    return(
        <form onSubmit={handleSubmit(submit)}>
            <div >
                <input {...register("username")}  type="text" placeholder="Имя"/>
            </div>
            <div>
                <input {...register("password")}  type="password" placeholder="Пароль"/>
            </div>
            <button>Войти</button>
        </form>
    )
};

export default Authorization;