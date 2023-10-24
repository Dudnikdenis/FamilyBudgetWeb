
const db = require('../db')


class expensesController {
    async AddExpenses(req,res){
        
        const result = await db.query( `insert into expenses(name_expenses, amount) values ('${req.body.nameExpenses}', ${req.body.amount}); `);
        if(result.rowCount===1){
            console.log("Записался расход");
            return res.sendStatus(200);
        } 
        
    }

    async GetExpenses(req,res){
        const result = await db.query('SELECT * FROM public.expenses')
        return res.json(result.rows)
        
    }

    async UpdateAccomplishmentGetExpenses(req,res){
        const result = await db.query( `UPDATE expenses SET accomplishment = ${req.body.accomplishment} WHERE expenses_id = ${req.body.expenses_id}; `);
        if(result.rowCount===1){
            console.log("Выполнено");
            return res.sendStatus(200);
        } 
    }

    async UpdateExpenses(req,res){
        
    }

    async DeleteExpenses(req,res){
        const result = await db.query( `DELETE FROM expenses WHERE expenses_id=${req.body.expenses_id};`); 
        //console.log(result);
        if(result.rowCount===1){
            console.log("удалился расход");
            return res.sendStatus(200);
        } 
    }
}


module.exports = new expensesController();