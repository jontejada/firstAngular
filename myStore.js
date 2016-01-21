angular.module("app", [])
	.controller("ShoppingController", function($scope) {
		$scope.forSale = [
			{id:1, name:'lamp', price: 2000},
			{id:2, name:'chair', price: 8000},
			{id:3, name:'table', price: 10000},
			{id:4, name:'cup', price: 400},
			{id:5, name:'plate', price: 550},
		];
		$scope.totalCost = 0;
		$scope.cartItems = [];
		var taxRate = 0.18;
		$scope.addItem = function(item) {
			$scope.cartItems.push(item);
			updatePrice();
		};
		$scope.removeItem = function(item) {
			var index = $scope.cartItems.indexOf(item);
			$scope.cartItems.splice(index, 1);
			updatePrice();
		};
		function updatePrice() {
			var sum = 0;
			for (var i=0; i<$scope.cartItems.length; i++) {
				sum += $scope.cartItems[i].price;
			}
			$scope.totalCost = Math.floor(sum + (sum * taxRate));
			console.log($scope.totalCost);
		}

		$scope.shippingMethods = [
			{id:1, name:'ground', price:500},
			{id:2, name:'air', price:2500},
			{id:3, name:'overnight', price:4500}
		];
		$scope.selectedMethod = $scope.shippingMethods[0];



	});