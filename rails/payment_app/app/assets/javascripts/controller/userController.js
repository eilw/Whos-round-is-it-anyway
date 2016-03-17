paymentApp.controller('UserController', ['userDataService', function(userDataService){

  var self = this;
  self.chooseSignUp = false;
  self.chooseLogIn = false;
  self.userName = "";
  self.email = "";
  self.password = "";
  self.passwordConfirmation = "";
  self.userId;
  self.groupId;
  self.loggedInStatus = false;

  self.noOptionChosen = function() {
    if (!self.chooseSignUp && !self.chooseLogIn) { return true; }
  };

  self.isLoggedIn = function(){
    return self.loggedInStatus;
  };

  self.signUp = function(){
    var user = { user: {username: self.userName, email: self.email, password: self.password, password_confirmation: self.passwordConfirmation } };
    userDataService.sendUserSignUp(user)
    // .then(function(){
    // });
    self.loggedInStatus = true;
    //  move into userDataService.sendUser once Rails integration has happened
  };

  self.logIn = function() {
    var user = {user: {email: self.email, password: self.password }};
      userDataService.sendUserLogIn(user).then(function(response){
        self.userId = response.data.id;
        self.userName = response.data.username;
        self.groupId = response.data.groups[0].id;
    });
    self.loggedInStatus = true;
  };

  // self.logOut = function() {
  //   userDataService.logOut();
  // };
}]);
