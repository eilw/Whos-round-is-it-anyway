paymentApp.factory('currentPayerDataFactory', ['$http', function($http) {
  var currentPayerDataFactory = function() {};

  currentPayerDataFactory.prototype.retrieveCurrentPayer = function (id) {
    var groupId = id;
    var queryUrl = "/groups/" + groupId + "/payer";
    return $http.get(queryUrl);
  };

  currentPayerDataFactory.prototype.makePayment = function (groupId, userId, paymentAmount) {
    var paymentHash = { group_id: groupId, user_id: userId, amount: paymentAmount}
    var queryUrl = "/groups/" + groupId + "/payments";
    var headers = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }};
    return $http.post(queryUrl, paymentHash, headers);
  };

  return currentPayerDataFactory;

}]);
