(function() {
    'use strict';

    angular
        .module('app')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['AuthFactory', '$state'];

    /* @ngInject */
    function AuthController(AuthFactory, $state) {
        var vm = this;
        vm.title = 'AuthController';
        vm.registerUser = registerUser;
        vm.loginUser = loginUser;
     

        activate();

        ////////////////

        function activate() {}

        //create function to call auth factory to register new user
        function registerUser(email, fullName, username, password, confirmPassword) {
            AuthFactory.registerUser(email, fullName, username, password, confirmPassword).then(function(response) {

                    // toastr.success('User successfully registered!');

                    vm.newFirstName = '';
                    vm.newLastName = '';
                    vm.newEmail = '';
                    vm.newPhoneNumber = '';
                    vm.newPassword = '';
                    vm.newConfirmPassword = '';

                    $state.go("login");
                },
                function(error) {
                    if (typeof error === 'object') {
                        toastr.error('There was an error: ' + error.data);
                    } else {
                        toastr.error(error);
                    }
                });
        }

        // create  function to call login user from AuthFactory and store login status
        function loginUser(loginEmail, loginPassword) {
            
                        AuthFactory.loginUser(loginEmail, loginPassword).then(function(response) {
                    vm.userLoggedIn = true;
                    vm.loginData = response.data;

                    // toastr.success('User successfully logged in!');

                    vm.loginEmail = '';
                    vm.loginPassword = '';

                    $state.go("camera");
                },
                function(error) {
                    if (typeof error === 'object') {
                        toastr.error('There was an error: ' + error.data);
                    } else {
                        toastr.error(error);
                    }
                });
        }
    }
})();
