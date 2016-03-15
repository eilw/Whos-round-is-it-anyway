paymentApp.controller('UserController', function(){

  var self = this;
  self.userName = "";
  self.email ="";
  self.password = "";
  self.loggedInStatus = false;

  self.isLoggedIn = function(){
    return self.loggedInStatus;
  };

  self.logIn = function(){
    self.loggedInStatus = true;
  }







});
