paymentApp.controller('GroupController', ['groupDataFactory', function(groupDataFactory){

  var self = this;
  var groupDataFactory = new groupDataFactory();

  self.allUsers = [{name: 'Rufus'}, {name: 'Eirik'}, {name: 'Arnold'}, {name: 'Chris'}];
  self.groupName = '';
  self.groupUsers = [];
  self.groupStatus = false;
  self.currentPayer;
  self.showCreateGroupButton = true;

  self.hideGroupButton = function() {
    self.showCreateGroupButton = false;
  };

  self.isGroupCreated = function(){
    return self.groupStatus;
  };

  self.addUser = function(user) {
    if (self.groupUsers.indexOf(user) < 0) {self.groupUsers.push(user)};
  };

  self.createGroup = function() {
    var group = { name: self.groupName, users: self.groupUsers }
    groupDataFactory.createGroup(group);
    self.groupStatus = true;
  };

  self.updateCurrentPayer = function() {
    currentPayerDataFactory.retrieveCurrentPayer()
      .then(function(response) {
        self.currentPayer = response.data.payer;
      });
  };

}]);
