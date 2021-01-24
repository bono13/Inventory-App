const express = require('express');
const categoryController = require('../controllers/category');

const router = new express.Router();

router.get('/categories', categoryController.getCategories);

router.get('/categories/:lang', categoryController.getBooksFromCategory);

module.exports = router;
