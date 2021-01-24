const { body, validationResult } = require('express-validator');

const itemValidationRules = () => {
	return [
		// username must be an email
		body('title').isLength({ min: 5, max: 50 }).withMessage('Input too long or too short'),
		body('quantity').isLength({ min: 1, max: 300 }).withMessage('Value exceeds limit'),
		body('author').isLength({ min: 5, max: 50 }).withMessage('Input too long or too short'),
		body('category').isLength({ min: 3, max: 20 }).withMessage('Input too long or too short '),
		body('ISBN').isLength({ min: 1, max: 13 }).withMessage('Must be between 1 and 13 chars long'),
		body('branch').isLength({ min: 5, max: 50 }).withMessage('Input too long or too short'),
	];
};

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	const extractedErrors = [];
	errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

	return res.status(422).json({
		errors: extractedErrors,
	});
};

module.exports = {
	itemValidationRules,
	validate,
};
