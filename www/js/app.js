// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter',
  [
    'ionic',
    'starter.controllers',
    'starter.constants',
    'starter.factories',
    'user.controllers',
    'user.services'
  ]
  )

  .run(function ($ionicPlatform, $rootScope, $state, API) {

    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {

        //debugger;
        console.log('$stateChangeError ' + error && (error.debug || error.message || error));

        // if the error is "noUser" the go to login state
        if (error && error.error === "noUser") {
          event.preventDefault();
          $state.go('auth-login', {});
        }
      });

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }

      if (!ionic.Platform.isWebView()) {
        facebookConnectPlugin.browserInit(API.facebookAppId);
        // version is optional. It refers to the version of API you may want to use.
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, API) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      .state('auth-login', {
        url: "/login",
        templateUrl: "templates/user/login.html",
        controller: "UserController"
      })

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        },
        resolve: {
          user: function (UserService) {
            var value = UserService.init();
            return value;
          }
        }
      })

      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'UserController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

  });
