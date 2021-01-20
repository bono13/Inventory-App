const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	exp_date: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	owner: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Item', itemSchema);
