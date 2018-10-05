var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Create Game Page - Meta Data Fields', function() {
    var randVal = Date.now()
    var cmsArrowUp = element.all(by.css(browser.params.cmsArrowUpCss)).first();
    var cmsArrowDown = element.all(by.css(browser.params.cmsArrowDownCss)).first();
    var cmsMetadataHeader = element.all(by.css(browser.params.cmsMetadataHeaderCss)).first();
    var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    var cmsDescription = element.all(by.id(browser.params.cmsDescriptionId)).first();
    var cmsOGSiteName = element.all(by.id(browser.params.cmsOGSiteNameId)).first();
    var cmsOGURL = element.all(by.id(browser.params.cmsOGURLId)).first();
    var cmsOGDescription = element.all(by.id(browser.params.cmsOGDescriptionId)).first();
    //var cmsOGTitle = element.all(by.id(browser.params.cmsOGTitleId)).first(); -- missing
    var cmsTwitterCard = element.all(by.id(browser.params.cmsTwitterCardId)).first();
    var cmsTwitterURL = element.all(by.id(browser.params.cmsTwitterURLId)).first();
    var cmsTwitterTitle = element.all(by.id(browser.params.cmsTwitterTitleId)).first();
    var cmsTwitterDescription = element.all(by.id(browser.params.cmsTwitterDescriptionId)).first();
    var cmsMetadataError = element.all(by.css(browser.params.cmsMetadataErrorCss)).first();
    var cmsSaveDraft = element.all(by.css(browser.params.cmsSaveDraftCss)).first();

    it('Create Content Page', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.createContentPage()
      browser.waitForAngular();

    }); // close it

    it('Check Metadata Fields', function(){

      //arow checking
      utils.scrollDown()
      expect(cmsArrowDown.isDisplayed()).toBe(true);
      cmsMetadataHeader.click();
      expect(cmsArrowUp.isDisplayed()).toBe(true);
      expect(cmsTitleField.isDisplayed()).toBe(true);
      expect(cmsDescription.isDisplayed()).toBe(true);
      expect(cmsOGSiteName.isDisplayed()).toBe(true);
      expect(cmsOGURL.isDisplayed()).toBe(true);
      expect(cmsOGDescription.isDisplayed()).toBe(true);
      //expect(cmsOGTitle.isDisplayed()).toBe(true); - missing
      expect(cmsTwitterCard.isDisplayed()).toBe(true);
      expect(cmsTwitterURL.isDisplayed()).toBe(true);
      expect(cmsTwitterTitle.isDisplayed()).toBe(true);
      expect(cmsTwitterDescription.isDisplayed()).toBe(true);

    }); // close it

    it('Metadata is not a required field', function(){
      cmsSaveDraft.click();
      expect(cmsMetadataError.isPresent()).toBe(false);


    }); // close it


}); // close describe
