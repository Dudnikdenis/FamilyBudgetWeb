const Router = require('express');
const router = new Router();
const expensesController = require('../controller/expenses.controller');
const authMiddleware = require('../middlewaree/authMiddleware');

router.post('/add', expensesController.AddExpenses);
router.get('/get', authMiddleware, expensesController.GetExpenses);
router.post('/delete', expensesController.DeleteExpenses);
router.post('/accomplishment', expensesController.UpdateAccomplishmentGetExpenses);





module.exports = router;