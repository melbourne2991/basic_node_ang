var mongoose = require('mongoose');

// Define User Schema
var eventSchema = new mongoose.Schema({
	user: Number,
	title: String,
	description: Text,
	location: String,
	start: Date,
	duration: Number,
	private_event: Boolean,
	paid_event: Boolean,
	category: Number
});

module.exports = mongoose.model('Event', eventSchema);