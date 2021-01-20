const express = require('express');

const router = new express.Router();

router.get('/categories', (req, res) => {
	res.render('categories', {
		// pageMessage: 'Home Page',
		pageTitle: 'Categories',
		path: '/categories',
	});
});

router.get('/edit-category', (req, res) => {
	res.render('edit-categories', {
		// pageMessage: 'Home Page',
		pageTitle: 'Edit Categories',
		path: '/edit-category',
	});
});

module.exports = router;
