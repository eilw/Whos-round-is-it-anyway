describe('factory: groupDataFactory', function() {

  var userData;

  beforeEach(module('PaymentApp'));

  beforeEach(inject(function(groupDataFactory) {
    groupData = new groupDataFactory();
  }));

  describe('creating group', function() {
    beforeEach(inject(function($httpBackend) {
      var group = {name: 'TestGroup', users: [{name: 'Rufus'}, {name: 'Eirick'}]};
      httpBackend = $httpBackend;
      httpBackend
        .when('POST', '/groups/create', group)
        .respond(
          { status: 200  }
        );
    }));

    it('responds to createGroup', function() {
      var group = {name: 'TestGroup', users: [{name: 'Rufus'}, {name: 'Eirick'}]};
      groupData.createGroup(group)
      .then(function(response){
        expect(response.status).toEqual(200);
      });
      httpBackend.flush();
    });
  });


});
