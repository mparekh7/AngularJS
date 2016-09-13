var app = angular.module("demoApp", [ 'ngRoute' ]).config(
		function($routeProvider) {
			$routeProvider.when('/about', {
				templateUrl : 'partials/about.html',
				controller : 'AboutCtrl'
			}).when('/experiments', {
				templateUrl : 'partials/experiments.html',
				controller : 'ExperimentsCtrl'
			}).when('/home', {
				templateUrl : 'partials/home.html',
				controller : 'HomeCtrl'
			}).when('/user', {
				templateUrl : 'partials/UserManagement.html',
				controller : 'UserController as userCtrl'
			}).otherwise({
				redirectTo : '/home'
			});
		});