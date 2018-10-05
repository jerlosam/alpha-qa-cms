var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Marketing Page - Component List', function() {
    var randVal = Date.now()
    var cmsAdd = element.all(by.css(browser.params.cmsAddCss)).first();
    var cmsDelete = element.all(by.css(browser.params.cmsDeleteCss)).first();
    var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();
    var cmsTitleName = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    var cmsSearchComponent = element.all(by.css(browser.params.cmsSearchComponentCss)).first();
    var cmsSave = element.all(by.css(browser.params.cmsPublishedCss)).first();
    var cmsComponentHeader = element.all(by.xpath(browser.params.cmsComponentsHeaderXpath)).first();
    var cmsDisabledArrowUp = element.all(by.css(browser.params.cmsDisabledArrowUpCss)).first();
    var cmsDisabledArrowDown = element.all(by.css(browser.params.cmsDisabledArrowDownCss)).first();
    var cmsDeleteIcon = element.all(by.css(browser.params.cmsDeleteIconCss)).first();
    var cmsNoComponents = element.all(by.xpath(browser.params.cmsNoComponentsAddedXpath)).first();
    var cmsComponent1 = element(by.css('#items_en > table:nth-child(1) > thead'));
    var cmsComponent2 = element(by.css('#items_en > table:nth-child(2) > thead'));
    var cmsComponent3 = element(by.css('#items_en > table:nth-child(3) > thead'));

    it('Login to ', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.goToCreateMarketingContent()
    }); // close it

    it('Scenario 3: No Slides Added', function(){
      expect(cmsNoComponents.isDisplayed()).toBe(true);


    }); // close it


    it('Fill All Items', function(){
      utils.goToCreateMarketingContent()
      cmsInternalName.sendKeys(randVal);
      cmsTitleName.sendKeys(randVal);
    }); // close it

    it('Add Slides', function(){
      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click()
      cmsSave.click()
      browser.waitForAngular();

    }); // close it

    it('Check Disabled Buttons', function(){
      expect(cmsDisabledArrowUp.isDisplayed()).toBe(true);
      expect(cmsDisabledArrowDown.isDisplayed()).toBe(true);

    }); // close it

    it('Scenario 2: Remove Slide', function(){
      expect(cmsDeleteIcon.isDisplayed()).toBe(true);
      cmsSearchComponent.click();
      cmsDelete.click()
      cmsSave.click()
      browser.waitForAngular();
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


    it('Check Enabled / Disabled Button per Row', function(){

      //Check first row
      expect(cmsComponent1.element(by.css(browser.params.cmsDisabledArrowUpCss)).isDisplayed()).toBe(true);

      //Check second row
      expect(cmsComponent2.element(by.css(browser.params.cmsDisabledArrowUpCss)).isPresent()).toBe(false);
      expect(cmsComponent2.element(by.css(browser.params.cmsDisabledArrowUpCss)).isPresent()).toBe(false);

      //Check third row
      expect(cmsComponent3.element(by.css(browser.params.cmsDisabledArrowDownCss)).isDisplayed()).toBe(true);

    }); // close it


}); // close describe
