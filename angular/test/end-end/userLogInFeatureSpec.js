describe("UserLogIn", function() {
  it('a user can log in and be welcomed with their name', function() {
    browser.get("http://localhost:8000");
    element(by.css('#choose-login')).click();
    element(by.css('#user-login')).element(by.model('userCtrl.email')).sendKeys('test@email.com');
    element(by.css('#user-login')).element(by.model('userCtrl.password')).sendKeys('password');
    $('#logIn').click();

    var welcome = element(by.css('h2'));
    expect(welcome.getText()).toContain('Welcome');
    // expect(welcome.getText()).toEqual('Welcome, Test Name');
    // add to test if the right user is included


  });



});
