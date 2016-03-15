paymentApp.service('userDataService', ['$http', function($http) {
  var queryUrl = '/users';
    return {
      query: function(user) {
        return $http({
          url: queryUrl,
          method: 'POST',
          params: {
            'q': user
          }
        });
      }
    };
}]);
