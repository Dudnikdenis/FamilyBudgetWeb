
const db = require('../db')

class actualExpensesController {

    async GetActualExpenses(req,res){
        const date = new Date();
        const month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        const actualExpenses = await db.query(`select actual_expenses.amount AS amount, category.category AS category from actual_expenses, category where actual_expenses.category_id = category.id;`); 
        const result = {
            actualExpenses: actualExpenses.rows,
            month: month[date.getMonth()]
        };
        return res.json(result)        
    };

    async GetCategory(req,res){
        const result = await db.query(`select * from category;`);
        return res.json(result.rows)        
    };

    async AddActualExpenses(req,res){

        const date = new Date();
        const reqAmount = await db.query(`select (amount) from actual_expenses where category_id = ${req.body.category} and month = ${date.getMonth()};`);
        if(reqAmount.rows[0]!=null){
            const result = Number(reqAmount.rows[0].amount)+Number(req.body.amount);
            await db.query(`UPDATE actual_expenses SET amount = ${result} WHERE category_id = ${req.body.category} and month = ${date.getMonth()};`);
            return res = "Ok";
        }
        else{
            await db.query(`insert into actual_expenses(amount, month, category_id) values (${req.body.amount}, ${date.getMonth()}, ${req.body.category});`);
            return res = "Ok";
        }
            
    }; 

    async AddCategory(req,res){
        await db.query(`insert into category(category) values ('${req.body.category}');`);        
        return res = "Ok";
}; 


}


module.exports = new actualExpensesController();