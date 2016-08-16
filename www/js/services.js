(function() {
    'use strict';

    angular
        .module('app')
        .factory('AuthFactory', AuthFactory);

    AuthFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function AuthFactory($http, $q) {
        var service = {
            registerUser: registerUser,
            loginUser: loginUser
        };
        return service;

        ////////////////

        function registerUser(email, fullName, username, password, confirmPassword) {
            var defer = $q.defer();

            if (password !== confirmPassword) {
                defer.reject('Password must match Confirm Password.');

                return defer.promise;
            }
            var newUser = { email: email, fullName: fullName, username: username, password: password, confirmPassword: confirmPassword }

            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/register',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                data: newUser
            }).then(function(response) {
                    if (response.status === 200) {
                        defer.resolve(response);
                    } else {
                        defer.reject('No data found!');
                    }
                },
                function(error) {
                    defer.reject('Email Address has already been used!');
                });
            return defer.promise;
        }

        // function to login user making an HTTP call to the server
        function loginUser(loginEmail, loginPassword) {
            var defer = $q.defer();

            var data = "grant_type=password&email=" + loginEmail + "&password=" + loginPassword;

            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/authenticate',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                },
                data: data
            }).then(function(response) {
                    if (response.status === 200) {

                        //Stores access token and username on successful login
                        // localStorageService.set('access_token', response.data.access_token);
                        // localStorageService.set('email', loginEmail);

                      defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
                function(error) {
                    defer.reject(error);
                });

            return defer.promise;
        }
    }

})();
