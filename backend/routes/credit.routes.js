const Router = require('express');
const router = new Router();
const creditController = require('../controller/credit.controller');
const authMiddleware = require('../middlewaree/authMiddleware');

router.post('/add', creditController.AddCredit);
router.get('/get',authMiddleware, creditController.GetCredit);
router.post('/delete', creditController.DeleteCredit);
router.post('/accomplishment', creditController.UpdateAccomplishmentGetCredit);



module.exports = router;