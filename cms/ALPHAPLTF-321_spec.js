var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Marketing Page - Body/Description section', function() {

  it('Long Description Field should allow any character, and apply RT Formats', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.goToCreateMarketingContent();
    browser.executeScript('window.scrollTo(0,300);');
    browser.driver.sleep(5000)
    var cmsLongDescription = element(by.id(browser.params.cmsLongDescriptionId));
    var allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    var boldFormat = element(by.id(browser.params.cmsRTFBoldId));
    var italicFormat = element(by.id(browser.params.cmsRTFItalicId));
    var centerAlignFormat = element(by.id(browser.params.cmsRTFCenterAlignId));
    boldFormat.click();
    italicFormat.click();
    centerAlignFormat.click();
    browser.ignoreSynchronization = true
    browser.switchTo().frame(0);
    browser.driver.sleep(5000);
    cmsLongDescription.sendKeys(allCharacters);
    var cmsLongDescriptionTextInput = cmsLongDescription.element(by.tagName('p'));
    expect(cmsLongDescriptionTextInput.getAttribute('style')).toBe('text-align: center;');
    expect(cmsLongDescriptionTextInput.element(by.tagName('em')).element(by.tagName('strong')).isPresent()).toBe(true);
  });
});
