paymentApp.controller('GroupController', [function(){

  var self = this;

  self.allUsers = [{name: 'Rufus'}, {name: 'Eirik'}];
  self.groupUsers = [];

  self.addUser = function(user) {
    if (self.groupUsers.indexOf(user) < 0) {self.groupUsers.push(user)};
  }






}]);
