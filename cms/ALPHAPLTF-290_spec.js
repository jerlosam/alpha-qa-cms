var utils = require('../utils/utilities');

describe('Validation of required fields/section on all Language tabs', function(){

 it('Required Fields Validation per Language Tab - Marketing Page', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.goToCreateMarketingContent();
  let langTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  expect (langTabs.count()).toBe(3);
  expect (langTabs.get(0).getAttribute('class')).toEqual('active');
  expect (langTabs.get(0).getText()).toEqual('EN');
  expect (langTabs.get(1).getText()).toEqual('ES');
  expect (langTabs.get(2).getText()).toEqual('PT');
  browser.sleep(1000);

  //Fill Internal Name and Slug Fields
  element(by.id('internal_name')).sendKeys('Internal Name');
  browser.sleep(1000);
  element(by.id('slug')).sendKeys('Slug');
  browser.sleep(1000);

  //Click on ES tab
  element(by.css('div > bx-content-type-form-body > bx-form > form > bx-tabs > div > nav > ul > li:nth-child(2)')).click();
  browser.sleep(1000);
  //Now ES tab is active
  expect (langTabs.get(1).getAttribute('class')).toEqual('active');
  //Fill the title in ES tab
  element.all(by.id('title')).get(2).sendKeys('Title-ES');
  browser.sleep(1000);

  //Click on PT tab
  element(by.css('div > bx-content-type-form-body > bx-form > form > bx-tabs > div > nav > ul > li:nth-child(3)')).click();
  browser.sleep(1000);
  expect (langTabs.get(2).getAttribute('class')).toEqual('active');

  //Try to Save as Daft
  element(by.css('button.custom-cta.tertiary.cta-large')).click();
  browser.sleep(1000);
  //'This field is required' message is displayed in EN Tab
  var invalidTitle = element(by.css('div.custom-field.col-xs-4.invalid-field'));
  expect(invalidTitle.isPresent()).toBe(true);
  //Fill the requires field
  element.all(by.id('title')).get(0).sendKeys('Title-EN');
  browser.sleep(1000);

  //Try to save again
  element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
  browser.sleep(5000);
  //The required field messages is displayed on PT tab
  var invalidTitle = element(by.css('div.custom-field.col-xs-4.invalid-field')).getText();
  invalidTitle.then(console.log);
  expect(invalidTitle.isPresent()).toBe(true);
});

it('Leave one tab empty', function(){
 browser.manage().deleteAllCookies();
 utils.loginToCms();
 utils.goToCreateMarketingContent();
 let langTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
 expect (langTabs.count()).toBe(3);
 expect (langTabs.get(0).getAttribute('class')).toEqual('active');
 expect (langTabs.get(0).getText()).toEqual('EN');
 expect (langTabs.get(1).getText()).toEqual('ES');
 expect (langTabs.get(2).getText()).toEqual('PT');
 browser.sleep(1000);

 //Fill Internal Name and Slug Fields
 element(by.id('internal_name')).sendKeys('Internal Name');
 browser.sleep(1000);
 element(by.id('slug')).sendKeys('Slug');
 browser.sleep(1000);

 //No Click on ES tab


 //Click on PT tab
 element(by.css('div > bx-content-type-form-body > bx-form > form > bx-tabs > div > nav > ul > li:nth-child(3)')).click();
 browser.sleep(1000);
 expect (langTabs.get(2).getAttribute('class')).toEqual('active');

 //Try to Save as Daft
 element(by.css('button.custom-cta.tertiary.cta-large')).click();
 browser.sleep(1000);
 //'This field is required' message is displayed in EN Tab
 var invalidTitle = element(by.css('div.custom-field.col-xs-4.invalid-field'));
 expect(invalidTitle.isPresent()).toBe(true);
 //Fill the requires field
 element.all(by.id('title')).get(0).sendKeys('Title-EN');
 browser.sleep(1000);

 //Try to save again
 element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
 browser.sleep(5000);
 //The required field messages is displayed on PT tab
 var invalidTitle = element(by.css('div.custom-field.col-xs-4.invalid-field')).getText();
 invalidTitle.then(console.log);
 expect(invalidTitle.isPresent()).toBe(true);
 //Fill the requires field
 element.all(by.id('title')).get(4).sendKeys('Title-PT');
 browser.sleep(1000);

 //Save as Daft --> It should be possible
 element(by.css('button.custom-cta.tertiary.cta-large')).click();
 browser.sleep(1000);

});





});
