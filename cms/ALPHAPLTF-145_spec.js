var utils = require('../utils/utilities');

describe('Beatrix CMS: Create Slide Show Content', function() {
  var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsSearchComponent = element(by.css(browser.params.cmsSearchComponentCss));
  var cmsAddComponent = element.all(by.buttonText('+ Add')).first();
  var cmsBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
  var cmsSaveAsDraft = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
  it('Clicking on Save CTA saves the content and redirects to content list', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createSlideShowContent();
    var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
    cmsInternalName.sendKeys('QA Test -123 Internal Name');
    cmsTitleField.sendKeys("QA Test -123 Title");
    cmsSearchComponent.click();
    cmsAddComponent.click();
    element(by.css('section.modal-body')).element(by.css('button.custom-cta.primary.cta-large')).click();
    element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li')).get(1).click();
    element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li')).get(2).click();
    cmsSaveAsDraft.click();
    browser.sleep(5000);
    expect(browser.getCurrentUrl()).toBe('https://contentmanager.makdev.intra-apps.com/content/list/draft');
    expect(element.all(by.css('td.bx-content-name')).getText()).toContain('QA Test -123 Internal Name');
  });
});
