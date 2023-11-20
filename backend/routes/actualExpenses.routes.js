const Router = require('express');
const router = new Router();
const actualExpensesController = require('../controller/actualExpenses.controller');
const authMiddleware = require('../middlewaree/authMiddleware');

router.post('/add', actualExpensesController.AddActualExpenses);
router.get('/get', authMiddleware, actualExpensesController.GetActualExpenses);
router.get('/category', actualExpensesController.GetCategory);
router.post('/addCategory', actualExpensesController.AddCategory);
router.post('/update', actualExpensesController.UpdateActualExpenses);




module.exports = router;