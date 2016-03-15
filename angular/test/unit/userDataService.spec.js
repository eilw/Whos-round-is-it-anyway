describe('service: userDataService', function() {

  var userData;

  beforeEach(module('PaymentApp'));

  beforeEach(inject(function(userDataService) {
    userData = userDataService;
  }));

  beforeEach(inject(function($httpBackend) {
      httpBackend = $httpBackend;
      httpBackend
        .expectPOST("/users")
        .respond(
          { status:200  }
        );
    }));

  it('responds to query', function() {
    var user = [{username: 'Test', email: 'test@email.com', password: 'password'}]
    userData.sendUser(user)
    .then(function(response){
    expect(response.status).toEqual(200);
  });
  httpBackend.flush();
});
});
