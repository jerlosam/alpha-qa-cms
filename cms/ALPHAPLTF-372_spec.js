var utils = require('../utils/utilities');

describe('Beatrix CMS: Rendering of Marketing Page Form', function() {
  var cmsHeaderTitle = element.all(by.className('bx-panel-header-title')).first();
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
  var cmsLanguageTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsAddImageSection = element(by.id(browser.params.cmsAddImageId));
  var cmsDescriptionContainer = element(by.id(browser.params.cmsLongDescriptionContainerId));
  var cmsComponentsList = element(by.cssContainingText('label',browser.params.cmsComponentsListHeaderText));
  var cmsAddComponentsSection  = element(by.css(browser.params.cmsSearchComponentCss));
  var cmsMetaDataFieldContainer = element(by.css(browser.params.cmsMetaDataFieldContainerCss));
  var cmsDiscardButton = element(by.buttonText(browser.params.cmsDiscardButtonText));
  var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
  var cmsPublishButton = element(by.buttonText(browser.params.cmsPublishButtonText));

  it('Header should be displayed.', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.goToCreateMarketingContent();
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

  it('Add an Image Section should be present.', function(){
    expect(cmsAddImageSection.isPresent()).toBe(true);
  });

  it('Description Section should be displayed.', function(){
    expect(cmsDescriptionContainer.isDisplayed()).toBe(true);
  });

  it('Components List Section should be present.', function(){
    expect(cmsComponentsList.isDisplayed()).toBe(true);
  });

  it('Add Components Section should be present.', function(){
    expect(cmsAddComponentsSection.isDisplayed()).toBe(true);
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
