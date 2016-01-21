(function(angular) {
  'use strict';
angular.module('defaultValueSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.data = {
     availableOptions: [
       {id: '1', name: 'Option A'},
       {id: '2', name: 'Option B'},
       {id: '3', name: 'Option C'}
     ], 
     selectedOption: {id: '3', name: 'Option C'} //This sets the default value of the select in the ui
     };
 }]);
})(window.angular);

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/