var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Add Status on added Slides/Components/Menu Items', function() {
    var cmsSearchComponent = element.all(by.css(browser.params.cmsSearchComponentCss)).first();
    var cmsSave = element.all(by.css(browser.params.cmsPublishedCss)).first();
    var cmsOverlayStatusField = element(by.xpath(browser.params.cmsOverlayStatusFieldXpath));
    var cmsContentTypeListStatusTitle = element(by.id('contentTypeListStatusTitle'))

    it('Add Status on Add New Slides overlay ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.createSlideShowContent();
      browser.sleep(2000);
      cmsSearchComponent.click();
      browser.waitForAngular();
      expect(cmsContentTypeListStatusTitle.isDisplayed()).toBe(true);

    });

    it('Add Status on Add Components overlay ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.goToCreateMarketingContent();
      browser.sleep(2000);
      cmsSearchComponent.click();
      browser.waitForAngular();
      expect(cmsContentTypeListStatusTitle.isDisplayed()).toBe(true);

    });

    it('Add Status on Add New Menu Items overlay', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.sleep(5000);
      browser.waitForAngular();
      utils.goToCreateMenu();
      browser.sleep(2000);
      cmsSearchComponent.click();
      browser.waitForAngular();
      expect(cmsContentTypeListStatusTitle.isDisplayed()).toBe(true);

    });
});
