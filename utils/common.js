
var common = function()
{
  this.testSaveAsDraftButton = function()
  {
    browser.get(browser.params.cmsUrl);
    browser.waitForAngular();
    element.all(by.id(browser.params.cmsUsernameId)).last().sendKeys(browser.params.cmsUsername);
    element.all(by.id(browser.params.cmsPasswordId)).last().sendKeys(browser.params.cmsPassword);
    element(by.buttonText('Login')).click();
    browser.sleep(5000);
  }

  this.editContent = function(content)
  {

  }




};

module.exports = new basicFunctionalities ();
