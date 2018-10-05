var utils = require('../../utils/utilities');
var contentBlockResources = require('../content_block/content_block_common');

describe('Verify Create Content Block Page', function() {
  utils.loginToCms();
  beforeEach(function() {
    //browser.manage().deleteAllCookies();
    browser.refresh();
  });
describe('Verify Content Block Page Fields', function() {
  it('Complete Fields Should Be Displayed', function() {
    utils.goToCreateContentBlock();
    utils.displayHeader('Create New Content Block');
    utils.displayLanguageTab();
    utils.displayInternalNameAndTitleName();
    utils.displayTagsField();
    utils.displayDescriptionBlock();
    utils.contentButtonsVerification();
  });
  it('Internal Name Should Be A Required Field, Has Label, And Accepts Alpha-numeric Characters', function() {

    utils.internalNameValidation();
  });
  it('Title Name Should Be A Required Field, Has Label, And Accepts Any Characters', function() {
      utils.titleValidation();
  });
  it('Body/Description Should Be A Required Field, RT Field, And Has The Ability To Switch HTML or WYSIWYG', function() {
      utils.bodySectionvalidation();
  });
});

describe('Verify Content Block Editing And SAving', function() {
  it('Draft Content Block Should Be Editable', function() {
      contentBlockResources.createContentBlock(browser.params.cmsSaveAsDraftButtonText);
      utils.editPage(browser.params.cmsSaveAsDraftButtonText);
  });
  it('Published Content Block Should Be Editable', function() {
      contentBlockResources.createContentBlock(browser.params.cmsPublishButtonText);
      utils.editPage(browser.params.cmsPublishButtonText);
  });
});
describe('Verify Content Block Creating And Saving', function() {
  it('Draft Content Block Should Be Saved In Draft Content', function() {
      var title = contentBlockResources.createContentBlock(browser.params.cmsSaveAsDraftButtonText);
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/draft')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
  });
  it('Published Content Block Should Be Saved In Published Content', function() {
      var title = contentBlockResources.createContentBlock(browser.params.cmsPublishButtonText);
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/published')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
  });
});

describe('Verify Title Field To Be Optional', function() {
  it('Content Block Should Be Saved As Draft Without Title', function() {
    var title = contentBlockResources.createContentBlockWithoutTitle(browser.params.cmsSaveAsDraftButtonText);
    expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
  });
  it('Content Block Should Be Saved As Published Without Title', function() {
    var title = contentBlockResources.createContentBlockWithoutTitle(browser.params.cmsPublishButtonText);
    expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
  });
  it('Title Field Should Not Display Error Message When Blank', function() {
    utils.goToCreateContentBlock();
    utils.waitForVisibilityOf(element(by.id(browser.params.cmsInternalNameId)));
    element(by.css(browser.params.cmsTitleCss)).click();
    element(by.css(browser.params.cmsTitleCss)).sendKeys(protractor.Key.TAB);
    expect(element(by.className('error-msg')).isPresent()).toBeFalsy();
  });
  });

  describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
    it('Check if Tag Field is displayed for all content type', function() {
      utils.goToCreateContentBlock();
      utils.tagfieldPresent();
    }); //IT
  }); //SUB DESCRIBE

});
//Adding this temporary comment for CRON trigger. This will be deleted later. Thanks :)
