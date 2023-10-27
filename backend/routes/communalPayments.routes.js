const Router = require('express');
const router = new Router();
const communalPaymentsController = require('../controller/communalPayments.controller');

router.post('/add', communalPaymentsController.AddcommunalPayments);
router.get('/get', communalPaymentsController.GetcommunalPayments);




module.exports = router;