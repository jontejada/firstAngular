#AngularJS
*started 2016-01-19*

##[docs](https://docs.angularjs.org/api)

##[curriculum repo](https://github.com/gSchool/angular-curriculum)

##[thinkster's better way](https://thinkster.io/a-better-way-to-learn-angularjs) mostly links. notes in notebook.

###[conceptucal overview](https://docs.angularjs.org/guide/concepts)

####scope
- context where **model** is stored so **controllers**, **directives** and **expressions** can access it

####filter
- format value of an **expression** for display to user

####view
- what the user sees
- the DOM

####[data binding](https://docs.angularjs.org/guide/databindingtw)
- 2-way data sync between **model** and **view**
- changes to JS module automatically update the DOM. explicit refresh is not required 

![data binding image](https://docs.angularjs.org/img/Two_Way_Data_Binding.png)

####controller
- biz logic behind views
- **controller** constructor fucntion in JS file

####dependency injection
- ceeates and writes objects and functions

####injector
- **dependency injection** container

####module
- container for different parts of an app, including **controllers**, **services**, **filters**, **directives** that config the injector

####service
- reusable biz logic independent of **views**

####[template]( https://docs.angularjs.org/guide/templates)
- HTML with additional markup

####compiler
- passes **template** and instantiates **directives** and **expressions**

####[directive](https://docs.angularjs.org/guide/directive)
- extend HTML with custom attributes and elements
- e.g. `ng-app` attr is linked to a dir that auto initializes app
- *THE ONLY PLACE* app should access the DOM
- marker on a DOM element (such as attr, element name comment or CSS class) that tell the **compiler** to attach specific behavior to that DOM element or transform it and it's children .

####expression
- access variables and functions from the **scope**
- JS-like code snippets
- mainly in interpolation bindings `{{ }}`
- also in direct attr, e.g. `ng-click="somefn()`

####model
- data shown to user in the **view**
- and with which the user interacts

##[Tyler's frontend framework slides](http://slides.com/tylerbettilyon/frontendframeworks)
- do not use minified angular for dev!

##[two-way data binding assignment](https://github.com/jontejada/raw-two-way-data-binding)
- complete. 5 is buggy. 5soln added.

##my questions:
- mobile -- data transfer & processing demands 

##[Tyler's angular intro slides](http://slides.com/tylerbettilyon/intro-to-angular)

- being rebuilt for v2
- scope variable is the view model. controller has more. 
- prefers to make modular

- `ng=app` covers what you want angular to control. usually in `<html>` or `<body>`. instantiates app. 
	- in JS, `var application = angular.module("myapp", [])`
- include CDN and own app
- `ng-controller="HelloController` is manager. Typically controls one state. Contorllers talk to each other, transisiton between
	- in JS:

```javascript
application.controller("HelloController", function($scope) {
	$scope.hello = {};
	$scope.hello.title = "World";
```

[style guide](https://github.com/johnpapa/angular-styleguide)

##work on curriculum

###[`ngApp`](https://docs.angularjs.org/api/ng/directive/ngApp)
- auto-bootstraps the app in designated root element
- one per HTML doc (almost always)
- module can be specified as the app's root module
	- will be loaded into the $injector upon bootstrapping
	- can have dependencies on other modules
	- see `angular.module`

[thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542) on stackoverflow


