const Router = require('express');
const router = new Router();
const expensesController = require('../controller/expenses.controller');

router.post('/api/add/credit', expensesController.AddExpenses);
router.get('/get', expensesController.GetExpenses);
router.delete('/api/deete/credit', expensesController.DeleteExpenses);




module.exports = router;