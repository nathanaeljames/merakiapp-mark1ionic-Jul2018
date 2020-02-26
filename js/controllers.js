angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('socialCtrl', ['$scope', '$stateParams', '$window', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $window) {

killnav = function(){
    var iframe = document.getElementById("myFrame");
    //console.log("test");
    //console.log(iframe);
    var elmnt = iframe.contentWindow.document.getElementsByClassName("videoblock");
    //console.log(elmnt);
    elmnt[0].style.display = "none";
}

//this code to securely circumvent same-origin policy
var frame = document.getElementById('myFrame').contentWindow; 
//frame.contentWindow.postMessage("origincheck", '*');
sendMessage = function(e) {
    //e.preventDefault();
    //console.log("it ran");
    frame.postMessage('killnavbar', 'https://merakischools.com');
}
/*function receiveMessage(event)
{
  // Do we trust the sender of this message?  (might be
  // different from what we originally opened, for example).
  console.log(event);
  console.log(event.data);
  if (event.origin !== "http://merakischools.com")
    return;

  // event.source is popup
  // event.data is "hi there yourself!  the secret response is: rheeeeet!"
}
window.addEventListener("message", receiveMessage, false);*/

//(broken)$window.onload = killnav();
//$scope.$watch('$viewContentLoaded', function() {
    //call it here
    //killnav();
//});

//angular.element(document).ready(function () {
//    killnav();
//});

/*$scope.init = function(){
 //your code
    var iframe = document.getElementById("myFrame");
    console.log("test");
    console.log(iframe);
    var elmnt = iframe.contentWindow.document.getElementsByClassName("videoblock");
    console.log(elmnt);
    elmnt[0].style.display = "none";
};
$timeout($scope.init);*/


//angular.element(document).ready(killnav);



}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', 'LoginCtrl', 'UserCtrl', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, LoginCtrl, UserCtrl, $state) {
    
    //$scope.userData = $ionicUser.details;
    
    //$scope.userData = UserCtrl.getData();
    //console.log($scope.userData);
    $scope.userData = [];
    $scope.loaduserData = function() {
        UserCtrl.getData().then(function(res){
            $scope.userData = res;
        });
    }
    
    $scope.loaduserData();
    //console.log('it should have run!');
    
    $scope.logout = function(){
        LoginCtrl.logoutUser().then(function(){
            $state.go('login');
        });
    }

}])
   
.controller('notificationCtrl', ['$scope', '$stateParams', 'LoginCtrl', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, LoginCtrl, $state) {


}])
      
.controller('loginCtrl', ['$scope', '$stateParams', 'LoginCtrl', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, LoginCtrl, $state) {

    $scope.data = {
        'username': '',
        'password': ''
    }
    
    $scope.error = '';
    
    if (LoginCtrl.isAuthenticated()) {
       $state.go('menu.home'); 
    }
    
    $scope.login = function(){
        $scope.error = '';
        
        LoginCtrl.loginUser($scope.data).then(function(){
            $state.go('menu.home');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}])
   
.controller('appFeedbackCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('upcomingClassesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('catchUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('recommendedCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('coursesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

    $scope.courses = [];
    $scope.loadCourses = function() {
        CourseCtrl.getData().then(function(res){
            $scope.courses = res;
        });
    }
    
    $scope.loadCourses();

}])
 