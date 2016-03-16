describe('UserController', function() {
  beforeEach(module('PaymentApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('UserController');
  }));

  describe("checking logged in status",function(){

    it("a user is not logged in from the beginning",function(){
      expect(ctrl.loggedInStatus).toEqual(false);
    });

    it("logging in changes the login status",function(){
      var user = {}
      ctrl.signUp(user)
      ctrl.isLoggedIn();
      expect(ctrl.isLoggedIn()).toEqual(true);
    });

  });



});
