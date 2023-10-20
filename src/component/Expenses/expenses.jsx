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
            <table  className={cs.table}>
                        <tr>
                            <th className={cs.td_name}>Название</th>
                            <th className={cs.td}>Сумма</th>
                            <th className={cs.td}>Результат</th>
                        </tr>
                {props.expenses.expenses.map(m=>
                        <tr >
                            <td className={cs.td_name}>
                                <div>{m.nameExpenses}</div>
                            </td>
                            <td className={cs.td}>
                            <div>{m.amount}</div>
                            </td>
                            <td className={cs.td}>
                                <input type="checkbox"></input>
                            </td>                            
                        </tr> 
                    
                    )
                }
                </table>
                <div className={cs.addCredit}>
                    <Link className={cs.link} to="/add/expenses" > Добавить </Link>
                </div>
        </div>
    )
}

export default Expenses;