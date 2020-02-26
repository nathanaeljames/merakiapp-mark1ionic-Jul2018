angular.module('site.user', [])

.service('UserCtrl', ['$http', '$q', function($http, $q){
    
    var api_url = 'https://merakischools.com/portal/index.php/api/';
    //var api_url = 'http://support4joomla.com/jbackend/acorn/';
    //var SessID = '4bce0c1a0346f8520087e21b01f2f413';
    //?session_id='+SessID
    
    var ret = {
        getData: function(){
            return $http.get(api_url+'get/acorn/profile').then(function(resp){
                console.log(resp);
                return resp.data;
            });
        }
    }
    
    return ret;

}]);