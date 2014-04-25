module.exports = function(app, passport) {
	app.get('/signup', function(req, res, next) {
		res.render('signup');
	});

	app.post('/signup', 
		passport.authenticate('local-signup', {
			successRedirect: '/profile',
			failureRedirect: '/signup'
		})
	);

	app.get('/login', function(req, res, next) {
		res.render('login');
	});

	app.post('/login', 
		passport.authenticate('local-login', {
			successRedirect: '/',
			failureRedirect: '/signup'
		})
	);

	app.get('/logout', function(req, res, next) {
		req.logout();
		res.redirect('/');
	});

	app.get('/login-state', function(req, res, next) {
		req.user ? res.send({state: true}) : res.send({state: false});
	});

	app.get('/profile', function(req, res, next) {
		req.user ? console.log(req.user) : console.log('no user! :(');
		res.render('profile');
	});
}