import React, {useState} from "react";
import { Link } from "react-router-dom";
import cs from './expenses.module.css'


const Expenses = (props) => { 

    let [nameE, setNameE] = useState("");
    let [amountE, setAmountE] = useState("");

    const onNewCreditNameChanget = (e) => {
        setNameE(e.target.value)
    }

    const onNewCreditAmountChanget = (e) => {
        setAmountE(e.target.value)
    }

    // const onSubmit = (dataForm) => {
    //     props.AddCreditCreator({id:props.credit.credit.length+1, nameBank:dataForm.nameBank, datePayment:dataForm.datePayment, amount:dataForm.amount})
    // }

    const onNewNameExpensesChannge = (e, id) =>{
        props.UpdateExpensesNameCreator(e.target.value,id) // передача в обработчик событий дополнительных параметров
    }

    const onNewAmountChannge = (e,id) => {
        //debugger;
        props.UpdateExpensesAmountCreator(e.target.value,id) // передача в обработчик событий дополнительных параметров
    }
    return(
        <div>
            <Link to={"/"}> Главная </Link>
                {props.expenses.expenses.map(m=>
                    <table key={m.id} className={cs.table}>
                        <tr >
                            <td className={cs.td_name}>
                                <input  value={m.nameExpenses} onChange={e => onNewNameExpensesChannge(e, m.id)}/>
                            </td>
                            <td className={cs.td}>
                                <input  value={m.amount} onChange={e => onNewAmountChannge(e, m.id)}/>
                            </td>
                            <td className={cs.td}>
                                <input type="checkbox"></input>
                            </td>                            
                        </tr> 
                    </table>
                    )
                }
           
            
        </div>
    )
}

export default Expenses;