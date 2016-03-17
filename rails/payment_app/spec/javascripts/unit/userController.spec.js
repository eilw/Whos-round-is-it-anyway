describe('UserController', function() {
  beforeEach(module('PaymentApp'));

  var ctrl;


  beforeEach(inject(function($controller,userDataService) {
    ctrl = $controller('UserController');
    // mockUserService = userDataService;
  }));

  // to mock out the userDataService
  // beforeEach(function () {
  //   module(function ($provide) {
  //     $provide.service('userDataService', function(){
  //       this.sendUserSignUp = jasmine.createSpy('sendUserSignUp').andReturn(true);
  //       this.sendUserLogIn = jasmine.createSpy('sendUserLoginIn').andReturn({user_id: 4});
  //     });
  //   });
  // });


  describe("checking logged in status",function(){

    it("a user is not logged in from the beginning",function(){
      expect(ctrl.loggedInStatus).toEqual(false);
    });

    it("signing up changes the login status",function(){
      var user = {}
      ctrl.signUp();
      expect(ctrl.isLoggedIn()).toEqual(true);
    });

    it("logging in changes the login status",function(){
      var user = {}
      ctrl.logIn();
      expect(ctrl.isLoggedIn()).toEqual(true);
    });
  });

  describe("sending data to server",function(){

    xit("sendUserSignUp is activated",function(){
      ctrl.signUp();
      expect(mockUserService.sendUserSignUp).toHaveBeenCalled();
    });
  });




});
