'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
	.factory('isLoggedIn', function($http, $q) {
		return {
			getState: function() { 
				return $http.get('/login-state');
			}
		}
	})
 	.value('version', '0.1');
