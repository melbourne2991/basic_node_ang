var mongoose = require('mongoose');

var User = require('../models/user');

exports.config = function(req, res, next) {
	res.render('index');
};

exports.loginForm = function(req, res, next) {
	res.render('login');
};

exports.signupForm = function(req, res, next) {
	res.render('signup');
};

exports.profile = function(req, res, next) {
	req.user ? console.log(req.user) : console.log('no user! :(');
	res.render('profile');
};

exports.logout = function(req, res, next) {
	req.logout();
	res.render('profile');
};