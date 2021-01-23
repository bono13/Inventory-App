const express = require('express');
const categoryControllers = require('../controllers/categories');

const router = new express.Router();

router.get('/categories', categoryControllers.getCategories);

router.get('/categories/books', categoryControllers.getBooksFromCategory)

// router.get('/add-item', itemControllers.getAddItem);

// router.post('/add-item', itemControllers.postAddItem);

// router.get('/items/:id', itemControllers.getItemInfo);

// router.get('/edit-item/:id', itemControllers.getEditItem);

// router.post('/edit-item', itemControllers.postEditItem);

// router.get('/delete-item/:id', itemControllers.getDeleteItem);

// router.post('/delete-item', itemControllers.postDeleteItem);

module.exports = router;