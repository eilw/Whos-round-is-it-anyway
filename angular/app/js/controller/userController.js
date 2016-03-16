paymentApp.controller('UserController', ['userDataService', function(userDataService){

  var self = this;
  self.chooseSignUp = false;
  self.chooseLogIn = false;
  self.userName = "";
  self.email ="";
  self.password = "";
  self.passwordConfirmation = "";
  self.loggedInStatus = false;

  self.noOptionChosen = function() {
    if (!self.chooseSignUp && !self.chooseLogIn) { return true; }
  }

  self.isLoggedIn = function(){
    return self.loggedInStatus;
  };

  self.signUp = function(){
    var user = {userName: self.userName, email: self.email, password: self.password };
    userDataService.sendUserSignUp(user)
    // .then(function(){
    // });
    self.loggedInStatus = true;
    //  move into userDataService.sendUser once Rails integration has happened
  };

  self.logIn = function() {
    var user = {email: self.email, password: self.password };
      userDataService.sendUserLogIn(user).then(function(){
    });
    self.loggedInStatus = true;
  };





}]);
