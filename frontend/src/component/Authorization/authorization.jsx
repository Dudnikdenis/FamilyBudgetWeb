import React from "react";
import { useForm } from "react-hook-form";

const Authorization = (props) =>{

    const { register, handleSubmit } = useForm();
    const submit = (dataForm) => {
        console.log(dataForm);
    };
    return(
        <form onSubmit={handleSubmit(submit)}>
            <div >
                <input {...register("name")}  type="text" placeholder="Имя"/>
            </div>
            <div>
                <input {...register("password")}  type="password" placeholder="Пароль"/>
            </div>
            <button>Войти</button>
        </form>
    )
};

export default Authorization;