var utils = require('../utils/utilities');

describe('Beatrix CMS: Validation of Content Block field/section', function() {
  var cmsCreateNewContent = element(by.css(browser.params.cmsCreateNewContentCss));
  var cmsContentBlockPageType = element(by.css(browser.params.cmsContentBlockPageTypeCss));
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
  var cmsTitleLabel = element(by.xpath(browser.params.cmsTitleLabelXpath));
  var cmsInternalNameLabel = element(by.xpath(browser.params.cmsInternalNameLabelXpath));

 it('Should Display Validation For Required Text Fields', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      browser.driver.sleep(5000);
      utils.goToCreateContentBlock();
      cmsInternalName.click();
      cmsTitleField.click();
      var field = element(by.id('internal-name-form')).element(by.css('.error-msg'));
      expect(field.getText()).toBe('This is a required field.');
      browser.driver.sleep(5000);
      cmsInternalName.click();
      expect(element.all(by.css('bx-input-field-container')).all(by.className('error-msg')).first().getText()).toBe('This is a required field.');
      browser.driver.sleep(5000);

    });

  it('Should Display Validation For Required Section', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      browser.driver.sleep(5000);
      utils.goToCreateContentBlock();
      cmsSaveAsDraftButton.click();
      var field = element(by.id('internal-name-form')).element(by.css('.error-msg'));
      expect(field.getText()).toBe('This is a required field.');
      expect(element.all(by.css('bx-input-field-container')).all(by.className('error-msg')).first().getText()).toBe('This is a required field.');
      browser.driver.sleep(5000);

   });

   it('Required fields should have asterisk (*) on their label', function(){
     browser.manage().deleteAllCookies();
     utils.loginToCms();
     browser.driver.sleep(5000);
     utils.goToCreateContentBlock();
     var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
     expect(cmsInternalNameLabel.getText()).toContain('*');
     expect(cmsTitleLabel.getText()).toContain('*');

   });
});
