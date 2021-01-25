const Item = require('../models/item');

exports.getItems = async (req, res) => {
	try {
		const items = await Item.find({});

		res.render('item/list-items', {
			itemList: items,
			pageTitle: 'All Items',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getAddItem = (req, res) => {
	res.render('item/add-item', {
		pageTitle: 'Add Item',
		editing: false,
		validInput: true,
	});
};

exports.postAddItem = async (req, res) => {
	const item = new Item(req.body);

	try {
		await item.save();
		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};

exports.getItemInfo = async (req, res) => {
	const itemId = req.params.id;

	try {
		const item = await Item.findById(itemId);

		res.render('item/item-info', {
			pageTitle: 'Item Info',
			item: item,
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getEditItem = async (req, res) => {
	const itemId = req.params.id;

	try {
		const item = await Item.findById(itemId);

		res.render('item/edit-item', {
			editing: true,
			item,
			pageTitle: 'Update Item',
			validInput: true,
		});
	} catch (err) {
		console.log(err);
	}
};

exports.postEditItem = async (req, res) => {
	const itemId = req.body.itemId;

	try {
		await Item.findByIdAndUpdate(itemId, req.body, {
			new: true,
		});
		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};

exports.getDeleteItem = async (req, res) => {
	const itemId = req.params.id;

	try {
		const item = await Item.findById(itemId);

		res.render('item/delete-item', {
			item: item,
			pageTitle: 'Delete Item',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.postDeleteItem = async (req, res) => {
	const itemToDelete = req.body.itemId;

	try {
		await Item.findByIdAndDelete(itemToDelete);

		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};
