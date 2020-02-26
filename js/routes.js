angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.social', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/social.html',
        controller: 'socialCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.notification', {
    url: '/page7',
    views: {
      'tab4': {
        templateUrl: 'templates/notification.html',
        controller: 'notificationCtrl'
      }
    }
  })

  .state('menu', {
    url: '/page1',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('login', {
    url: '/page6',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.appFeedback', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/appFeedback.html',
        controller: 'appFeedbackCtrl'
      }
    }
  })

  .state('menu.upcomingClasses', {
    url: '/page10',
    views: {
      'tab1': {
        templateUrl: 'templates/upcomingClasses.html',
        controller: 'upcomingClassesCtrl'
      }
    }
  })

  .state('menu.catchUp', {
    url: '/page11',
    views: {
      'tab1': {
        templateUrl: 'templates/catchUp.html',
        controller: 'catchUpCtrl'
      }
    }
  })

  .state('menu.recommended', {
    url: '/page12',
    views: {
      'tab1': {
        templateUrl: 'templates/recommended.html',
        controller: 'recommendedCtrl'
      }
    }
  })

  .state('menu.courses', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/courses.html',
        controller: 'coursesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page6')


});