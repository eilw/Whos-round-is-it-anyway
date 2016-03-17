describe('factory: groupDataFactory', function() {

  var userData;

  beforeEach(module('PaymentApp'));

  beforeEach(inject(function(groupDataFactory) {
    groupData = new groupDataFactory();
  }));

  describe('creating group', function() {
    var group = {name: 'TestGroup', users: [{name: 'Rufus'}, {name: 'Eirick'}]};

    beforeEach(inject(function($httpBackend) {

      httpBackend = $httpBackend;
      httpBackend
        .when('POST', '/groups', group)
        .respond(
          { status: 200  }
        );
    }));

    it('responds to createGroup', function() {

      groupData.createGroup(group)
      .then(function(response){
        expect(response.status).toEqual(200);
      });
      httpBackend.flush();
    });
  });


});
