app.controller('FirstController', function($scope){
	$scope.message = "Hello from FirstController";
});

app.controller('SecondController', function($scope){
	$scope.message = "Hello from SecondController";
});

app.controller('NumbersController', function($scope,$routeParams,$location){
	$scope.number = $routeParams.first;
	// debugger
});

