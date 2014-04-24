'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('isLoggedIn', function($http) {
		return {
			getState: function(cb) {
				$http.get('/login-state').then(cb);
			}
		}
	})
 	.value('version', '0.1');
