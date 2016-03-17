describe('service: userDataService', function() {

  var userData;

  beforeEach(module('PaymentApp'));

  beforeEach(inject(function(userDataService) {
    userData = userDataService;
  }));

  describe('signing up', function() {
    beforeEach(inject(function($httpBackend) {
      var user = {username: 'Test', email: 'test@email.com', password: 'password'};
      httpBackend = $httpBackend;
      httpBackend
        .when('POST', '/users/create', user)
        .respond(
          { status: 200  }
        );
    }));

    it('responds to sendUserSignUp', function() {
      var user = {username: 'Test', email: 'test@email.com', password: 'password'};
      userData.sendUserSignUp(user)
      .then(function(response){
        expect(response.status).toEqual(200);
      });
      httpBackend.flush();
    });
  });

  describe('logging in', function() {
    var responseUser = {};
    var user = {email: 'test@email.com', password: 'password'};
    beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .when('POST', '/users/sign_in', user)
        .respond(
          { status: 200, data: responseUser }
        );
    }));

    it('responds to sendUserLogIn', function() {
      userData.sendUserLogIn(user)
      .then(function(response){
        expect(response.status).toEqual(200);
        expect(response.data.data).toEqual(responseUser);
      });
      httpBackend.flush();
    });
  });


});
