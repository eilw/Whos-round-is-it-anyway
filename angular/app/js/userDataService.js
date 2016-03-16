paymentApp.service('userDataService', ['$http', function($http) {
  var self = this;

  self.sendUser = function(user) {
    var queryUrl = '/users';
    var headers = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }};
    return $http.post(queryUrl, user, headers);
    };
}]);
