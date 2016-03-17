paymentApp.controller('GroupController', ['groupDataFactory', 'currentPayerDataFactory', function(groupDataFactory, currentPayerDataFactory){

  var self = this;
  var groupDataFactory = new groupDataFactory();
  var currentPayerDataFactory = new currentPayerDataFactory();

  self.allUsers = [];
  self.groupName = '';
  self.groupUsers = [];
  self.groupUsersIds = [];
  self.groupStatus = false;
  // self.currentPayer;
  self.showCreateGroupButton = true;

  self.hideGroupButton = function() {
    self.showCreateGroupButton = false;
  };

  self.isGroupCreated = function(){
    return self.groupStatus;
  };

  self.addUser = function(user) {
    if (self.groupUsers.indexOf(user) < 0) {
      self.groupUsers.push(user)
      self.groupUsersIds.push(user.id)
    };
  }

  self.getAllUsers = function() {
    groupDataFactory.getAllUsers()
      .then(function(response) {
        self.allUsers = response.data;
      });
  };

  self.createGroup = function() {
    var group = { group: { name: self.groupName, user_ids: self.groupUsersIds } }
    groupDataFactory.createGroup(group)
      .then(function(response) {
        P.updateCurrentPayer(response.group.id);
      });
    self.groupStatus = true;
  };

  // self.updateCurrentPayer = function(id) {
  //   currentPayerDataFactory.retrieveCurrentPayer(id)
  //     .then(function(response) {
  //       self.currentPayer = response.data.payer;
  //     });
  // };

}]);
