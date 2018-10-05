var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Content Page - By line', function() {
  var cmsBylineField = element.all(by.id(browser.params.cmsBylineFieldId)).first();
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createContentPage();
  it('By line Field should allow 1-50 characters', function(){
    var fiftyCharacters = '0123456789012345678901234567890123456789abcdefghij';
    cmsBylineField.sendKeys("a");
    expect(cmsBylineField.getAttribute('class')).toContain('ng-valid');
    cmsBylineField.sendKeys(fiftyCharacters);
    expect(cmsBylineField.getAttribute('class')).toContain('ng-valid');
    expect(cmsBylineField.getAttribute('maxlength')).toEqual('50');
  });

  it('By line Field should allow any character', function(){
    cmsBylineField.clear();
    cmsBylineField.sendKeys('QA Test -123 #$%^@&');
    expect(cmsBylineField.getAttribute('class')).toContain('ng-valid');
    browser.sleep(3000);
  });
});
