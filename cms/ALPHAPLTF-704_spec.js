var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Marketing Page - Component List', function() {
    var cmsAdd = element.all(by.css(browser.params.cmsAddCss)).first();
    var cmsDelete = element.all(by.css(browser.params.cmsDeleteCss)).first();
    var cmsSearchComponent = element.all(by.css(browser.params.cmsSearchComponentCss)).first();
    var cmsSave = element.all(by.css(browser.params.cmsPublishedCss)).first();
    var cmsComponentHeader = element.all(by.xpath(browser.params.cmsComponentsHeaderXpath)).first();
    var cmsLanguage = element.all(by.css(browser.params.cmsLanguageColumnCss)).first();

    it('Login to CMS and Create New Marketing Content ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.goToCreateMarketingContent()
    }); // close it



    it('3 slides were added', function(){
      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click();
      cmsAdd.click();
      cmsAdd.click();
      cmsSave.click()
      browser.waitForAngular();
    }); // close it


    it('Check languages available in Marketing Content', function(){
      expect(cmsLanguage.isDisplayed()).toBe(true);
    }); // close it

    it('Create New Slideshow Content', function(){
      browser.get(browser.params.cmsUrl);
      utils.createSlideShowContent()


    }); // close it

    it('3 slides were added', function(){
      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click();
      cmsAdd.click();
      cmsAdd.click();
      cmsSave.click()
      browser.waitForAngular();
    }); // close it


    it('Check languages available in Slideshow Content', function(){
      expect(cmsLanguage.isDisplayed()).toBe(true);
    }); // close it

}); // close describe
