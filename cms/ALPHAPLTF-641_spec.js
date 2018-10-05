var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Marketing Page - Internal Name', function() {
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsSearchComponent = element.all(by.css(browser.params.cmsSearchComponentCss)).first();
  //var cmsName = element.all(by.id(browser.params.cmsNameId)).first();

it('Login and Create a Marketing Page', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.goToCreateMarketingContent();
  browser.sleep(3000);
});

it('Scenario 1', function(){
  cmsSearchComponent.click();
  browser.sleep(3000);

/*
//User searches a Name on the Search field (matched results)
  cmsName.sendKeys("a");
  browser.actions().sendKeys(protractor.Key.ENTER).perform();
  check the updated list based on the entered name
  close the add component ovverlay
*/
});

it('Scenario 2', function(){
  cmsSearchComponent.click();
  browser.sleep(3000);

/*
//User searches a Name on the Search field (no matched results)
  cmsName.sendKeys("2#4sh");
  browser.actions().sendKeys(protractor.Key.ENTER).perform();
  No components found should be displayed
  close the add component ovverlay
*/
});

it('Scenario 3', function(){
  cmsSearchComponent.click();
  browser.sleep(3000);

/*
//User selects a Type on the Type dropdown
  select a specific type
  check the 2nd row. Should match from the selected type in the drop down list
  close the add component ovverlay
*/
});


});
