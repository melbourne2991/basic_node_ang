'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl3', ['$scope', 'isLoggedIn', '$timeout', function($scope, isLoggedIn, $timeout) {
  		isLoggedIn.getState().then(function(result) {	
  			$scope.displayLogin = result.data.state;
  		});

  		$scope.getLoginState = function() {
  			console.log($scope.displayLogin);
  		}
  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('MyCtrl1', [function() {

  }]);
