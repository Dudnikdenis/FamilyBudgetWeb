const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middlewaree/authMiddleware');

router.get('/user',authMiddleware, authController.Get);
router.post('/login', authController.Login);
router.post('/registration', authController.Registration);




module.exports = router;