var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Content Block - Language tabs available per Brand', function() {
  var cmsMenu = element.all(by.css(browser.params.cmsMenuCss)).first();
  var cmsCreateNewMenu = element.all(by.xpath(browser.params.cmsCreateNewMenuXpath)).first();

  it('If the brand is Bodog88, it would return 3 language tabs (en,sc,pt), EN As Active And Default Language', function() {
      utils.loginToCms();
      utils.goToCreateContentBlock();
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      element.all(by.className('custom-droplist')).first().element(by.cssContainingText('li', 'Bodog88')).click();
      utils.checkLanguageTab('Bodog88');
});

it('If the brand is Slots LV, it would return 2 language tabs (en,sc), EN As Active And Default Language', function() {
    //CHOOSE BRAND
    element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
    element.all(by.className('custom-droplist')).first().element(by.cssContainingText('li', 'Slots LV')).click();
    utils.checkLanguageTab('Slots LV');
});

it('If the brand is Crazy 88, it would return three language tabs (en,sc,pt), EN As Active And Default Language', function() {
    //CHOOSE BRAND
    element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
    element.all(by.className('custom-droplist')).first().element(by.cssContainingText('li', 'Crazy 88')).click();
    utils.checkLanguageTab('Crazy 88');
});

it('If the brand is Slots, it would return three language tabs (en,sc,pt), EN As Active And Default Language', function() {
    //CHOOSE BRAND
    element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
    element.all(by.className('custom-droplist')).first().all(by.tagName('li')).get(2).click();
    utils.checkLanguageTab('Slots');
  });
});
