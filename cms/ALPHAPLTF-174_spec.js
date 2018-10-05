describe('Edit Slide Show Content',function(){
  //LOGIN
  it ('User should be successfully login', function(){
    var site ='https://contentmanager.makdev.intra-apps.com/';
    var username = 'cherrero';
    var password = 'Al3jandro2504!';

    browser.manage().deleteAllCookies(); // Delete cookies and browser cache
    browser.get(site); //Browser will go to websites
    browser.waitForAngular();
    element.all(by.id('internalLogin-username')).last().sendKeys(username); //Send an element as name
    element.all(by.id('internalLogin-password')).last().sendKeys(password); // Send an element as password
    element.all(by.id('internalLogin-submit')).click(); //Find Login button and click on it
    browser.sleep(500); //browser waits 3 second
  });

  it('Go to create Slideshow', function(){
    var internalName = 'Internal Name Slideshow CH 25';
    var title = 'Title Slideshow CH 25';

    //Find CrateElement link and click on it
    element.all(by.css('div.sub-navigation-content > nav > a:nth-child(2)')).click();
    browser.sleep(500); //browser waits 3 second
    //Find Slideshow button and click on it
    element.all(by.css('a.bx-content-type-button.bx-slideshow-type > span.contentType-icon-wrap > img')).click();
    browser.sleep(500); //browser waits 3 second
    //Fill the required fields
    element.all(by.id('internal_name')).first().sendKeys(internalName);
    browser.sleep(500);
    element.all(by.id('title')).first().sendKeys(title);
    browser.sleep(500);
    // Click in Search Content
    element.all(by.css('bx-form-group.localised-tab.localised-tab-en.form-tabs-content.clearfix > div > bx-dynamic-loader-component > bx-content-selector > div > div.custom-field.content-selector-panel > div.widget-container.content-selector-container > div > button')).click();
    browser.sleep(1000);
    //CLick on Add button in the first content
    element.all(by.css('#fff33a53-41b0-475c-86ba-f27d1be992a8')).click();
    browser.sleep(500);
    //Click on Save button in the overlay
    element.all(by.css('button.custom-cta.primary.cta-large')).click();
    browser.sleep(500);
    //Click on ES tab
    element.all(by.css('bx-content-type-form-body > bx-form > form > bx-tabs > div > nav > ul > li:nth-child(2)')).click();
    browser.sleep(500);
    //CLick on PT tab
    element.all(by.css('bx-content-type-form-body > bx-form > form > bx-tabs > div > nav > ul > li:nth-child(3)')).click();
    browser.sleep(500);
    //Click on Save buttom
    element.all(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
    browser.sleep(5000);
    });

  it('Edit Slideshow', function(){
    //Click ok the first content (just to be created) to Edit it
    element.all(by.css('#contentManagementList > tr:nth-child(1) > td.bx-content-name > span')).click();
    browser.sleep(1000);

    var editSlideshowTitlePage = element(by.css('bx-content-type-form-header > span')).getText();
    editSlideshowTitlePage.then(console.log);
    expect(editSlideshowTitlePage).toEqual('Edit Slideshow') ;
    browser.sleep(1000);
    element.all(by.id('internal_name')).first().sendKeys('Edited');
    browser.sleep(2000);
    element.all(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
    browser.sleep(5000);
  });



});
