/**
 * Created by kskang on 4/10/15.
 */
angular.module('starter.factories',[])
  .factory("PopupFactory", function ($ionicPopup, $timeout) {
    function showCreatedPopup($scope, message) {
      // Start the timer first
      $timeout(function () {
        createdPopup.close(); //close the popup after 3 seconds for some reason
      }, 1000);
      var createdPopup = $ionicPopup.show({
        title: message,
        scope: $scope
      });
    };

    function showErrorPopup(err){
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: err
      });
    };

    return {
      showInfoTimeoutPopup: showCreatedPopup,
      showErrorPopup: showErrorPopup
    };
  })
  .factory('Cache', function($cacheFactory) {
    var cache = $cacheFactory('cache', {
      capacity: 5 // optional - turns the cache into LRU cache
    });
    return cache;
  });
