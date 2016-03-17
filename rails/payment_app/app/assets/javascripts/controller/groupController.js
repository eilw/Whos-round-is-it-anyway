paymentApp.controller('GroupController', ['groupDataFactory', function(groupDataFactory){

  var self = this;
  var groupDataFactory = new groupDataFactory();

  self.allUsers = [{name: 'Rufus'}, {name: 'Eirik'}];
  self.groupName = '';
  self.groupUsers = [];
  self.groupStatus = false;

  self.isGroupCreated = function(){
    return self.groupStatus;
  }

  self.addUser = function(user) {
    if (self.groupUsers.indexOf(user) < 0) {self.groupUsers.push(user)};
  }

  self.createGroup = function() {
    var group = { name: self.groupName, users: self.groupUsers }
    groupDataFactory.createGroup(group);
    self.groupStatus = true;
  }

}]);
