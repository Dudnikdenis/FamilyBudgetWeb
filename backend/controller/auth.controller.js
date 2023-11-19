
const db = require('../db')
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require('../config');

const generateAccessToken = (id, user) =>{
    const payload = {
        id,
        user
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"})
}

class authController {

    async Get(req,res){
        try{
            return res.json({message:'получилось!'})

        }
        catch (e) {
            console.log(e);
        }       
    };

    async Registration(req,res){
        try{
            const {username,password} = req.body;
            const candidate = await db.query(`select * from user_prog where name_user = '${username}';`);           
            if(candidate.rows[0]){
                return res.status(400).json({message:'Пользователь уже существует!'})
            }
            else{
                var hashPassword = bcrypt.hashSync(password, 7);
                console.log(hashPassword);
                const newuser = await db.query(`insert into user_prog(name_user, password_user) values ('${username}', '${hashPassword}');`);
                if(newuser){
                    return res.status(200).json({message:'Пользователь зарегистрирован'});
                }
                else{
                    return res.status(400).json({message:'Не сохранилось'});
                }
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).json({massage:'Registration error'});

        } 
    }; 
    async Login(req,res){
        try{
            const {username,password} = req.body;
            const candidate = await db.query(`select * from user_prog where name_user = '${username}';`);
            const checkPassword = bcrypt.compareSync(password, candidate.rows[0].password_user);    
            const token = generateAccessToken(candidate.rows[0].id,candidate.rows[0].name_user);        
            if(checkPassword){                
                return res.json({token})
                
            }
            else{
                console.log(checkPassword);
                return res.status(400).json({message:"Не входи!"})
            }
        }
        catch (e) {
            console.log(e);
            res.status(400).json({massage:'login error'});
        } 
    }; 


    
}


module.exports = new authController();