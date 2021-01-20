const express = require('express');

const Item = require('../models/item');

const router = new express.Router();

router.get('/items', async (req, res) => {
	try {
		const items = await Item.find({});

		res.render('items', {
			itemList: items,
			pageTitle: 'All Items',
			path: '/items',
		});
	} catch (err) {
		console.log(err);
	}
});

router.get('/add-item', (req, res) => {
	res.render('add-item', {
		pageTitle: 'Add Item',
		path: '/add-item',
		editing: false,
	});
});

router.post('/add-item', async (req, res) => {
	const item = new Item(req.body);

	try {
		await item.save();
		console.log('Created Item');
		res.redirect('/');
	} catch (err) {
		console.log(err);
	}
});

router.get('/edit-item', (req, res) => {
	res.render('edit-item', {
		// pageMessage: 'Home Page',
		pageTitle: 'Edit Items',
		path: '/edit-item',
	});
});

module.exports = router;
