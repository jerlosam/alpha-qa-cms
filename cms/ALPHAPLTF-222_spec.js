var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Slide Show - Internal Name', function() {
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));

  it('Internal Name should have a name field label', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createSlideShowContent();
    var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
    expect (cmsInternalNameLabel.isPresent()).toBe(true);
    expect (cmsInternalNameLabel.getText()).toEqual('Internal Name*');
    browser.sleep(3000);
  });

  it('Internal Name should be a required field', function(){
    cmsInternalName.click();
    element(by.className('hint-msg')).click();
    var cmsRequiredFieldMessage = element(by.className('error-msg'));
    expect (cmsRequiredFieldMessage.isPresent()).toBe(true);;
    browser.sleep(3000);
  });

  it('Internal Name should only accept alphanumeric, hyphen, and space', function(){
    cmsInternalName.sendKeys('QA Test -123');
    expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
    cmsInternalName.sendKeys('***');
    expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
    browser.sleep(3000);
    cmsInternalName.clear();
  });

  it('Internal Name should allow 1-100 characters', function(){
    var oneHundredCharacters = '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789abcdefghij';
    cmsInternalName.sendKeys("a");
    expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
    cmsInternalName.sendKeys(protractor.Key.BACK_SPACE);
    expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
    cmsInternalName.sendKeys(oneHundredCharacters);
    expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
    expect(cmsInternalName.getAttribute('maxlength')).toEqual('100');
  });
});
