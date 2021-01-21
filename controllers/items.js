const Item = require('../models/item');

exports.getItems = async (req, res) => {
	try {
		const items = await Item.find({});

		res.render('list-items', {
			itemList: items,
			pageTitle: 'All Items',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getAddItem = (req, res) => {
	res.render('add-item', {
		pageTitle: 'Add Item',
		editing: false,
	});
};

exports.postAddItem = async (req, res) => {
	const item = new Item(req.body);

	try {
		await item.save();
		// console.log('Created Item', { item });
		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};

exports.getItemInfo = async (req, res) => {
	const itemId = req.params.id;

	try {
		const item = await Item.findById(itemId);

		res.render('item-info', {
			pageTitle: 'Item Info',
			item: item,
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getEditItem = async (req, res) => {
	const itemId = req.params.id; // router parameters in this case our :id

	try {
		const item = await Item.findById(itemId);

		res.render('edit-item', {
			editing: true,
			item: item,
			pageTitle: 'Update Item',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.postEditItem = async (req, res) => {
	const itemId = req.body.itemId; // body from form data

	try {
		await Item.findByIdAndUpdate(itemId, req.body, {
			new: true,
		});
		// console.log('ITEM UPDATED');
		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};

exports.getDeleteItem = async (req, res) => {
	const itemId = req.params.id;

	try {
		const item = await Item.findById(itemId);

		res.render('delete-item', {
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

		// console.log('ITEM DELETED');

		res.redirect('/items');
	} catch (err) {
		console.log(err);
	}
};
