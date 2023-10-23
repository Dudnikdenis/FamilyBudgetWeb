const Router = require('express');
const router = new Router();
const shoppingListController = require('../controller/shoppingList.controller');

router.post('/api/add/credit', shoppingListController.AddShoppingList);
router.get('/get', shoppingListController.GetShoppingList);
router.delete('/api/deete/credit', shoppingListController.DeleteShoppingList);




module.exports = router;