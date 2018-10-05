var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

var slide_common = function(){
var today = new Date().toISOString().slice(0, 10);



//targetLink is how the slide will be displayed. Possible values (Same Tab, Open in Pop Up, Open in New Tab)
this.createSlide = function(cta, targetLink){
  utils.createSlideContent();
  var x = utils.autoGenerateString(3);
  var titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  utils.uploadImageFile('image_en', '../data_files/testuploadfile.png');
  element(by.id('image_en.alt')).sendKeys('test');
  element.all(by.id(browser.params.cmsBackgroundId)).first().sendKeys('#ffffff')
  utils.selectFromDropdown(element.all(by.id('link_target')).first(), targetLink)
  element(by.buttonText(cta)).click();
  browser.sleep(8000);
  //element(by.css('figure.custom-notification button')).click();
  return titleName;
}

this.checkMultiSelectCheckbox = function(locator, selections){
  selections.forEach(function(selection){
    var chk = element(by.css(locator)).element(by.id(selection));
    chk.click();
    browser.sleep(4000);
  });
}


  this.displaySlidesItemsBlock = function() {
    expect(element(by.id(browser.params.cmSlideItemsId)).isDisplayed()).toBe(true);
  }

  this.displayAddSlidesItemsBlock = function() {
    expect(element(by.className(browser.params.cmsAddSlidesItemsClassName)).isDisplayed()).toBe(true);
  }


  this.displayAddMenuItemCTA = function() {
    expect(element(by.buttonText(browser.params.displayAddSlideItemButtonText)).isDisplayed()).toBe(true);
  }

  this.createSlideWithbackground = function(cta, targetLink) {
    var backgroundImageSelector ='background_image_en';
    utils.goToCreateSlideContent();
    var titleName = "testAuto-" + utils.autoGenerateString(3); +new Date().toISOString().slice(0, 10);
    gameResources.addInternalAndTitle(titleName);
    utils.uploadImageFile('image_en', '../data_files/testuploadfile.png');
    element(by.id('image_en.alt')).sendKeys('test');
    utils.uploadImageFile(backgroundImageSelector, '../data_files/testuploadfile.png');
    element.all(by.id(browser.params.cmsBackgroundId)).first().sendKeys('#ffffff')
    utils.selectFromDropdown(element.all(by.id('link_target')).first(), targetLink)
    element(by.buttonText(cta)).click();
    browser.sleep(5000);
    return titleName;
  }

};
module.exports = new slide_common ();
