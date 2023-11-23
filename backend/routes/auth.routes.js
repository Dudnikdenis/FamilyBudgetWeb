const Router = require('express');
const router = new Router();
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middlewaree/authMiddleware');

router.get('/userlist',authMiddleware, authController.Get);
router.post('/login', authController.Login);
router.post('/update', authController.UpdateUser);
router.post('/registration', authController.Registration);




module.exports = router;