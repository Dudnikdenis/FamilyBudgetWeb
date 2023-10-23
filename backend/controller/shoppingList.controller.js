
const db = require('../db')


class shoppingListController {
    async AddShoppingList(req,res){
        
        // const fileName = await db.query('SELECT COUNT(*) FROM public.forwork'); 
        // const urlFile = `http://localhost:3001/images/forWork/${Number(fileName.rows[0].count) + 1}.jpg`;
        // const newPath = `${(path.resolve(__dirname, '..'))}/img/imgForWork/${Number(fileName.rows[0].count) + 1}.jpg`;
        // fs.copyFile(req.files.file.path, newPath, function(err, result){  //rename
        //     if(err){
        //        res.writeHead(500, { 'content-type': 'text/plain' });
        //        res.end('Server error.')
        //        console.log(err)
        //     }
        //     else{
        //         res.writeHead(200, { 'content-type': 'text/plain' });
        //         res.end('File saved.');
        //         console.log("Ok")
        //     }
        // } 
        // ) 
        // await db.query(`INSERT INTO public.forwork(name) values ('${urlFile}');`); 
    }

    async GetShoppingList(req,res){
        const result = await db.query('SELECT * FROM public.shoppingList')
        //console.log(result.rows);
        return res.json(result.rows)
        
    }

    async UpdateShoppingList(req,res){
        
    }

    async DeleteShoppingList(req,res){
        
    }
}


module.exports = new shoppingListController();