paymentApp.service('userDataService', ['$http', function($http) {
  var self = this;
  
  self.sendUser = function(user) {
    var queryUrl = '/users';
    return $http.post(queryUrl, user)
    };
}]);
