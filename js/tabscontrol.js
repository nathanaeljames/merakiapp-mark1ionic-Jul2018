/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('tabscontrol', [])

.config(function($ionicConfigProvider){
    $ionicConfigProvider.tabs.position('bottom');
})

.config(function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
})

/*.config(['$httpProvider', function($httpProvider) {
  $httpProvider.defaults.withCredentials = true;
}])*/

/* Ex.: 

.service('BlankService', [function(){

}]);

*/