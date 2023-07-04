import React, {useState} from "react";
import cs from './credit.module.css'


const Credit = () => {
    const [credit, setCredit] = useState([
        {
            nameBank: "Газпромбанк",
            datePayment: 14,
            amount: 5800},

        {
            nameBank: "Газпромбанк",
            datePayment: 14,
            amount: 7700}
    ])
    console.log(credit);

    return(
        <div>
            <table className={cs.table}>
                {credit.map(e=>
                        <tr>
                            <td className={cs.td_name}>{e.nameBank}</td>
                            <td className={cs.td}>{e.datePayment}</td>
                            <td className={cs.td}>{e.amount}</td>
                            <td className={cs.td}>
                                <input type="checkbox"></input>
                            </td>
                        </tr> 
                    )
                }
                
            </table>
        </div>
    )
}

export default Credit;