var utils = require('../utils/utilities');
describe ('Create Content Page - Add Components', function(){

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

  it('Go to create Content Page', function(){
    var internalName = 'Internal Name Content Page CH';
    var title = 'Title Content Page CH';

    //Find CrateElement link and click on it
    element.all(by.css('div.sub-navigation-content > nav > a:nth-child(2)')).click();
    browser.sleep(500); //browser waits 3 second
    //Find MarketingPage button and click on it
    element.all(by.css('a.bx-content-type-button.bx-content_page-type > span.contentType-icon-wrap > img')).click();
    browser.sleep(500); //browser waits 3 second
    //Fill the required fields
    element.all(by.id('internal_name')).first().sendKeys(internalName);
    browser.sleep(1000);
    element.all(by.id('title')).first().sendKeys(title);
    browser.sleep(1000);

    //Upload Image File
  utils.uploadImageFile();
  // {
  //   var path = require('path');
  //   // set remote file detector
  //   var remote = require('../node_modules/selenium-webdriver/remote');
  //   browser.setFileDetector(new remote.FileDetector());
  //   // set file to upload
  //   var fileToUpload = '../data_files/testuploadfile.PNG';
  //   var absolutePath = path.resolve(__dirname, fileToUpload);
  //   var fileElem = element(by.css('input[type="file"]'));
  // //  console.log(fileElem);
  //   browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
  //   fileElem.sendKeys(absolutePath);
  //   browser.driver.sleep(5000);
  // }
    var uploadImage = element(by.css('body > bx-app > bx-app > div.content > div > bx-content-type-selector-outlet > bx-content-type-form > bx-panel > div > div:nth-child(2) > div > bx-content-type-form-body > bx-form > form > bx-tabs > div > bx-form-group.localised-tab.localised-tab-en.form-tabs-content.clearfix > div > fieldset:nth-child(2) > bx-form-group > div > bx-dynamic-loader-component:nth-child(1) > bx-imageselector > div > div > div.widget-container.imageselector-stage > div.widget.widget-upload > span'));
      var cmsAddCardAltText = element(by.id('card_image_en.alt'));
    element(uploadImage.click());
    expect (cmsAddCardAltText.isPresent()).toBe(true);
    browser.driver.sleep(5000);

    var path = require('path');
    // set remote file detector
    var remote = require('../node_modules/selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());
    // set file to upload
    var fileToUpload = '../data_files/testuploadfile.PNG';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.css('input[type="file"]'));
  //  console.log(fileElem);
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    fileElem.sendKeys(absolutePath);
    browser.driver.sleep(5000);


  element.all(by.css('body > bx-app > bx-app > div.content > div > bx-content-type-selector-outlet > bx-content-type-form > bx-panel > div > div.bx-panel-footer > div > bx-content-type-form-footer > div:nth-child(2) > button.custom-cta.tertiary.cta-large')).click();
    browser.driver.sleep(5000);
  });

});
