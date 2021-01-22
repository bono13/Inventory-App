const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	ISBN: {
		type: Number,
		required: true,
	},
}, {
	timestamps: true,
});

module.exports = mongoose.model('Item', itemSchema);
