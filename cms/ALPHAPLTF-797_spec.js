var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Add Status on added Slides/Components/Menu Items', function() {
    var cmsSearchComponent = element.all(by.id(browser.params.cmsSearchComponentId));
    var cmsAdd = element.all(by.css(browser.params.cmsAddCss)).first();
    var cmsSearchComponent = element.all(by.css(browser.params.cmsSearchComponentCss)).first();
    var cmsSave = element.all(by.css(browser.params.cmsPublishedCss)).first();
    var cmsItemStatus = element(by.xpath(browser.params.cmsItemStatusXpath));
    var cmsSaveChangesNoButton = element(by.xpath(browser.params.cmsSaveChangesNoButtonXpath));

    it('Add Status on added slideshow ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.createSlideShowContent();
      browser.sleep(2000);
      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click()
      cmsSave.click()
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/new/slideshow')
      expect(cmsItemStatus.isDisplayed()).toBe(true);

    });

    it('Add Status on added component ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.sleep(5000);
      browser.waitForAngular();
      utils.goToCreateMarketingContent();
      browser.sleep(2000);
      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click()
      cmsSave.click()
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/new/marketing_page')
      expect(cmsItemStatus.isDisplayed()).toBe(true);

    });

    it('Add Status on added Menu Item ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.sleep(5000);
      browser.waitForAngular();
      utils.goToCreateMenu();
      browser.sleep(2000);
      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click()
      cmsSave.click()
      browser.waitForAngular();
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/new')
      expect(cmsItemStatus.isDisplayed()).toBe(true);

    });
});
