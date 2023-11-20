const jwt = require('jsonwebtoken');
const {secret} = require('../config.js')
module.exports = function (req,res,next) {
    if(req.method === "OPTIONS"){
        next();
    }

    try{
        const token = req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(400).json({message:"Пользователь не авторизован, нет токена!"})
        }
        const decodeDate = jwt.verify(token, secret);
        req.user = decodeDate;
        next();
    }
    catch(e){
        return res.status(400).json({message:"Пользователь не авторизован!"})
    }
}