describe("UserSignUp", function() {
  it('a user can sign up and be welcomed with their name', function() {
    browser.get("http://localhost:8000");
    var userName = element(by.model('userCtrl.userName'));
    userName.sendKeys('Test Name');
    var userEmail = element(by.model('userCtrl.email'));
    userEmail.sendKeys('test@email.com');
    var userPassword = element(by.model('userCtrl.password'));
    userPassword.sendKeys('password');
    var userPasswordConfirmation = element(by.model('userCtrl.passwordConfirmation'));
    userPasswordConfirmation.sendKeys('password');
    var submit = $('#signUp');
    submit.click();
    var welcome = element(by.css('h2'));
    expect(welcome.getText()).toEqual('Welcome, Test Name');

    expect(userPassword.isDisplayed()).toBeFalsy();
  });



});
