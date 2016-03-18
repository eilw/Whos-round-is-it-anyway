paymentApp.factory('currentPayerDataFactory', ['$http', 'sessionDataService', function($http, sessionDataService) {

  var currentPayerDataFactory = function() {};

  currentPayerDataFactory.prototype.retrieveCurrentPayer = function () {
    var groupId = sessionDataService.groupId;
    var queryUrl = "/groups/" + groupId + "/payer";
    console.log(queryUrl);
    return $http.get(queryUrl);
  };

  currentPayerDataFactory.prototype.makePayment = function (groupId, userId, paymentAmount) {
    var paymentHash = { group_id: groupId, user_id: userId, amount: paymentAmount};
    var queryUrl = "/groups/" + groupId + "/payments";
    var headers = { headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }};
    return $http.post(queryUrl, paymentHash, headers);
  };

  return currentPayerDataFactory;

}]);
