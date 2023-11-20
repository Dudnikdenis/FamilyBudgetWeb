const Router = require('express');
const router = new Router();
const communalPaymentsController = require('../controller/communalPayments.controller');
const authMiddleware = require('../middlewaree/authMiddleware');

router.post('/add', communalPaymentsController.AddcommunalPayments);
router.get('/get', authMiddleware, communalPaymentsController.GetcommunalPayments);




module.exports = router;