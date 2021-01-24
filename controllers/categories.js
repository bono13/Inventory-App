const Item = require('../models/item');

exports.getCategories = async (req, res) => {
	const items = await Item.find().distinct('category');
	try {
		res.render('categories/list-categories', {
			itemList: items,
			pageTitle: 'Categories',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getBooksFromCategory = async (req, res) => {
	const bookLang = req.params.lang;
	// console.log(bookLang);
	try {
		const items = await Item.find({ category: bookLang });

		res.render('categories/books-in-category', {
			itemList: items,
			pageTitle: `${bookLang} Books`,
		});
	} catch (err) {
		console.log(err);
	}
};
