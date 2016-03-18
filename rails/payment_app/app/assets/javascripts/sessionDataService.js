paymentApp.service('sessionDataService', ['$http', function($http) {
  var self = this;

  self.currentPayer = '';
  self.payerId = undefined;
  self.groupId = undefined;
  self.groupPayers = undefined;

}]);
