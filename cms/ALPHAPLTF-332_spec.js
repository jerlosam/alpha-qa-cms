var utils = require('../utils/utilities');

describe('Beatrix CMS: Validation of Content Page field/section', function() {
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsPageTypeDropdown = element(by.id(browser.params.cmsPageTypeDropdownId));
  var addImageHeader = element(by.className('imageselector-header'));
  var addImageLink = element(by.css('div.widget-upload')).element(by.className('custom-link'));
  var cmsCardImageAlt = element(by.id('card_image_en.alt'));
  var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
  var cmsAddCardImageLabel = element.all(by.className('imageselector-label')).get(0);
  var cmsAddPageImageLabel = element.all(by.className('imageselector-label')).get(1);
  it('Required Text Fields Should Change Color to Red and Display Inline Error Message When Invlidated', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createContentPage();
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createContentPage();
    cmsInternalName.click();
    element(by.className('hint-msg')).click();
    expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
    cmsTitleField.click();
    element(by.className('hint-msg')).click();
    expect(cmsTitleField.getAttribute('class')).toContain('ng-invalid');
    var cmsRequiredFieldMessage = element(by.className('error-msg'));
    expect (cmsRequiredFieldMessage.isPresent()).toBe(true);
   });

  it('Required Sections Should Change Color to Red and Display Inline Error Message When Invlidated', function(){
    cmsSaveAsDraftButton.click();
    expect((cmsAddCardImageLabel.element(by.className('error-msg'))).isPresent()).toBe(true);
    expect((cmsAddPageImageLabel.element(by.className('error-msg'))).isPresent()).toBe(true);
  });

  it('Required fields should have asterisk (*) on their label', function(){
    var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
    var cmsTitleLabel = element(by.xpath("/html/body/bx-app/bx-app/div[2]/div/bx-content-type-selector-outlet/bx-content-type-form/bx-panel/div/div[2]/div/bx-content-type-form-body/bx-form/form/bx-tabs/div/bx-form-group[1]/div/fieldset[1]/bx-form-group/div/bx-input-field-container[1]/div/label"));
    expect(cmsInternalNameLabel.getText()).toContain('*');
    expect(cmsTitleLabel.getText()).toContain('*');
    expect(cmsAddCardImageLabel.getText()).toContain('*');
    expect(cmsAddPageImageLabel.getText()).toContain('*');
  });
});
