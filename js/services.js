angular.module('app.services', [])

.service('LoginCtrl', ['$http', '$q', function($http, $q){

    //var api_url = 'http://support4joomla.com/jbackend/acorn/';
    var api_url = 'https://merakischools.com/portal/index.php/api/';
    var SessID = null;

    var ret = {
        loginUser: function(data){
            var deferred = $q.defer();
            $http.post(api_url+'post/user/login?username='+data.username+'&password='+data.password).then(function(resp){
                console.log(resp);
                if (resp.data.status == 'ok') {
                    deferred.resolve(resp.data);
                    SessID = resp.data.session_id;
                    //console.log(SessID);
                } else {
                    deferred.reject('Wrong credentials.');
                }
            });
            return deferred.promise;
        },
        
        isAuthenticated: function(){
            //console.log(SessID);
            if (SessID !== null) {
                return true;
            } else {
                return false;
            }
        },
        
        logoutUser: function(){
            var deferred = $q.defer();
            $http.get(api_url+'get/user/logout?session_id='+SessID).then(function(resp){
                console.log(resp);
                SessID = null;
                //console.log(SessID);
                deferred.resolve(resp.data);
            });
            return deferred.promise;
        },
    }
    return ret;

}]);