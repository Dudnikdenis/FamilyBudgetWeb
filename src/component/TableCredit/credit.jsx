import React, {useState} from "react";
import cs from './credit.module.css'


const Credit = (props) => { 

    let [nameB, setNameb] = useState("");
    let [dateB, setDateb] = useState("");
    let [amountB, setAmountb] = useState("");

    const onNewCreditNameChanget = (e) => {
        setNameb(e.target.value)
    }

    const onNewCreditDateChanget = (e) => {
        setDateb(e.target.value)
    }

    const onNewCreditAmountChanget = (e) => {
        setAmountb(e.target.value)
    }

    const onSubmitChanget = () => {
        
        props.AddCreditCreator({id:props.credit.credit.length+1, nameBank:nameB, datePayment: dateB, amount: amountB})
    }

    const onNewNmaeBankChannge = (e, id) =>{
        props.UpdateCreditNameCreator(e.target.value,id) // передача в обработчик событий дополнительных параметров
    }

    const onNewDatePaymentChannge = (e,id) =>{
        //debugger;
        props.UpdateCreditDatePaymentCreator(e.target.value,id) // передача в обработчик событий дополнительных параметров
    }

    const onNewAmountChannge = (e,id) => {
        //debugger;
        props.UpdateCreditAmountCreator(e.target.value,id) // передача в обработчик событий дополнительных параметров
    }
    return(
        <div>
            
                {props.credit.credit.map(m=>
                    <table key={m.id} className={cs.table}>
                        <tr >
                            <td className={cs.td_name}>
                                <input  value={m.nameBank} onChange={e => onNewNmaeBankChannge(e, m.id)}/>
                            </td>
                            <td className={cs.td}>
                                <input  value={m.datePayment} onChange={e => onNewDatePaymentChannge(e, m.id)}/>
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
           
            <form onSubmit={onSubmitChanget}>
                <input value={nameB} onChange={onNewCreditNameChanget}  placeholder="Название Банка"/>
                <input value={dateB} onChange={onNewCreditDateChanget}  placeholder="Дата"/>
                <input value={amountB} onChange={onNewCreditAmountChanget} placeholder="Сумма"/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Credit;