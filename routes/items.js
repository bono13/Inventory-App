const express = require('express');
const itemControllers = require('../controllers/items');

const router = new express.Router();

router.get('/items', itemControllers.getItems);

router.get('/add-item', itemControllers.getAddItem);

router.post('/add-item', itemControllers.postAddItem);

router.get('/edit-item', itemControllers.getEditItem);

module.exports = router;
