
const db = require('../db')


class creditController {

    async GetCredit(req,res){

        const total_amount = await db.query('select * from total_amount_of_credits where id = 1;' );
        const credit = await db.query('SELECT * FROM public.credit');
        const result ={
            credit: credit.rows,
            ferstNumberAmount: total_amount.rows[0].ferstnumberamount,
            secondNumberAmount: total_amount.rows[0].secondnumberamount,
            totalAmount: total_amount.rows[0].totalamount
        };
        return res.json(result)
        
    };

    async AddCredit(req,res){
        const total_amount = await db.query('select * from total_amount_of_credits where id = 1;' );
        const result = await db.query( `insert into credit(nameBank, datePayment, amount) values ('${req.body.nameBank}', ${req.body.datePayment}, '${req.body.amount}');`); 
        if(req.body.datePayment<=13){
            let ferst = Number(req.body.amount)+Number(total_amount.rows[0].ferstnumberamount);
            await db.query( `UPDATE total_amount_of_credits SET ferstNumberAmount = ${ferst} WHERE id = 1;`);// надо убрать повторение
        }
        else{
            let result = Number(req.body.amount)+Number(total_amount.rows[0].secondnumberamount);
            await db.query( `UPDATE total_amount_of_credits SET secondNumberAmount = ${result} WHERE id = 1;`);
        }

        let total = Number(req.body.amount)+Number(total_amount.rows[0].totalamount);
            await db.query( `UPDATE total_amount_of_credits SET totalAmount = ${total} WHERE id = 1;`);

        if(result.rowCount===1){
            return res.sendStatus(200);
        } 
    };    

    async UpdateAccomplishmentGetCredit(req,res){
        const result = await db.query( `UPDATE credit SET accomplishment = ${req.body.accomplishment} WHERE credit_id = ${req.body.credit_id}; `);
        if(result.rowCount===1){
            return res.sendStatus(200);
        } 
    };

    async DeleteCredit(req,res){
        const credit = await db.query( `select * FROM credit WHERE credit_id=${req.body.credit_id};`);
        const total_amount = await db.query('select * from total_amount_of_credits where id = 1;' );
        const result = await db.query( `DELETE FROM credit WHERE credit_id=${req.body.credit_id};`); 
        if(credit.rows[0].datepayment<=13){
            let ferst = Number(total_amount.rows[0].ferstnumberamount)-Number(credit.rows[0].amount);
            await db.query( `UPDATE total_amount_of_credits SET ferstNumberAmount = ${ferst} WHERE id = 1;`);// надо убрать повторение
        }
        else{
            let result = Number(total_amount.rows[0].secondnumberamount)-Number(credit.rows[0].amount);
            await db.query( `UPDATE total_amount_of_credits SET secondNumberAmount = ${result} WHERE id = 1;`);
        }

        let total = Number(total_amount.rows[0].totalamount)-Number(credit.rows[0].amount);
            await db.query( `UPDATE total_amount_of_credits SET totalAmount = ${total} WHERE id = 1;`);


        if(result.rowCount===1){
            return res.sendStatus(200);
        } 
    };
}


module.exports = new creditController();