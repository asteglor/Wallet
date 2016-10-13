angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  
})

.controller('EnrollCtrl', function($scope) {
  $scope.settings = {
    name:"Remeber Password",
    enableRemember: true
  };
  
})


.controller('PassCtrl', function($scope) {
  $scope.settings = {
    name:"Remeber Password",
    enableRemember: true
  };
});
