const { body, validationResult } = require('express-validator');

const itemValidationRules = () => {
	return [
		body('title').isLength({ min: 5, max: 50 }).withMessage('Title must be at least 5 characters long'),
		body('quantity').isInt({ min: 1, max: 300 }).withMessage('Num of Copies must be at least 1'),
		body('author').isLength({ min: 5, max: 50 }).withMessage('Author must be at least 5 characters long'),
		body('category').isLength({ min: 3, max: 20 }).withMessage('Language input must be at least 3 characters long'),
		body('ISBN').isLength({ min: 13, max: 13 }).withMessage('Input must be 13 digits long'),
		body('branch').isLength({ min: 5, max: 50 }).withMessage('Branch name must be at least 5 characters long'),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

	// return res.status(422).json({
	// 	errors: extractedErrors,
	// });

	// console.log(errors.array());

	return res.render('item/add-item', {
		pageTitle: 'Add Item',
		editing: false,
		validInput: false,
		errors: errors.array(),
	});
};

module.exports = {
	itemValidationRules,
	validate,
};
