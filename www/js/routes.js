angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $urlRouterProvider.otherwise('/login')

  $stateProvider

      /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.lILT'
      2) Using $state.go programatically:
        $state.go('tabsController.lILT');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/home
      /page1/tab2/home
  */
  .state('tabsController.lILT', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/lILT.html',
        controller: 'lILTCtrl'
      },
      'tab2': {
        templateUrl: 'templates/lILT.html',
        controller: 'lILTCtrl'
      }
    }
  })


.state('tabsController.lILTStory', {
    url: '/camera',
    views: {
      'tab2': {
        templateUrl: 'templates/lILTStory.html',
        controller: 'lILTStoryCtrl'
      }
    }
  })


  .state('tabsController.cOMMUNITY', {
    url: '/search',
    views: {
      'tab3': {
        templateUrl: 'templates/cOMMUNITY.html',
        controller: 'cOMMUNITYCtrl'
      }
    }
  })

  .state('tabsController.notifications', {
    url: '/notifications',
    views: {
      'tab5': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

  .state('tabsController.pROFILE', {
    url: '/profile',
    views: {
      'tab6': {
        templateUrl: 'templates/pROFILE.html',
        controller: 'pROFILECtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/startPage.html',
    controller: 'AuthController',
    controllerAs: 'vm'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('register', {
    url: '/register',
    templateUrl: 'templates/register.html',
    controller: 'AuthController',
    controllerAs: 'vm'
  })

  .state('tabsController.singleStory', {
    url: '/single',
    views: {
      'tab2': {
        templateUrl: 'templates/singleStory.html',
        controller: 'singleStoryCtrl'
      }
    }
  })

  .state('tabsController.groupStory', {
    url: '/page15',
    views: {
      'tab2': {
        templateUrl: 'templates/groupStory.html',
        controller: 'groupStoryCtrl'
      }
    }
  })

  .state('tabsController.invite', {
    url: '/page13',
    views: {
      'tab2': {
        templateUrl: 'templates/invite.html',
        controller: 'inviteCtrl'
      }
    }
  })

  .state('tabsController.invite2', {
    url: '/page14',
    views: {
      'tab2': {
        templateUrl: 'templates/invite2.html',
        controller: 'invite2Ctrl'
      }
    }
  })



  

});