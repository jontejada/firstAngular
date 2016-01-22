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
- [built-in filters](https://docs.angularjs.org/api/ng/filter), can also define custom ones

####view
- what the user sees
- the DOM

####[data binding](https://docs.angularjs.org/guide/databinding)
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
- *DO NOT* write conditionals or loops inside an expression
- can use filters

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

##[bitcoin calculator](https://github.com/mjhea0/thinkful-angular)

##work on curriculum

###[`ngApp`](https://docs.angularjs.org/api/ng/directive/ngApp)
- auto-bootstraps the app in designated root element
- one per HTML doc (almost always)
- module can be specified as the app's root module
	- will be loaded into the $injector upon bootstrapping
	- can have dependencies on other modules
	- see `angular.module`

[thinking in Angular](http://stackoverflow.com/questions/14994391/thinking-in-angularjs-if-i-have-a-jquery-background/15012542#15012542) on stackoverflow

###[`ngModel`](https://docs.angularjs.org/api/ng/directive/ngModel)
- binds input, select, textarea or custom form control to a property on the scope

about dirty checling:
>Angular defines a concept of a so called digest cycle. This cycle can be considered as a loop, during which Angular checks if there are any changes to all the variables watched by all the $scopes. So if you have $scope.myVar defined in your controller and this variable was marked for being watched, then you are explicitly telling Angular to monitor the changes on myVar in each iteration of the loop.

[about `$apply()` and `$digest()`](http://www.sitepoint.com/understanding-angulars-apply-digest/)

[digest loop and apply](https://www.ng-book.com/p/The-Digest-Loop-and-apply/)

[ng-newsletter how to get started](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)

[ng-newsletter how to learn](http://www.ng-newsletter.com/posts/how-to-learn-angular.html)

THURSDAY 2016-01-21 stuff 

[Tyler's MVC slides](http://slides.com/tylerbettilyon/angularmvc)
- controller code happens *once*
- add watcher if you want stuff updated or evaluate in `{{}}`
- *do not* have multiple ng-app directives
- $scope variable is the "view model"
- do internal logic, helper functions, api calls, etc. in conroller, then pass into scope

[MVC MVVM](http://codechutney.in/blog/javascript/mvc-and-mvvm-with-angularjs/)

![mvv](http://codechutney.in/blog/wp-content/uploads/2014/12/MVVM-e1419180164773.jpg)

scope (07)

[Tyler's controllers and scope slides](http://slides.com/tylerbettilyon/controllers-scope#/)
- first "rule" -- one controller at a time. mix and match as little as possible.
	- single controller for a single state
	- sharing data between controllers is messy (emit, etc)
	- biggish/beefier controller is better than a few smaller for different states
	- controller is main unit of angular 
- two -- use $scope judiciously
	- may slow things down
	- process stuff out of scope, then on click process into a few strings that are passed to the scope
	- anytime you ng-bind etc it adds watchers and too many watchers === slow code

- be as precise as possible with ng-controller, $scope and $rootScope
	- $rootScope is the global object like window. useful for some things, but use judiciously


#future stuff


FRIDAY 2016-01-22 stuff (going to miss)

built-in directives (05)