describe("AddGroups", function() {
  // var helpers = require('./helpers/helpers.js');

  var logIn = function() {
    browser.get("http://localhost:8000");
    element(by.css('#choose-login')).click();
    element(by.css('#user-login')).element(by.model('userCtrl.email')).sendKeys('test@email.com');
    element(by.css('#user-login')).element(by.model('userCtrl.password')).sendKeys('password');
    $('#logIn').click();
  };

  it('a user creates a group and adds a user to it', function() {
    logIn();
    $('#add-group').click();
    var accessOptions = element(by.css('.access-options'));
    element(by.css('#add-group-name')).sendKeys('Group1');
    element(by.model('query')).sendKeys('Rufus');
    element.all(by.css('.users')).last().click();
    var userName = element(by.css('.users-in-group')).getText()
    expect(userName).toEqual('Rufus');

    element(by.css('#create-group')).click();
    var groupName = element(by.css('h1')).getText();
    expect(groupName).toEqual('Group1');
    expect(accessOptions.isDisplayed()).toBeFalsy();



  });

});
