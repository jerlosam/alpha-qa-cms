var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Content Page - Page Type', function() {
  var cmsPageTypeDropdown = element(by.id(browser.params.cmsPageTypeDropdownId));

  it('Page Type should be a dropdown with the following options: Article, Help Promotion, Generic', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createContentPage();
    expect (cmsPageTypeDropdown.isPresent()).toBe(true);
    cmsPageTypeDropdown.click();
    var cmsPageTypeItems = element.all(by.css('ul.custom-droplist')).get(1);
    var cmsPageTypeItemsList = cmsPageTypeItems.all(by.tagName('li'));
    expect(cmsPageTypeItemsList.get(0).getText()).toBe('Article');
    expect(cmsPageTypeItemsList.get(1).getText()).toBe('Help');
    expect(cmsPageTypeItemsList.get(2).getText()).toBe('Promotion');
    expect(cmsPageTypeItemsList.get(3).getText()).toBe('Generic');
  });
});
