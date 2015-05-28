# Minimum code - NO SAME CODE
If same code in different modules, we should abstract the code into one common file, other modules call the same code.
After this, if we need change code of this part, we only need change once, and it's better for the guys join later to do something more.

Example, in Ionic framework, it has the service $ionicPopup, and it containers alert/prompt/confirm, and we know these function is very common.
Then we need put the invoke code in to one file as a service, else we need inject $ionicPopup into many js file(like controllers)
Code like below:

    (function () {
      'use strict';
      angular.module('app').factory('Utils', function ($ionicPopup){
        return {
          showAlert: function (title, message, callback) {
            var alertPopup = $ionicPopup.alert({
              title: title,
              template: message
            });
            alertPopup.then(function (res) {
              if (callback) {
                callback();
              }
            });
          }
        };
      });
    }());

this file not only for $ionicPopup, might for many other common functions, then we only need inject Utils into other controllers.

#
