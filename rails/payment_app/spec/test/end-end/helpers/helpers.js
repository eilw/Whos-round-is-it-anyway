loginHelper = function(){
  browser.get("http://localhost:8000");
  element(by.css('#choose-login')).click();
  element(by.css('#user-login')).element(by.model('userCtrl.email')).sendKeys('test@email.com');
  element(by.css('#user-login')).element(by.model('userCtrl.password')).sendKeys('password');
  $('#logIn').click();
}
