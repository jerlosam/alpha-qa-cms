var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Slide - Select an Internal Page', function() {
  var cmsAddInternalPage = element(by.buttonText(browser.params.cmsAddInternalPage));

it('Display of Select an Internal Page CTA', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createSlideContent();
  browser.sleep(3000);
});

it('Display of Select an Internal Page overlay', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createSlideContent();
  browser.sleep(3000);
  cmsAddInternalPage.click();
  //Internal Page Overlay specs
  expect(searchField.isDisplayed()).toBe(true);
  expect(typeDropdown.isDisplayed()).toBe(true);
  expect(nameField.isDisplayed()).toBe(true);
  expect(typeField.isDisplayed()).toBe(true);
  expect(pageTypeField.isDisplayed()).toBe(true);
  expect(statusField.isDisplayed()).toBe(true);
  expect(selectCTA.isDisplayed()).toBe(true);
  expect(removeCTA.isDisplayed()).toBe(true);
  expect(cancelCTA.isDisplayed()).toBe(true);
  expect(saveCTA.isDisplayed()).toBe(true);
  expect(closeButtonInternalPage.isDisplayed()).toBe(true);


});

it('Select an Internal Page overlay pagination', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createSlideContent();
  browser.sleep(3000);
});

it('Empty Internal Page list', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createSlideContent();
  browser.sleep(3000);
});

it('User clicks on Save CTA', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createSlideContent();
  browser.sleep(3000);
});


it('Display of selected Internal Page on Link URL field', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createSlideContent();
  browser.sleep(3000);
});

});
