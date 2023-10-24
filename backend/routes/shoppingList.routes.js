const Router = require('express');
const router = new Router();
const shoppingListController = require('../controller/shoppingList.controller');

router.post('/add', shoppingListController.AddShoppingList);
router.get('/get', shoppingListController.GetShoppingList);
router.post('/delete', shoppingListController.DeleteShoppingList);
router.get('/delete/total', shoppingListController.DeleteShoppingListTotal);
router.post('/accomplishment', shoppingListController.UpdateAccomplishmentShoppingList);




module.exports = router;