paymentApp.controller('PaymentController', ['currentPayerDataFactory', function(currentPayerDataFactory){

  var self = this;
  var currentPayerDataFactory = new currentPayerDataFactory();

  self.currentPayer;
  self.paymentAmount;


  self.updateCurrentPayer = function(id) {
    console.log(id);
    currentPayerDataFactory.retrieveCurrentPayer(id)
      .then(function(response) {
        console.log(response.data);
        self.currentPayer = response.data;
      });
  };

  self.pay = function ( groupId, userId, paymentAmount ) {
    currentPayerDataFactory.makePayment ( groupId, userId, paymentAmount )
      .then(function(response) {
        self.currentPayer = response.data.payer;
      });
  };

}]);
