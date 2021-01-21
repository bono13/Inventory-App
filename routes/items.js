const express = require('express');
const itemControllers = require('../controllers/items');

const router = new express.Router();

router.get('/items', itemControllers.getItems);

router.get('/add-item', itemControllers.getAddItem);

router.post('/add-item', itemControllers.postAddItem);

router.get('/items/:id', itemControllers.getItemInfo);

router.get('/edit-item/:id', itemControllers.getEditItem);

router.post('/edit-item', itemControllers.postEditItem);

router.get('/delete-item/:id', itemControllers.getDeleteItem);

router.post('/delete-item', itemControllers.postDeleteItem);

module.exports = router;
