paymentApp.factory('groupDataFactory', ['$http', function($http) {
  var groupDataFactory = function() {};

  groupDataFactory.prototype.createGroup = function (group) {
    var queryUrl = '/groups/create';
    var headers = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }};
    return $http.post(queryUrl, group, headers);
  };

  return groupDataFactory;

}]);
