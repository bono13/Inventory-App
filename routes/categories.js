const express = require('express');
const categoryControllers = require('../controllers/categories');

const router = new express.Router();

router.get('/categories', categoryControllers.getCategories);

router.get('/categories/:lang', categoryControllers.getBooksFromCategory);

module.exports = router;