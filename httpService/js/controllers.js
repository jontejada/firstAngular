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

	$http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(data){
		$scope.chat = data;
	});

	$http.get('https://still-tundra-8387.herokuapp.com/messages').then(function(data){
		$scope.chat = data;
	});

	$scope.message = {};
	$scope.sendChat = function() {
		var postData = {};
		postData.message = $scope.message;
		console.log('postData', postData);
		$http.post('https://still-tundra-8387.herokuapp.com/messages', postData).then(function(data) {
			console.log('suc', data);
			$scope.postReturnData = data;
		}, function(err) {
			console.log('fail', err);
			$scope.postReturnErr = err;
		});
	};
});



// $http.get('/someUrl', config).then(successCallback, errorCallback);
// $http.post('/someUrl', data, config).then(successCallback, errorCallback);
