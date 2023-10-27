
const db = require('../db')


class communalPaymentsController {

    async GetcommunalPayments(req,res){

        const month = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
        const electricity_data = new Date();
        const electricity_rate = await db.query('select (rate) from communal_rate where id = 1;' );
        const water_rate = await db.query('select (rate) from communal_rate where id = 2;' );
        const electricity = await db.query(`select * from electricity where date_indications = ${electricity_data.getMonth()};`);
        const water = await db.query(`select * from water where date_indications = ${electricity_data.getMonth()};`);

        
        const result ={
            electricity: {
                starting_indication:electricity.rows[0].indications,
                date_starting_indication: month[electricity.rows[0].date_indications-1],// доделать подсчет суммы и вывод показаний текущего месяца если показания уже ввели
                final_indications:0,
                rate: electricity_rate.rows[0].rate,
                amount:0
            },
            water:{
                starting_indication:water.rows[0].indications,
                date_starting_indication:  month[water.rows[0].date_indications-1],  //тоже самое
                final_indications:0,
                rate: water_rate.rows[0].rate,
                amount:0
            }

        };
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