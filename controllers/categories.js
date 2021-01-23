const Item = require('../models/item');

exports.getCategories = async (req, res) => {
	// const items = await Item.find({}, 'category');

	const items = await Item.find().distinct('category');
	// function (err, categories) {
	// console.log(categories);
	// });
	// console.log(check);

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
	const Spanish = 'Spanish';
	const English = 'English';
	try {
		const items = await Item.find({ category: English });

		res.render('categories/books-in-category', {
			itemList: items,
			pageTitle: 'Categories',
		});
	} catch (err) {
		console.log(err);
	}
};
