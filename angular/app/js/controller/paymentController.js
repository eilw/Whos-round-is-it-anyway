paymentApp.controller('PaymentController', ['currentPayerDataFactory', function(currentPayerDataFactory){

  var self = this;
  var currentPayerDataFactory = new currentPayerDataFactory();

  self.currentPayer = 'Chris';
  self.paymentAmount;


  self.updateCurrentPayer = function(id) {
    currentPayerDataFactory.retrieveCurrentPayer(id)
      .then(function(response) {
        self.currentPayer = response.data.payer;
      });
  };

  self.pay = function ( groupId, userId, paymentAmount ) {
    currentPayerDataFactory.makePayment ( groupId, userId, paymentAmount )
      .then(function(response) {
        self.currentPayer = response.data.payer;
      });
  };

}]);
