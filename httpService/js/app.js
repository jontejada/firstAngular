var app = angular.module('httpApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		// .when('/', {
		// 	templateUrl: "templates/first.html",
		// 	controller: "FirstController"
		// })
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
		.otherwise({
			redirectTo: "/"
			// templateUrl: "templates/first.html",
			// controller: "FirstController"

		});
});