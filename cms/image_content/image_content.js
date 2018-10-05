var utils = require('../../utils/utilities');
var imageContentResources = require('../image_content/image_content_common');
var contentBlockResources = require('../content_block/content_block_common');

describe('Create Image Content Page', function() {

  utils.loginToCms();
  beforeEach(function() {
    browser.refresh();
  });
describe('Verify Image Content Page Fields', function() {
  it('Complete Fields Should Be Displayed', function() {
    utils.goToCreateImageContent();
    browser.sleep(3000);
    utils.displayHeader('Create New Image');
    // utils.displayLanguageTab();
    // utils.displayInternalNameAndTitleName();
    // utils.displayAddImageTab();
    // utils.contentButtonsVerification();
  });
  it('Internal Name Should Be A Required Field, Has Label, And Accepts Alpha-numeric Characters', function() {
    utils.internalNameValidation();
  });
  it('Title Name Should Be A Required Field, Has Label, And Accepts Any Characters', function() {
      utils.titleValidation();
  });
  it('If the brand is Bodog88, it would return 3 language tabs (en,sc,pt), EN As Active And Default Language', function() {
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
describe('Verify Image Content Editing And Saving', function() {
  it('Draft Image Content Should Be Editable', function() {
      imageContentResources.createImageContent(browser.params.cmsSaveAsDraftButtonText);
      utils.editPage(browser.params.cmsSaveAsDraftButtonText);
  });
  it('Published Image Content Should Be Editable', function() {
      imageContentResources.createImageContent(browser.params.cmsPublishButtonText);
      utils.editPage(browser.params.cmsPublishButtonText);
  });
});
describe('Verify Image Content Creating And Saving', function() {
  it('Draft Image Content Should Be Saved In Draft Content', function() {
      var title = imageContentResources.createImageContent(browser.params.cmsSaveAsDraftButtonText);
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/draft')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
  });
  it('Published Image Content Should Be Saved In Published Content', function() {
      var title = imageContentResources.createImageContent(browser.params.cmsPublishButtonText);
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/published')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
  });
});
describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
  it('Check if Tag Field is displayed for all content type', function() {
    utils.goToCreateImageContent();
    utils.tagfieldPresent();
  }); //IT
}); //SUB DESCRIBE

});
