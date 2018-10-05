var utils = require('../utils/utilities');

describe('Beatrix CMS: Create New Menu - Language tabs available per Brand', function() {
  var cmsMenu = element.all(by.css(browser.params.cmsMenuCss)).first();
  var cmsCreateNewMenu = element.all(by.xpath(browser.params.cmsCreateNewMenuXpath)).first();

it('If the brand is Bodog88, it would return three language tabs (en, sc, pt)', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  cmsMenu.click();
  cmsCreateNewMenu.click();
  //CHOOSE BRAND
  element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
  browser.sleep(5000);
  element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
  browser.sleep(5000);
  let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  expect (BodogBrandLanguage.count()).toBe(3);
  expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
  expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
  expect (BodogBrandLanguage.get(1).getText()).toEqual('ES');
  expect (BodogBrandLanguage.get(2).getText()).toEqual('PT');
  browser.sleep(3000);
});

it('If the brand is Slots LV, it would return two language tabs (en,zh-hans)', function(){
  //CHOOSE BRAND
  element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
  browser.sleep(5000);
  element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Slots LV')).click();
  browser.sleep(5000);
  let SlotsBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  expect (SlotsBrandLanguage.count()).toBe(2);
  expect (SlotsBrandLanguage.get(0).getAttribute('class')).toEqual('active')
  expect (SlotsBrandLanguage.get(0).getText()).toEqual('EN');
  expect (SlotsBrandLanguage.get(1).getText()).toEqual('LANGUAGES.ZH-HANS');
  browser.sleep(3000);
});

it('If the brand is Crazy88, it would return three language tabs (en,sc,pt)', function(){
  //CHOOSE BRAND
  element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
  browser.sleep(5000);
  element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Crazy 88')).click();
  browser.sleep(5000);
  let Crazy88BrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  expect (Crazy88BrandLanguage.count()).toBe(3);
  expect (Crazy88BrandLanguage.get(0).getAttribute('class')).toEqual('active')
  expect (Crazy88BrandLanguage.get(0).getText()).toEqual('EN');
  expect (Crazy88BrandLanguage.get(1).getText()).toEqual('ES');
  expect (Crazy88BrandLanguage.get(2).getText()).toEqual('PT');
  browser.sleep(3000);
});
});
