var app = angular.module("app", []);
app.controller("PiController", function($scope) {
		$scope.typed = 'say something';
		// $scope.typedArr = function(){
		// 	var typedArr = [];
		// 	for (var i=0; i<$scope.typed.length; i++) {
		// 		// console.log($scope.typed[i]);
		// 		typedArr.push($scope.typed[i]);
		// 		// console.log(typedArr);
		// 	}
		// 	$scope.typedArr.str = typedArr;
		// };
		// $scope.typedArr();
		$scope.lengths = [
			{actual:1},
			{actual:2},
			{actual:3},
			{actual:4},
			{actual:5},
			{actual:6},
		];
		$scope.selectedLength = $scope.lengths[0];
	});

app.controller("TipController", function($scope) {
	$scope.cost = 40;
	$scope.tipOptions = [
		{str:'10%', perc:0.1},
		{str:'15%', perc:0.15},
		{str:'20%', perc:0.2}
	];
	$scope.selectedTip = $scope.tipOptions[0];
});

app.controller("MadController", function($scope) {
	$scope.a = '';
	$scope.b = '';
	$scope.c = '';
	$scope.d = '';
	$scope.e = '';
	$scope.f = '';
	$scope.g = '';
});