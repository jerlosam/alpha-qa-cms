describe ('Create Marketing Page - Add Components', function(){

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

  it('Go to create Marketing Page', function(){
    var internalName = 'Internal Name Marketing Page CH';
    var title = 'Title Marketing Page CH';

    //Find CrateElement link and click on it
    element.all(by.css('div.sub-navigation-content > nav > a:nth-child(2)')).click();
    browser.sleep(500); //browser waits 3 second
    //Find MarketingPage button and click on it
    element.all(by.css('a.bx-content-type-button.bx-marketing_page-type > span.contentType-icon-wrap')).click();
    browser.sleep(500); //browser waits 3 second
    //Fill the required fields
    element.all(by.id('internal_name')).first().sendKeys(internalName);
    browser.sleep(1000);
    element.all(by.id('title')).first().sendKeys(title);
    browser.sleep(1000);



  });

// it ('Click on Add Component', function(){
//
//     element.all(by.css('')).click(); //Find AddComponent link and click on it
//
//     //Overlay should be displayed
//     var overlay = element(by.css(''));
//     expect(overlay.isDisplayed()).toBe(true);
//     browser.sleep(3000); //browser wait 3 second
//
//   });
  // it ('Diferent elements of AddComponent overlay are displayed', function(){
  //
  //   //AddComponent title in Header should be displayed
  //   var addComponent = element(by.css(''));
  //   expect(addComponent.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //closeButton should be displayed
  //   var closeButton = element(by.css(''));
  //   expect(closeButton.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //Name field should be displayed
  //   var nameField = element(by.css(''));
  //   expect(nameField.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //Type field should be displayed
  //   var typeField = element(by.css(''));
  //   expect(typeField.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //Page Type field should be displayed
  //   var pageTypeField = element(by.css(''));
  //   expect(pageTypeField.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //Add CTA should be displayed
  //   var addCta = element(by.css(''));
  //   expect(addCta.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //Cancel CTA should be displayed
  //   var cancelCta = element(by.css(''));
  //   expect(cancelCta.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  //   //Save CTA should be displayed
  //   var saveCta = element(by.css(''));
  //   expect(saveCta.isDisplayed()).toBe(true);
  //   browser.sleep(1000); //browser wait 1 second
  //
  // });

  // it ('Click on Add CTA and Switch to Remove CTA', function(){
  //
  //   element.all(by.css('')).click(); //Find  Add CTA and click on it
  //
  //   //Remove CTA should be displayed
  //   var removeCta = element(by.css(''));
  //   expect(removeCta.isDisplayed()).toBe(true);
  //   browser.sleep(3000); //browser wait 3 second
  //
  // });
  //
  // it ('Click on Remove CTA and Switch to Add CTA', function(){
  //
  //   element.all(by.css('')).click(); //Find  Remove CTA and click on it
  //
  //   //Add CTA should be displayed
  //   var addCta = element(by.css(''));
  //   expect(addCta.isDisplayed()).toBe(true);
  //   browser.sleep(3000); //browser wait 3 second
  //
  // });
  //
  // it ('Click on Cancel CTA and AddComponet Overlay is not displayed', function(){
  //
  //     element.all(by.css('')).click(); //Find  Cancel CTA and click on it
  //
  //    //Overlay should not be displayed
  //     var overlay = element(by.css(''));
  //     expect(overlay.isDisplayed()).toBe(false);
  //     browser.sleep(3000); //browser wait 3 second
  //
  // });
  //
  // it ('Add slide on Marketing Page', function(){
  //     element.all(by.css('')).click(); //Find AddComponent link and click on it
  //     var slide = element(by.css('')).getText(); //Save in a var the slide which is added
  //     element.all(by.css('')).click(); //Find SlideToAdd  and click on it
  //     element.all(by.css('')).click(); //Find Save CTA and click on it
  //
  //    //Saved Slide should be displayed and should be the same that it was added from overlay
  //     var savedSlide = element(by.css('')).getText();
  //     expect(savedSlide).toEqual(slide);
  //     browser.sleep(3000); //browser wait 3 second
  //
  //
  // });

  it ('Pagination is working', function(){
          element.all(by.css('')).click(); //Find AddComponent link and click on it
          //Pagination Next and Previous links should be displayed
            var paginationNext = element(by.css(''));
            expect(paginationNext.isDisplayed()).toBe(true);
            browser.sleep(1000); //browser wait 1 second
            // First page Previous link is disabled
            var paginationPrevious = element(by.css(''));
            expect(paginationPrevious.isDisplayed()).toBe(false);
            browser.sleep(1000); //browser wait 1 second

            //Click on Next link
            element.all(by.css('')).click();
            var paginationPrevious = element(by.css(''));
            expect(paginationPrevious.isDisplayed()).toBe(true);
            browser.sleep(1000); //browser wait 1 second
            //While Next link is true make click on it
            if (((paginationNext.isDisplayed()).toBe(true))) {
                  element.all(by.css('')).click();
                  expect(paginationPrevious.isDisplayed()).toBe(true);
            } else {
                expect(paginationNext.isDisplayed()).toBe(false);
            };

  });

  it ('Empty Add Component overlay list', function(){
    //Create a new Marketing Page to make this test
      element.all(by.css('div.sub-navigation-content > nav > a:nth-child(2)')).click(); //Find createNewElement link and click on it
      element.all(by.css('a.bx-content-type-button.bx-slideshow-type > span.contentType-icon-wrap > img')).click(); //Find slideshow button and click on it

      element.all(by.css('')).click(); //Find AddComponent link and click on it

      //No Component Messasge is displayed
      var noComponentFound= element(by.css(''));
      expect(noComponentFound.isDisplayed()).toBe(true);

  });

  // it ('Add and Remove CTA are working', function(){
  //   //Create a new Marketing Page to make this test
  //   element.all(by.css('div.sub-navigation-content > nav > a:nth-child(2)')).click(); //Find createNewElement link and click on it
  //   element.all(by.css('a.bx-content-type-button.bx-slideshow-type > span.contentType-icon-wrap > img')).click(); //Find slideshow button and click on it
  //
  //   element.all(by.css('')).click(); //Find AddComponent link and click on it
  //   //Add some slides
  //   var slide1 = element(by.css('')).getText(); //Save in a var the slide1 which is added
  //   element.all(by.css('')).click(); //Find Slide1ToAdd  and click on it
  //   var slide2 = element(by.css('')).getText(); //Save in a var the slide2 which is added
  //   element.all(by.css('')).click(); //Find Slide2ToAdd  and click on it
  //   element.all(by.css('')).click(); //Find Save CTA and click on it
  //   browser.sleep(2000); //browser wait 2 second
  //   //Saved Slides should be displayed and should be the sames that they were added from overlay
  //    var savedSlide1 = element(by.css('')).getText();
  //    expect(savedSlide1).toEqual(slide1);
  //    var savedSlide2 = element(by.css('')).getText();
  //    expect(savedSlide2).toEqual(slide2);
  //    browser.sleep(2000); //browser wait 2 second
  //
  //    element.all(by.css('')).click(); //Find AddComponent link and click on it again
  //    //Remove one of slides
  //      element.all(by.css('')).click(); //Find Slide1ToRemove and click on it
  //      element.all(by.css('')).click(); //Find Save CTA and click on it
  //      browser.sleep(2000); //browser wait 2 second
  //      //Removed Slides should not be displayed
  //    expect(savedSlide1.isDisplayed()).toBe(false); // The slide1 is not saved anymore
  //
  // });

});
