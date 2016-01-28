angular.module('animateApp',['ngAnimate'])
	.controller("BodyController", function($scope) {
		$scope.test = 24;
		$scope.arr = [1,2,3];
		$scope.del = function() {
		// var del = function() {
			// $scope.test = 2000;
			$scope.arr.pop();
		};
	});