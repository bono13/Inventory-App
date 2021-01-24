const Item = require('../models/item');

exports.getBranches = async (req, res) => {
	const items = await Item.find().distinct('branch');

	try {
		res.render('branch/list-branches', {
			itemList: items,
			pageTitle: 'Branches',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getBranchCategories = async (req, res) => {
	const branchName = req.params.bname;

	try {
		const items = await Item.find({ branch: branchName }).distinct('category');

		res.render('branch/list-categories', {
			itemList: items,
			branchName,
			pageTitle: `${branchName} Books`,
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getBooksFromCategory = async (req, res) => {
	const bookLang = req.params.lang;

	try {
		const items = await Item.find({ category: bookLang });

		res.render('branch/list-books', {
			itemList: items,
			bookLang,
			pageTitle: `${bookLang} Books`,
		});
	} catch (err) {
		console.log(err);
	}
};
