var utils = require('../utils/utilities');
describe ('Edit Game Page', function(){
  //LOGIN
  it ('User should be successfully login', function(){
    browser.manage().deleteAllCookies(); // Delete cookies and browser cache
    browser.get('https://contentmanager.makdev.intra-apps.com/'); //Browser will go to websites
    browser.waitForAngular();
    element.all(by.id('internalLogin-username')).last().sendKeys('cherrero'); //Send an element as name
    element.all(by.id('internalLogin-password')).last().sendKeys('Al3jandro2504!'); // Send an element as password
    element.all(by.id('internalLogin-submit')).click(); //Find Login button and click on it
    browser.sleep(500); //browser waits 3 second
  });

  it('Edit Game and Save as a Draft', function(){
    // First create the game
    var uploadImage = element(by.css('i.icon icon-plus'));
    var cmsAddCardAltText = element(by.id('card_image_en.alt'));

    //Find CrateElement link and click on it
    element.all(by.css('div.sub-navigation-content > nav > a:nth-child(2)')).click();
    browser.sleep(500); //browser waits 3 second
    //Find GameContent button and click on it
    element.all(by.css('a.bx-content-type-button.bx-casino_game_page-type > span.contentType-icon-wrap > img')).click();
    browser.sleep(500); //browser waits 3 second
    //Fill the required fields
    element.all(by.id('internal_name')).first().sendKeys('Internal Name Game Page CH');
    browser.sleep(1000);
    element.all(by.id('title')).first().sendKeys('Title Game Page CH');
    browser.sleep(1000);
    element.all(by.id('game_id_en_0')).first().sendKeys('129');
    browser.sleep(2000);
    element.all(by.css('#locator_game_id_en_0 > div > div:nth-child(1) > bx-dropdown-decorator > figure > ul > li')).click();
    browser.sleep(1000);
    element.all(by.id('short_description')).first().sendKeys('Short Description Game Page CH');
    var cmsLongDescription = element(by.id('tinymce'));
    browser.ignoreSynchronization = true
    browser.switchTo().frame(0);
    expect(cmsLongDescription.isPresent()).toBe(true);  
    browser.switchTo().defaultContent();

    var longDescription = 'Long Description Game Page CH';
    var longDescriptionIframe =  element.all(by.css('iframe')).first();
    browser.ignoreSynchronization = true
    browser.switchTo().frame(0);
    browser.driver.sleep(2000)
    cmsLongDescription.sendKeys(longDescription);
    browser.sleep(2000);

    // utils.uploadImageFile();
    // element(uploadImage.click());
    // expect (cmsAddCardAltText.isPresent()).toBe(true);

    // utils.uploadPage();
    // element(uploadPage.click());
    // expect (cmsAddCardAltText.isPresent()).toBe(true);

    //Click on Save as Published
    element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
    var publishTab = element.all(by.css('li.active')).getText();
    publishTab.then(console.log);
    expect(publishTab.isPresent()).toBe(true);

    //Click on created Game to Edit it
    var firstPublish = element.all(by.css('td.bx-content-name')).first().getText();
    firstPublish.then(console.log);
     if (firstPublish == internalName) {
       return ok;
     };
     element.all(by.css('td.bx-content-name')).first().click();
     var editGame = element(by.css('span.bx-panel-header-title')).getText();
     editGame.then(console.log);

     if (editGame == 'Edit Casino Game Page'){
       return ok;
     };

     element.all(by.id('internal_name')).first().sendKeys('Edited');

     element(by.css('button.custom-cta.tertiary.cta-large')).click();
     browser.sleep(1000);
     //Darft Tab is displayed and the Game on it
     var darftTab = element.all(by.css('li.active')).getText();
     darftTab.then(console.log);
     expect(darftTab.isPresent()).toBe(true);
     //Internal name is updated
     var draftGame = element.all(by.css('td.bx-content-name')).first().getText();
     draftGame.then(console.log);
      if (draftGame == internalName + 'Edited') {
        return ok;
      };

      //Click on Draf to edit it and Publish
      element.all(by.css('td.bx-content-name')).first().click();
      var editGameDraft = element(by.css('span.bx-panel-header-title')).getText();
      editGameDraft.then(console.log);

      if (editGameDraft == 'Edit Casino Game Page'){
        return ok;
      };

      element.all(by.id('internal_name')).first().sendKeys('Publish');

      element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
      browser.sleep(1000);
      //Darft Tab is displayed and the Game on it
      var publishTab1 = element.all(by.css('li.active')).getText();
      publishTab1.then(console.log);
      expect(publishTab1.isPresent()).toBe(true);
      //Internal name is updated
      var publishGame = element.all(by.css('td.bx-content-name')).first().getText();
      draftGame.then(console.log);
       if (publishGame == internalName + 'Edited' = 'Publish') {
         return ok;
       };



  });


});
