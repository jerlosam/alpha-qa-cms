var utils = require('../utils/utilities');

describe('Beatrix CMS: Rendering of Content Page Form', function() {
  var cmsHeaderTitle = element.all(by.className('bx-panel-header-title')).first();
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsBylineField = element(by.id(browser.params.cmsBylineFieldId));
  var cmsPageTypeDropdown = element(by.id(browser.params.cmsPageTypeDropdownId));
  var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
  var cmsLanguageTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsCardImageSection = element(by.id(browser.params.cmsCardImageId));
  var cmsPageImageSection = element(by.id(browser.params.cmsPageImageId));
  var cmsDescriptionContainer = element(by.id(browser.params.cmsLongDescriptionContainerId));
  var cmsMetaDataFieldContainer = element(by.css(browser.params.cmsMetaDataFieldContainerCss));
  var cmsDiscardButton = element(by.buttonText(browser.params.cmsDiscardButtonText));
  var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
  var cmsPublishButton = element(by.buttonText(browser.params.cmsPublishButtonText));

  it('Header should be displayed.', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createContentPage();
    expect(cmsHeaderTitle.isDisplayed()).toBe(true);
  });

  it('Internal Name field and label should be displayed.', function(){
    expect(cmsInternalName.isDisplayed()).toBe(true);
    expect(cmsInternalNameLabel.isDisplayed()).toBe(true);
  });

  it('Language tabs should be displayed.', function(){
    for (i=0; i<=cmsLanguageTabs.count(); i++)
    {
      expect(cmsLanguageTabs[i].isDisplayed()).toBe(true);
    }
  });

  it('Title field should be displayed.', function(){
    expect(cmsTitleField.isDisplayed()).toBe(true);
  });

  it('Byline field should be displayed.', function(){
    expect(cmsBylineField.isDisplayed()).toBe(true);
  });

  it('Page Type dropdown should be displayed.', function(){
    expect(cmsPageTypeDropdown.isDisplayed()).toBe(true);
  });

  it('Add Card Image Section should be present.', function(){
    expect(cmsCardImageSection.isPresent()).toBe(true);
  });

  it('Add Page Image Section should be present.', function(){
    expect(cmsPageImageSection.isPresent()).toBe(true);
  });

  it('Description Section should be displayed.', function(){
    expect(cmsDescriptionContainer.isDisplayed()).toBe(true);
  });

  it('MetaData Field Section should be displayed.', function(){
    expect(cmsMetaDataFieldContainer.isDisplayed()).toBe(true);
  });

  it('Discard CTA should be displayed.', function(){
    expect(cmsDiscardButton.isDisplayed()).toBe(true);
  });

  it('Save ad Draft CTA should be displayed.', function(){
    expect(cmsSaveAsDraftButton.isDisplayed()).toBe(true);
  });

  it('Publish CTA should be displayed.', function(){
    expect(cmsPublishButton.isDisplayed()).toBe(true);
  });
});
