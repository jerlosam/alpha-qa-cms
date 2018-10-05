var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Slide - Title', function() {
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();

  it('Title Field should be a required text field', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createSlideContent();
    cmsTitleField.click();
    element(by.className('hint-msg')).click();
    var cmsRequiredFieldMessage = element(by.className('error-msg'));
    expect (cmsRequiredFieldMessage.isPresent()).toBe(true);
    browser.sleep(3000);
  });

  it('Title Field should allow 1-100 characters', function(){
    var oneHundredCharacters = '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789abcdefghij';
    cmsTitleField.sendKeys("a");
    expect(cmsTitleField.getAttribute('class')).toContain('ng-valid');
    cmsTitleField.sendKeys(protractor.Key.BACK_SPACE);
    expect(cmsTitleField.getAttribute('class')).toContain('ng-invalid');
    cmsTitleField.sendKeys(oneHundredCharacters);
    expect(cmsTitleField.getAttribute('class')).toContain('ng-valid');
    expect(cmsTitleField.getAttribute('maxlength')).toEqual('100');
  });

  it('Title Field should allow any character', function(){
    cmsTitleField.sendKeys('QA Test -123 #$%^@&');
    expect(cmsTitleField.getAttribute('class')).toContain('ng-valid');
    browser.sleep(3000);
  });
});
