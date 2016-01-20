#AngularJS
*started 2016-01-19*

[curriculum repo](https://github.com/gSchool/angular-curriculum)

[thinkster's better way](https://thinkster.io/a-better-way-to-learn-angularjs) notes in notebook

[Tyler's frontend framework slides](http://slides.com/tylerbettilyon/frontendframeworks) do not use minified angular for dev!

[two-way data binding assignment](https://github.com/jontejada/raw-two-way-data-binding) complete. #5 is buggy.

[Tyler's angular intro slides](http://slides.com/tylerbettilyon/intro-to-angular)

- being rebuilt for v2
- scope variable is the view model. controller has more. 
- prefers to make modular

- `ng=app` covers what you want angular to control. usually in `<html>` or `<body>`. instantiates app. 
	- in JS, `var application = angular.module("myapp", [])`
- include CDN and own app
- `ng-controller="HelloController` is manager. Typically controls one state. Contorllers talk to each other, transisiton between
	- in JS:

```
application.controller("HelloController", function($scope) {
	$scope.hello = {};
	$scope.hello.title = "World";
```

##questions:
- mobile -- data transfer & processing demands 

