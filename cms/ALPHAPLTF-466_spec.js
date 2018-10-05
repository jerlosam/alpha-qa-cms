var utils = require('../utils/utilities');

describe('[New] Beatrix CMS: Display a success notification upon saving the Content successfully', function() {
  utils.loginToCms();
  browser.waitForAngular();


  it('Success Notification Should Be Displayed When Content Is Saved As Draft', function(){
    utils.goToCreateMarketingContent();
    browser.waitForAngular();
    utils.createContent("marketing", browser.params.cmsSaveAsDraftButton);
    browser.sleep(3000);
    expect(element(by.css('bx-notification-alert')).element(by.className('custom-notification success alert')).isDisplayed()).toBe(true);
    expect(element(by.css('bx-notification-alert')).element(by.className('custom-notification success alert')).getText()).toEqual('The content was successfully saved.');
    expect(element(by.css('bx-content-type-form-footer')).element(by.className('custom-cta primary cta-large custom-cta_last')).isEnabled()).toBe(false);
    expect(element(by.css('bx-content-type-form-footer')).element(by.className('custom-cta tertiary cta-large')).isEnabled()).toBe(false);
    expect(element(by.css('bx-content-type-form-footer')).element(by.className('custom-cta tertiary custom-cta_first')).isEnabled()).toBe(false);
    element(by.className('custom-notification success alert')).element(by.className('icon-close')).click();
  });
  it('Success Notification Should Be Displayed When Content Is Saved As Publish', function(){
    utils.goToCreateMarketingContent();
    browser.waitForAngular();
    utils.createContent("marketing", browser.params.cmsSaveAsPublishButton);
    browser.sleep(5000);
    expect(element(by.css('bx-notification-alert')).element(by.className('custom-notification success alert')).isDisplayed()).toBe(true);
    expect(element(by.css('bx-notification-alert')).element(by.className('custom-notification success alert')).getText()).toEqual('The content was successfully published.');
    expect(element(by.css('bx-content-type-form-footer')).element(by.className('custom-cta primary cta-large custom-cta_last')).isEnabled()).toBe(false);
    expect(element(by.css('bx-content-type-form-footer')).element(by.className('custom-cta tertiary cta-large')).isEnabled()).toBe(false);
    expect(element(by.css('bx-content-type-form-footer')).element(by.className('custom-cta tertiary custom-cta_first')).isEnabled()).toBe(false);
  });
  });
