describe('Test Rich Text - Slide Content', function() {

it ('User should be successfully login', function(){
  //lOGIN
  browser.manage().deleteAllCookies(); // Delete cookies and browser cache
  browser.get('https://contentmanager.makdev.intra-apps.com/'); // browser will go to websites
  //browser.waitForAngular();
  element.all(by.id('internalLogin-username')).last().sendKeys('cherrero');//Send an element as name
  element.all(by.id('internalLogin-password')).last().sendKeys('Al3jandro2504!');//Send an element as pssw
  element.all(by.id('internalLogin-submit')).click(); //Find login button and click on it
  browser.sleep(3000); //browser wait 5 second


});

it ('Go to create  new slideshow', function(){

  element.all(by.css('body > bx-app > bx-app > div.header > bx-navigation > div > div.sub-navigation-content > nav > a:nth-child(2)')).click(); //Find createNewElement link and click on it
  element.all(by.css('body > bx-app > bx-app > div.content > div > bx-content-type-selector-outlet > bx-content-type-selector > bx-panel > div > div:nth-child(2) > span > nav > a.bx-content-type-button.bx-slideshow-type > span.contentType-icon-wrap > img')).click(); //Find slideshow button and click on it

  //slideshow should be displayed
  var slideshowContainer = element(by.css('body > bx-app > bx-app > div.content > div > bx-content-type-selector-outlet > bx-content-type-form > bx-panel > div > div:nth-child(2) > div > bx-content-type-form-body > bx-form > form > bx-tabs'));
  expect(slideshowContainer.isDisplayed()).toBe(true);
  browser.sleep(3000); //browser wait 3 second
});
/*
it ('Click on Search Component', function(){

  element.all(by.css('')).click(); //Find SearchElement link and click on it

  //Overlay should be displayed
  var overlay = element(by.css(''));
  expect(overlay.isDisplayed()).toBe(true);
  browser.sleep(3000); //browser wait 3 second

});

it ('Diferent elements of SearchComponent overlay are displayed', function(){

  //AddComponent title in Header should be displayed
  var addComponent = element(by.css(''));
  expect(addComponent.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //closeButton should be displayed
  var closeButton = element(by.css(''));
  expect(closeButton.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //Name field should be displayed
  var nameField = element(by.css(''));
  expect(nameField.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //Type field should be displayed
  var typeField = element(by.css(''));
  expect(typeField.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //Add CTA should be displayed
  var addCta = element(by.css(''));
  expect(addCta.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //Cancel CTA should be displayed
  var cancelCta = element(by.css(''));
  expect(cancelCta.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //Save CTA should be displayed
  var saveCta = element(by.css(''));
  expect(saveCta.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

  //Number Pagination should be displayed
  var pagination = element(by.css(''));
  expect(pagination.isDisplayed()).toBe(true);
  browser.sleep(1000); //browser wait 1 second

});

it ('Click on Add CTA and Switch to Remove CTA', function(){

  element.all(by.css('')).click(); //Find  Add CTA and click on it

  //Remove CTA should be displayed
  var removeCta = element(by.css(''));
  expect(removeCta.isDisplayed()).toBe(true);
  browser.sleep(3000); //browser wait 3 second

});

it ('Click on Remove CTA and Switch to Add CTA', function(){

  element.all(by.css('')).click(); //Find  Remove CTA and click on it

  //Add CTA should be displayed
  var addCta = element(by.css(''));
  expect(addCta.isDisplayed()).toBe(true);
  browser.sleep(3000); //browser wait 3 second

});

it ('Click on Cancel CTA and Switch to Add CTA', function(){

    element.all(by.css('')).click(); //Find  Cancel CTA and click on it

   //Overlay should not be displayed
    var overlay = element(by.css(''));
    expect(overlay.isDisplayed()).toBe(false);
    browser.sleep(3000); //browser wait 3 second

});

it ('Add slide on Slideshow', function(){
    element.all(by.css('')).click(); //Find SearchElement link and click on it
    var slide = element(by.css('')).getText(); //Save in a var the slide which is added
    element.all(by.css('')).click(); //Find SlideToAdd  and click on it
    element.all(by.css('')).click(); //Find Save CTA and click on it

   //Saved Slide should be displayed and should be the same that it was added from overlay
    var savedSlide = element(by.css('')).getText();
    expect(savedSlide).toEqual(slide);
    browser.sleep(3000); //browser wait 3 second


});

it ('Pagination is working', function(){
        element.all(by.css('')).click(); //Find SearchElement link and click on it
        var firstNumberFirstPage = element(by.css('')).getColour();
        var secondNumberFirstPage = element(by.css('')).getColour();
        //First and second number has not the same color, because  only the first is which is highlited
        expect(firstNumberFirstPage).not.toEqual(secondNumberFirstPage);
        browser.sleep(1000); //browser wait 1 second
        element.all(by.css('')).click(); //Find number 2 or another number of pagination an click on it
        var firstNumberSecondPage = element(by.css('')).getColour();
        var secondNumberSecondPage = element(by.css('')).getColour();
        //First number in first page has the same color than secon number y second page because now this is which is highlited
        expect(firstNumberFirstPage).toEqual(secondNumberSecondPage);
        //First and second number has not the same color, because  only the second is which is highlited
        expect(firstNumberSecondPage).not.toEqual(secondNumberSecondPage);
        //Saved Slide should be displayed and should be the same that it was added from overlay
        browser.sleep(3000); //browser wait 3 second
});

it ('Add and Remove CTA are working', function(){
  //Create a new slideshow to make this test
  element.all(by.css('body > bx-app > bx-app > div.header > bx-navigation > div > div.sub-navigation-content > nav > a:nth-child(2)')).click(); //Find createNewElement link and click on it
  element.all(by.css('body > bx-app > bx-app > div.content > div > bx-content-type-selector-outlet > bx-content-type-selector > bx-panel > div > div:nth-child(2) > span > nav > a.bx-content-type-button.bx-slideshow-type > span.contentType-icon-wrap > img')).click(); //Find slideshow button and click on it

  element.all(by.css('')).click(); //Find SearchElement link and click on it
  //Add some slides
  var slide1 = element(by.css('')).getText(); //Save in a var the slide1 which is added
  element.all(by.css('')).click(); //Find Slide1ToAdd  and click on it
  var slide2 = element(by.css('')).getText(); //Save in a var the slide2 which is added
  element.all(by.css('')).click(); //Find Slide2ToAdd  and click on it
  element.all(by.css('')).click(); //Find Save CTA and click on it
  browser.sleep(2000); //browser wait 2 second
  //Saved Slides should be displayed and should be the sames that they were added from overlay
   var savedSlide1 = element(by.css('')).getText();
   expect(savedSlide1).toEqual(slide1);
   var savedSlide2 = element(by.css('')).getText();
   expect(savedSlide2).toEqual(slide2);
   browser.sleep(2000); //browser wait 2 second

   element.all(by.css('')).click(); //Find SearchElement link and click on it again
   //Remove one of slides
     element.all(by.css('')).click(); //Find Slide1ToRemove and click on it
     element.all(by.css('')).click(); //Find Save CTA and click on it
     browser.sleep(2000); //browser wait 2 second
     //Removed Slides should not be displayed
   expect(savedSlide1.isDisplayed()).toBe(false); // The slide1 is not saved anymore

});
*/
});
