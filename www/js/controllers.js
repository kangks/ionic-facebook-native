angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  facebookConnectPlugin.api('/me/?fields=first_name,last_name,email,picture,gender',
    [],
    function (result) {
      $scope.fbResult = result;
    },
    function (error) {
      alert("Failed: " + error);
    });
});
