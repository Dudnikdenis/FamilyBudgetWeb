
const db = require('../db')


class creditController {
    async AddCredit(req,res){
         
        const result = await db.query( `insert into credit(nameBank, datePayment, amount) values ('${req.body.nameBank}', ${req.body.datePayment}, '${req.body.amount}');`); 
        //console.log(result);
        if(result.rowCount===1){
            console.log("Записался кредит");
            return res.sendStatus(200);
        } 
    }

    async GetCredit(req,res){
        const result = await db.query('SELECT * FROM public.credit')
        //console.log(result.rows);
        return res.json(result.rows)
        
    }

    async UpdateAccomplishmentGetCredit(req,res){
        const result = await db.query( `UPDATE credit SET accomplishment = ${req.body.accomplishment} WHERE credit_id = ${req.body.credit_id}; `);
        if(result.rowCount===1){
            console.log("Выполнено");
            return res.sendStatus(200);
        } 
    }

    async UpdateCredit(req,res){
        
    }

    async DeleteCredit(req,res){
        console.log(`DELETE FROM credit WHERE credit_id=${req.body.credit_id};`);
        const result = await db.query( `DELETE FROM credit WHERE credit_id=${req.body.credit_id};`); 
        //console.log(result);
        if(result.rowCount===1){
            console.log("удалился кредит");
            return res.sendStatus(200);
        } 
    }
}


module.exports = new creditController();