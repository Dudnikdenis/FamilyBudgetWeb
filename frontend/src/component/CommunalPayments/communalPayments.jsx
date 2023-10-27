import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import cs from './communalPayments.module.css';


const CommunalPayments = (props) => { 

    useEffect( ()=>{
        props.getCommunalPayments();
    },[])

    const { register, handleSubmit } = useForm({
        defaultValues:{
            electricity_indications: props.communalPayments.communalPayments.electricity.final_indications,
            electricity_rate: props.communalPayments.communalPayments.electricity.rate,
            water_indications: props.communalPayments.communalPayments.water.final_indications,
            water_rate: props.communalPayments.communalPayments.water.rate

        }
    });

    const submit = (formData) => {
        if(formData.electricity_indications&&formData.electricity_rate){
            const indication = {
                communal: "electricity",
                indications: formData.electricity_indications,
                rate: formData.electricity_rate
            }
            props.Records_indications(indication);
        };
        if(formData.water_indications&&formData.water_rate){
            const indication = {
                communal: "water",
                indications: formData.water_indications,
                rate: formData.water_rate
            }
            props.Records_indications(indication );
        };
    }

    return(
        <div>
            <div><h1>Октябрь</h1></div>
            <form onSubmit={handleSubmit(submit)}>
            <table  className={cs.table}>
                        <thead>
                        <tr>
                            <th className={cs.td_name}></th>
                            <th className={cs.td_name}>Предыдущие показания</th>
                            <th className={cs.td_name}>Дата</th>
                            <th className={cs.td}>Настоящие показания</th>
                            <th className={cs.td}>Тариф</th>
                            <th className={cs.td}>Сумма</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr >
                            <th className={cs.td_name}>
                                <div>Эл.энергия</div>
                            </th>
                            <td className={cs.td_name}>
                                <div>{props.communalPayments.communalPayments.electricity.starting_indication}</div>
                            </td>
                            <td className={cs.td_name}>
                                <div>{props.communalPayments.communalPayments.electricity.date_starting_indication}</div> 
                            </td>
                            <td className={cs.tdAmount}>
                                <input placeholder={props.communalPayments.communalPayments.electricity.final_indications} {...register("electricity_indications")} type="text"/>
                            </td>
                            <td className={cs.tdAmount}>
                                <input placeholder={props.communalPayments.communalPayments.electricity.rate} {...register("electricity_rate")} type="text"/>
                            </td> 
                            <td className={cs.tdAmount}>
                                <div>{props.communalPayments.communalPayments.electricity.amount}</div>
                            </td>                                 
                        </tr> 
                        <tr >
                        <th className={cs.td_name}>
                                <div>Вода</div>
                            </th>
                            <td className={cs.td_name}>
                                <div>{props.communalPayments.communalPayments.water.starting_indication}</div>
                            </td>
                            <td className={cs.td_name}>
                                <div>{props.communalPayments.communalPayments.water.date_starting_indication}</div>
                            </td>
                            <td className={cs.tdAmount}>
                                <input placeholder={props.communalPayments.communalPayments.water.final_indications} {...register("water_indications")} type="text"/>
                            </td> 
                            <td className={cs.tdAmount}>
                                <input placeholder={props.communalPayments.communalPayments.water.rate} {...register("water_rate")} type="text"/>
                            </td> 
                            <td className={cs.tdAmount}>
                                <div>{props.communalPayments.communalPayments.water.amount}</div>
                            </td>                                 
                        </tr> 
                        </tbody>
                </table>
                <button>save</button>
                </form>
        </div>
    )
}

export default CommunalPayments;