var app = angular.module('eventsApp', []);

app.controller('EventsCon', function($scope, $timeout) {
	$scope.test = 24;
	$scope.pickRandomNumber = function() {
		$scope.test = Math.floor(Math.random() * 10) +1;
	};
	$scope.rev = "rev initial";
	$scope.reverse = function() {
		var out = "";
		for (var i = $scope.rev.length - 1; i >= 0; i--) {
			out += $scope.rev[i];
		}
		$scope.rev = out;
	};

	$scope.p1 = {};
	$scope.p1.score = 0;
	$scope.p2 = {};
	$scope.p2.score = 0;

	$scope.p1score = function () {
		$scope.p1.score++;
	};
	$scope.p2score = function () {
		$scope.p2.score++;
	};

	$scope.reset = function() {
		$scope.p1.score = 0;
		$scope.p2.score = 0;
	};
	$scope.enterCount = 0;

	$scope.colorHistory = [];

	function randomColor() {
	  var x=Math.round(0xffffff * Math.random()).toString(16);
	  var y=(6-x.length);
	  var z="000000";
	  var z1 = z.substring(0,y);
	  var color = "#" + z1 + x;
	  $scope.colorHistory.push(color);
	  return color;
	}

	$scope.colorDiv = '{background-color:white;}';
	$scope.newColor = function () {
		$scope.aColor = randomColor();
	};

	var replaying = false;
	var replayCount = 0;

	$scope.replay = function() {
	  var displayPrevColor = function() {
	  	replayCount++;
	  	$scope.aColor = $scope.colorHistory[$scope.colorHistory.length - replayCount];
	  	if ($scope.colorHistory.length  === replayCount) {
	      replaying = false;
	  	} else {
	  		$timeout(displayPrevColor, 5);
	  	}
	  };

	  if (!replaying) {
	    replaying = true;
	    // $timeout(function() { displayPrevColor(); }, 5000);
	    displayPrevColor();
	  }
	  // displayPrevColor();
	};

});
