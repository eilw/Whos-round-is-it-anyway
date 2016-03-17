paymentApp.controller('GroupController', ['groupDataFactory', function(groupDataFactory){

  var self = this;
  var groupDataFactory = new groupDataFactory();

  self.allUsers = [{name: 'Rufus', id: 2}, {name: 'Eirik', id: 1}];
  self.groupName = '';
  self.groupUsers = [];
  self.groupUsersIds = [];
  self.groupStatus = false;

  self.isGroupCreated = function(){
    return self.groupStatus;
  }

  self.addUser = function(user) {
    if (self.groupUsers.indexOf(user) < 0) {
      self.groupUsers.push(user)
      self.groupUsersIds.push(user.id)
    };
  }

  self.createGroup = function() {
    var group = { group: { name: self.groupName, user_ids: self.groupUsersIds } }
    groupDataFactory.createGroup(group);
    self.groupStatus = true;
  }

}]);
