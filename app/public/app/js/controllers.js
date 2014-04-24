'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', 'isLoggedIn', '$timeout', function($scope, isLoggedIn, $timeout) {
  	$scope.getLoginState = function() {
  		isLoggedIn.getState(function(result) {

  		});
  	};	
  }])
  .controller('MyCtrl2', [function() {

  }]);
