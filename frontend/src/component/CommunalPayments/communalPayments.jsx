import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import cs from './communalPayments.module.css';


const CommunalPayments = (props) => { 

    useEffect( ()=>{
        console.log("hello")
        //props.getCommunalPayments();
    },[])

    return(
        <div>
            <div><h1>Октябрь</h1></div>
            <table  className={cs.table}>
                        <tr>
                            <th className={cs.td_name}></th>
                            <th className={cs.td_name}>Предыдущие показания</th>
                            <th className={cs.td}>Настоящие показания</th>
                            <th className={cs.td}>Сумма</th>
                        </tr>
                
                        <tr >
                            <th className={cs.td_name}>
                                <div>Эл.энергия</div>
                            </th>
                            <td className={cs.td_name}>
                                <div>{props.communalPayments.communalPayments.electricity.initial_postings}</div>
                            </td>
                            <td className={cs.tdAmount}>
                                <div>{props.communalPayments.communalPayments.electricity.recent_readings}</div>
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
                                <div>{props.communalPayments.communalPayments.water.initial_postings}</div>
                            </td>
                            <td className={cs.tdAmount}>
                                <div>{props.communalPayments.communalPayments.water.recent_readings}</div>
                            </td> 
                            <td className={cs.tdAmount}>
                                <div>{props.communalPayments.communalPayments.water.amount}</div>
                            </td>                                 
                        </tr> 
                </table>
                <div className={cs.addCredit}>
                    <Link className={cs.link} to="/add/expenses" > Сохранить </Link>
                </div>
        </div>
    )
}

export default CommunalPayments;