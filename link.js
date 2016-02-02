var app = angular.module('linkApp', [])
	.directive('jtChangeBk', function(){
		return {
			link: function(scope,element,attrs) {
				console.log('in link');
				var oldColor = element.css('background-color');
				element.on('mouseenter', function(event){
					console.log('in event1');
					// element.css('background-color','#A63446');
					element.css({'background-color':'#A63446'}); //alternative to previous line
					element.css({'background-color':'#A63446','border':'10px solid black','width':'210px','height':'50px'}); //alternative to previous line
				});
				element.on('mouseleave', function(event){
					console.log('in event2');
					element.css('background-color',oldColor);
					element.addClass('vistied'); //adds class but css doesn't get passed
					element.html('<h1>left!</h1>');
				});
			}
		};
	});


app.directive('jtCircle', function(){
	return {
		controller: ['$scope', function($scope){
			$scope.sayHi = function(){
				console.log('hey!');
			};
		}],
		template: '<div class="circle">click me</div>',
		link: function(scope, element, attrs) {
			element.on('click', function(){
				scope.sayHi();
				element.css('border','2px solid white'); //this is applied to the <jt-circle> element, not the child circle div
				element.append('<h4>appended!</h4>');
				console.log(element.children()[0]);
				// element.children()[0].css('border','20px solid white'); //TypeError, not a function
			});
		}
	};
});