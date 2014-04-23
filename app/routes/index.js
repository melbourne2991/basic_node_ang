var homeController = require('../controllers/homeController');

module.exports = function(app, passport) {
	app.get('/', homeController.config);

	app.get('/signup', homeController.signupForm);

	app.post('/signup', 
		passport.authenticate('local-signup', {
			successRedirect: '/profile',
			failureRedirect: '/signup'
		})
	);

	app.get('/login', homeController.loginForm);

	app.post('/login', 
		passport.authenticate('local-login', {
			successRedirect: '/profile',
			failureRedirect: '/signup'
		})
	);

	app.get('/profile', homeController.profile);
	app.get('/logout', homeController.logout);
};
