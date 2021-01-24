const express = require('express');
const { itemValidationRules, validate } = require('../middleware/validator');
const itemController = require('../controllers/item');

const router = new express.Router();

router.get('/items', itemController.getItems);

router.get('/add-item', itemController.getAddItem);

router.post('/add-item', itemValidationRules(), validate, itemController.postAddItem);

router.get('/items/:id', itemController.getItemInfo);

router.get('/edit-item/:id', itemController.getEditItem);

router.post('/edit-item', itemController.postEditItem);

router.get('/delete-item/:id', itemController.getDeleteItem);

router.post('/delete-item', itemController.postDeleteItem);

module.exports = router;
