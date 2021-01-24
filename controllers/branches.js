const Item = require('../models/item');

exports.getBranches = async (req, res) => {
    const items = await Item.find().distinct('branch');
    
    // console.log(items);
	try {
		res.render('branches/list-branches', {
			itemList: items,
			pageTitle: 'Branches',
		});
	} catch (err) {
		console.log(err);
	}
};

exports.getBranchCategories = async (req, res) => {
	const branchName = req.params.bname;
	// console.log(bookLang);
	try {
        const items = await Item.find({ branch: branchName }).distinct('category');
        

		res.render('branches/list-categories', {
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
	
	// console.log(bookLang);
	try {
		const items = await Item.find({ category: bookLang });

		// console.log(items);

		res.render('branches/list-books', {
			itemList: items,
			bookLang,
			pageTitle: `${bookLang} Books`,
		});
	} catch (err) {
		console.log(err);
	}
};
