app.controller('SomeController', function($scope,$http) {
	$http.get('https://api.github.com/zen').then(function(data){
		$scope.zenData = data;
	});

	$http.get('https://itunes.apple.com/search?term=jack+johnson').then(function(data){
		$scope.itunes = data;
	},function(err) {
		console.log(err);
		$scope.itunesErr = err;
	});
});



// $http.get('/someUrl', config).then(successCallback, errorCallback);
// $http.post('/someUrl', data, config).then(successCallback, errorCallback);
