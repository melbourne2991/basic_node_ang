var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Define User Schema
var userSchema = new mongoose.Schema({
	name: String,
	local: {
		email: String,
		password: String
	},
	events: Array
});

userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, 8);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);