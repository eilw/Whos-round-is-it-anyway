paymentApp.controller('UserController', ['userDataService', function(userDataService){

  var self = this;
  self.userName = "";
  self.email ="";
  self.password = "";
  self.loggedInStatus = false;

  self.isLoggedIn = function(){
    return self.loggedInStatus;
  };

  self.signUp = function(){
    var user = {userName: self.userName, email: self.email, password: self.password }
    userDataService.sendUser(user).then(function(){
    });
    self.loggedInStatus = true;


  };





}]);
