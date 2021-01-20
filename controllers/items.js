const Item = require('../models/item');

exports.getItems = async (req, res) => {
	try {
		const items = await Item.find({});

		res.render('list-items', {
			itemList: items,
			pageTitle: 'All Items',
			path: '/items',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getAddItem = (req, res) => {
	res.render('add-item', {
		pageTitle: 'Add Item',
		path: '/add-item',
		editing: false,
	});
};

exports.postAddItem = async (req, res) => {
	const item = new Item(req.body);

	try {
		await item.save();
		console.log('Created Item', { item });
		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};

exports.getEditItem = (req, res) => {
	res.render('edit-item', {
		// pageMessage: 'Home Page',
		pageTitle: 'Edit Items',
		path: '/edit-item',
	});
};
