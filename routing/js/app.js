var app = angular.module('getPumped', ['ngRoute']); //declare angular application

app.config(function($routeProvider,$locationProvider){ //$routeProvider is the injected dependency.
	//tell what template to load and controller
	$routeProvider
		.when('/', { //when takes two parameters -- string of path and an object
			templateUrl: "partials/first.html",
			controller: "FirstController"
		})
		.when('/second', {
			templateUrl: "partials/second.html",
			controller: "SecondController"
		})
		.when('/numbers/:first', {
			templateUrl: "partials/numbers.html",
			controller: "NumbersController"
		})
		.otherwise({
			redirectTo: '/'
		});
		$locationProvider.html5Mode(true); //getting rid of #
});