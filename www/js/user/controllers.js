/**
 * beginnings of a controller to login to system
 * here for the purpose of showing how a service might
 * be used in an application
 */
angular.module('user.controllers', [])
  .controller('UserController',
    function ($state, $scope, UserService, PopupFactory) {

      //debugger;

      // ng-model holding values from view/html
      $scope.creds = {
        username: null,
        password: null
      };

      /**
       *
       */
      $scope.doLogoutAction = function () {
        UserService.logout()
          .then(function (_response) {
            // transition to next state
            $state.go('auth-login');
          }, function (_error) {
            PopupFactory.showErrorPopup("error logging in " + _error.debug);
          })
      };

      /**
       *
       */
      $scope.doLoginAction = function () {

        UserService.login($scope.creds.username, $scope.creds.password)
          .then(function (_response) {

            PopupFactory.showInfoTimeoutPopup($scope, 'login success');
            //alert("login success " + _response.attributes.username);

            // transition to next state
            $state.go('member.list');

          }, function (_error) {
            PopupFactory.showErrorPopup("error logging in " + _error.message);
          })
      };


      $scope.facebookLogin = function () {

        console.log("facebookLogin");

        UserService.facebookLogin()
          .then(function (_response) {
            console.log(_response);
            PopupFactory.showInfoTimeoutPopup($scope, 'login success');
            // transition to next state
            $state.go('tab.dash');
          }, function (_error) {
            console.error(_error);
            PopupFactory.showErrorPopup("error logging in " + _error.message);
          })
      };
    })
  .controller('SignUpController',
    function ($state, $scope, UserService) {

      $scope.creds = {};

      /**
       *
       */
      $scope.signUpUser = function () {

        UserService.createUser($scope.creds).then(function (_data) {
          $scope.user = _data;

          PopupFactory.showInfoTimeoutPopup("Success Creating User Account ");

          $state.go('tab.dash', {});

        }, function (_error) {
          PopupFactory.showErrorPopup("Error Creating User Account " + _error.debug)
        });
      }
    });
