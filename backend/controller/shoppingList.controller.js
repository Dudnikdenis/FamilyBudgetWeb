
const db = require('../db')


class shoppingListController {
    async AddShoppingList(req,res){
        const result = await db.query( `insert into shoppingList(product_name, product_quantity) values ('${req.body.product_name}', ${req.body.product_quantity}); `);
        if(result.rowCount===1){
            console.log("Записался продукт");
            return res.sendStatus(200);
        } 
    }

    async UpdateAccomplishmentShoppingList(req,res){
        const result = await db.query( `UPDATE shoppingList SET accomplishment = ${req.body.accomplishment} WHERE shoppingList_id = ${req.body.shoppinglist_id}; `);
        if(result.rowCount===1){
            console.log("Выполнено");
            return res.sendStatus(200);
        } 
    }

    async GetShoppingList(req,res){
        const result = await db.query('SELECT * FROM public.shoppingList ORDER BY shoppingList_id;')
        //console.log(result.rows);
        return res.json(result.rows)
        
    }

    async UpdateShoppingList(req,res){
        
    }

    async DeleteShoppingList(req,res){
        const result = await db.query( `DELETE FROM shoppingList WHERE shoppingList_id=${req.body.shoppingList_id};`); 
        //console.log(result);
        if(result.rowCount===1){
            console.log("удалился продукт");
            return res.sendStatus(200);
        } 
    }

    async DeleteShoppingListTotal(req,res){
        const result = await db.query('DELETE FROM shoppingList;')
        if(result.rowCount===1){
            console.log("очистился список");
            return res.sendStatus(200);
        } 
    }
}


module.exports = new shoppingListController();