angular.module('user.services', [])
  .service('UserService',
    function ($q) {

      currentUser = null;

      return {

        /**
         *
         * @returns {*}
         */
        init: function () {

          if (currentUser) {
            return $q.when(currentUser);
          } else {
            return $q.reject({error: "noUser"});
          }
        },
        facebookLogin: function () {
          var deferred = $q.defer();

          fbScope = ['public_profile,email'];

          facebookConnectPlugin.login(fbScope,
            function (success) {
              if (success.status === 'connected') {
                console.log('Facebook login succeeded');
                currentUser = success;
                deferred.resolve(success);
              } else {
                deferred.reject('Facebook login failed');
              }
            },
            function (err) {
              deferred.reject('Facebook login failed: ' + err);
            });
          return deferred.promise;
        },

        /**
         *
         * @returns {Promise}
         */
        logout: function (_callback) {
          var deferred = $q.defer();
          facebookConnectPlugin.logout(
            function(success){
              deferred.resolve(success);
            },
            function(err){
              deferred.reject('Facebook logout error: ' + err);
            }
          );

          return deferred.promise;
        }
      }
    })
;
