const Item = require('../models/item');

exports.getCategories = async (req, res) => {
	const items = await Item.find().distinct('category');

	try {
		res.render('category/list-categories', {
			itemList: items,
			pageTitle: 'Categories',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getBooksFromCategory = async (req, res) => {
	const bookLang = req.params.lang;

	try {
		const items = await Item.find({ category: bookLang });

		res.render('category/list-books', {
			itemList: items,
			bookLang,
			pageTitle: `${bookLang} Books`,
		});
	} catch (err) {
		console.log(err);
	}
};
