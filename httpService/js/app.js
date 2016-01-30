var app = angular.module('httpApp', ['ngRoute']);

app.config(function($routeProvider){ // took out unused `, $locationProvider` param
	$routeProvider
		.when('/', {
			templateUrl: "templates/first.html",
			controller: "FirstController"
		})
		.when('/second', {
			templateUrl: "templates/second.html",
			controller: "SecondController"
		})
		.when('/http', {
			templateUrl: "templates/dollar-sign-http.html",
			controller: "HttpController"
		})
		.when('/num/:1/:2', {
		// .when('/num', {
			templateUrl: "templates/num.html",
			controller: "NumController"
		})
		.when('/filtering', {
			templateUrl: "templates/filtering.html",
			controller: "FilterController"
		})
		.otherwise({
			redirectTo: "/"
			// templateUrl: "templates/first.html",
			// controller: "FirstController"

		});
});

