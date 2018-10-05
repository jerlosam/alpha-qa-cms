var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

var searchSlide = element.all(by.buttonText(browser.params.cmsSearchSlideButtonText)).first();
var cmsAdd = element.all(by.css(browser.params.cmsAddCss)).first();
var cmsSave = element.all(by.css(browser.params.cmsPublishedCss)).first();
var cmsCancel = element.all(by.buttonText(browser.params.cmsCancelButtonText)).first();



var slideshow_common = function() {

  //targetLink is how the slide will be displayed. Possible values (Same Tab, Open in Pop Up, Open in New Tab)
  this.createSlideShow = function(cta) {
    utils.goTocreateSlideShowContent();
    var x = utils.autoGenerateString(13);
    var titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
    gameResources.addInternalAndTitle(titleName);
    this.addSlidesToSlideShow();
    browser.sleep(6000);
    element(by.buttonText(cta)).click();
    return titleName;
  }

  this.addSlideAndSave = function(row) {
    utils.waitForVisibilityOf(searchSlide);
    searchSlide.click();
    utils.selectSlides(row);
    cmsSave.click();
  }

  this.addSlideAndCancel = function(row) {
    utils.waitForVisibilityOf(searchSlide);
    searchSlide.click();
    utils.selectSlides(row);
    cmsCancel.click();
  }


  this.checkAddRemoveButton = function(selections, expected) {
    utils.waitForVisibilityOf(searchSlide);
    searchSlide.click();
    var btns = element.all(by.css("#contentTypeList")).all(by.css("button"));
      btns.each(function(btn,index) {
        if ((selections).includes(index+1)) {
          btn.getText().then( function(text) {
               expect(text).toEqual(expected);
             }); //close btn.getText()
           };//close if statement
      });//close for each
  }; //close checkAddRemoveButton

  this.addSlidesToSlideShow = function(){
    utils.scrollDown();
    element.all(by.css(browser.params.cmsSearchComponentCss)).first().click();
    browser.sleep(2000);

    element.all(by.css('tbody[id="contentTypeList"] button.tertiary')).first().click();
    element(by.buttonText(browser.params.cmsSaveModalButtonByText)).click();
  }
}; // close slideshow_common
module.exports = new slideshow_common();
