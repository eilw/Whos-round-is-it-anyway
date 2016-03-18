paymentApp.controller('PaymentController', ['currentPayerDataFactory', 'sessionDataService', function(currentPayerDataFactory, sessionDataService){

  var self = this;
  var currentPayerData = new currentPayerDataFactory();

  self.show = false;


  self.setShowPayer = function() {
    self.show = true;
  };

  self.showPayer = function() {
    return self.show;
  };

  self.getPayerName = function() {
    return sessionDataService.currentPayer.username;
  };

  self.updateCurrentPayer = function() {
    console.log('I am called');
    currentPayerData.retrieveCurrentPayer()
      .then(function(response) {
        console.log(response.data.username);
        sessionDataService.currentPayer = response.data;
      });
  };

  self.pay = function ( groupId, userId, paymentAmount ) {
    currentPayerData.makePayment ( groupId, userId, paymentAmount )
      .then(function(response) {
        sessionDataService.currentPayer = response.data.payer;
      });
  };

}]);
