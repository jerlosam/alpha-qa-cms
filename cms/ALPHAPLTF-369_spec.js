var utils = require('../utils/utilities');

describe('Beatrix CMS: Rendering of Slide Show Content Form', function() {
  var cmsHeaderTitle = element.all(by.className('bx-panel-header-title')).first();
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
  var cmsLanguageTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsSearchComponent = element(by.id(browser.params.cmsSearchComponentId));
  var cmsDiscardButton = element(by.buttonText(browser.params.cmsDiscardButtonText));
  var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
  var cmsPublishButton = element(by.buttonText(browser.params.cmsPublishButtonText));

  it('Header should be displayed.', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createSlideShowContent();
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

  it('Add new slide section should be displayed.', function(){
    expect(cmsSearchComponent.isDisplayed()).toBe(true);
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
