const Router = require('express');
const router = new Router();
const creditController = require('../controller/credit.controller');

router.post('/api/add/credit', creditController.AddCredit);
router.get('/get', creditController.GetCredit);
router.delete('/api/deete/credit', creditController.DeleteCredit);




module.exports = router;