var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Content Versions', function() {
    var randVal = Date.now()
    var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();
    var cmsTitleName = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    //var cmsBackground = element.all(by.id(browser.params.cmsBackgroundId)).first();
    //var cmsTextColor = element.all(by.id(browser.params.cmsTextColorId)).first();
    //var cmsLink = element.all(by.id(browser.params.cmsLinkId)).first();
    var cmsSaveDraft = element.all(by.css(browser.params.cmsSaveDraftCss)).first();
    var cmsPublished = element.all(by.css(browser.params.cmsPublishedCss)).first();
    var cmsSearchComponent = element.all(by.css(browser.params.cmsSearchComponentCss)).first();
    var cmsSave = element.all(by.css(browser.params.cmsPublishedCss)).first();
    var cmsAdd = element.all(by.css(browser.params.cmsAddCss)).first();
    var cmsDelete = element.all(by.css(browser.params.cmsDeleteCss)).first();


    it('Create Content', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
      utils.createSlideShowContent()
    }); // close it

    it('Create Draft - 1.0', function() {

      cmsInternalName.sendKeys(randVal);
      cmsTitleName.sendKeys(randVal);



      cmsSearchComponent.click();
      browser.waitForAngular();
      cmsAdd.click()
      cmsSave.click()
      browser.waitForAngular();


      utils.scrollUp()



      let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      BodogBrandLanguage.get(0).click();
      BodogBrandLanguage.get(1).click();
      BodogBrandLanguage.get(2).click();

      cmsSaveDraft.click();
      browser.waitForAngular();
      browser.sleep(9000);

  }); // close it

  it('Draft Content Should be 1.0', function(){
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("1.0");
    browser.sleep(9000);
  }); // close it


  it('Draft Content Should be 1.1', function(){
    var updateText = " d";
    cmsInternalName.sendKeys(updateText);
    cmsSaveDraft.click();
    browser.waitForAngular();
    browser.sleep(9000);
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("1.1");

  }); // close it

  it('Draft Content Should be 1.2', function(){
    var updateText = " d";
    cmsInternalName.sendKeys(updateText);
    cmsSaveDraft.click();
    browser.waitForAngular();
    browser.sleep(9000);
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("1.2");

  }); // close it


  it('Edit Draft Content 1.2 then Publish -- Current Version 1.3', function(){
    var updateText = " p";
    cmsInternalName.sendKeys(updateText);
    cmsPublished.click();
    browser.waitForAngular();
    browser.sleep(9000);
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("1.3");

  }); //

  it('Create New Draft from Published Content then Publish - Current Version 2.0', function(){
    var updateText = " p";
    cmsInternalName.sendKeys(updateText);
    cmsPublished.click();
    browser.waitForAngular();
    browser.sleep(9000);
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("2.0");

  }); //

  it('Create New Draft from Published Content 2.0 then save as Draft - Current Version 3.0', function(){
    var updateText = " d";
    cmsInternalName.sendKeys(updateText);
    cmsSaveDraft.click();
    browser.waitForAngular();
    browser.sleep(9000);
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("3.0");

  }); //



  it('Edit Draft Content 3.1', function(){
    var updateText = " d";
    cmsInternalName.sendKeys(updateText);
    cmsSaveDraft.click();
    browser.waitForAngular();
    browser.sleep(9000);
    element(by.xpath("//*[contains(text(),'"+ randVal + "')]")).click();
    var currentVersion = element(by.css('span.bx-panel-header-version-value')).getText();
    expect(currentVersion).toBe("3.1");

  }); //



}); // close describe
