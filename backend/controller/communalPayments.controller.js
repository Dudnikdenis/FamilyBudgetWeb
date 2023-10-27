
const db = require('../db')


class communalPaymentsController {

    async GetcommunalPayments(req,res){

        const month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        const data = new Date();
        const electricity_rate = await db.query('select (rate) from communal_rate where id = 1;' );
        const water_rate = await db.query('select (rate) from communal_rate where id = 2;' );
        const starting_indication_electricity = await db.query(`select * from electricity where date_indications = ${data.getMonth()-1};`);
        const starting_indication_water = await db.query(`select * from water where date_indications = ${data.getMonth()-1};`);
        const final_indications_electricity = await db.query(`select * from electricity where date_indications = (SELECT MAX(date_indications) FROM electricity);`);
        const final_indications_water = await db.query(`select * from water where date_indications = (SELECT MAX(date_indications) FROM water);`);
        
        // убрать повторение. сделать дополнительный метод

        let result;
        if((final_indications_water.rows[0].date_indications===data.getMonth()+1)){
            result ={
                electricity: {
                    starting_indication:starting_indication_electricity.rows[0].indications,
                    date_starting_indication: month[starting_indication_electricity.rows[0].date_indications-1],
                    final_indications:final_indications_electricity.rows[0].indications,
                    rate: electricity_rate.rows[0].rate,
                    amount:(final_indications_electricity.rows[0].indications-starting_indication_electricity.rows[0].indications)*electricity_rate.rows[0].rate
                },
                water:{
                    starting_indication:starting_indication_water.rows[0].indications,
                    date_starting_indication:  month[starting_indication_water.rows[0].date_indications-1],  
                    final_indications:final_indications_water.rows[0].indications,
                    rate: water_rate.rows[0].rate,
                    amount:(final_indications_water.rows[0].indications-starting_indication_water.rows[0].indications)*water_rate.rows[0].rate
                }
    
            };
        }

        else{
            result ={
                electricity: {
                    starting_indication:starting_indication_electricity.rows[0].indications,
                    date_starting_indication: month[starting_indication_electricity.rows[0].date_indications-1],// доделать подсчет суммы и вывод показаний текущего месяца если показания уже ввели
                    final_indications:0,
                    rate: electricity_rate.rows[0].rate,
                    amount:0
                },
                water:{
                    starting_indication:starting_indication_water.rows[0].indications,
                    date_starting_indication:  month[starting_indication_water.rows[0].date_indications-1],  //тоже самое
                    final_indications:0,
                    rate: water_rate.rows[0].rate,
                    amount:0
                }
    
            };
        }

        
        
        return res.json(result)        
    };

    async AddcommunalPayments(req,res){

        const now_date = new Date();
        const date = await db.query(`SELECT MAX(date_indications) FROM ${req.body.communal};`);
        if(date.rows[0].max!=now_date.getMonth()+1){
            await db.query(`insert into ${req.body.communal}(indications, date_indications) values (${req.body.indications}, ${now_date.getMonth()+1});`);
            await db.query(`UPDATE communal_rate set rate = ${req.body.rate} where communal = '${req.body.communal}';`);
        }
        else{
            return res = "Показания уже есть.";
        }
    }; 


}


module.exports = new communalPaymentsController();