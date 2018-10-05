var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

var general_common = function() {
  //Locators

  this.addRichTextWithStyling = function(style) {
    element(by.id(browser.params.cmsRteViewButtonById)).click();
    element(by.id(browser.params.cmsRteSourceCode)).click();
    element(by.id(browser.params.cmsRteSourceCodeTextFieldById)).sendKeys(style);
    element(by.id(browser.params.cmsRteSourceCodeOKButtonById)).click();
  }
  this.createAMarketingContentWithRTStyling = function(cta, styling){
    utils.createMarketingContent();
    var x = utils.autoGenerateString(3);
    let titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
    gameResources.addInternalAndTitle(titleName);
    utils.selectFromDropdown(element(by.id('playerState')),"Visitor State");
    element.all(by.id(browser.params.cmsSlugField)).first().sendKeys(titleName);
    this.addRichTextWithStyling(styling);
    element(by.css(cta)).click();
    browser.sleep(5000);
    return titleName;
  }
  this.changeTextColor = function(textColor){
    element.all(by.css(".localised-tab-en div[aria-label='Text color'] button.mce-open")).first().click();
    element(by.css('td.mce-custom-color-btn button')).click();
    element(by.css('div.mce-formitem:nth-child(5) input')).click();
    element(by.css('div.mce-formitem:nth-child(5) input')).clear().then(function(){
      element(by.css('div.mce-formitem:nth-child(5) input')).sendKeys(textColor)
    })
    browser.pause();
  }

  this.verifyInsertImageModal = function(){
    expect(element(by.css('header.modal-header h1.h2-heading')).getText()).toBe('Insert / Edit Image');
    expect(element(by.id('image_button_selector.url')).isDisplayed()).toBeTruthy();
    expect(element(by.buttonText('SELECT')).isDisplayed()).toBeTruthy();
    expect(element(by.id('image_button_selector.alt')).isDisplayed()).toBeTruthy();
    expect(element(by.buttonText('CANCEL')).isDisplayed()).toBeTruthy();
    expect(element(by.buttonText('SAVE')).isDisplayed()).toBeTruthy();
    expect(element(by.css('button.close-btn i.icon-close')).isDisplayed()).toBeTruthy();
    element(by.css('button.close-btn')).click();
    expect(element(by.css('div.modal-content')).isPresent()).toBeFalsy();
  }

  this.uploadImageInRTE = function(fileName, altText){
      element(by.css('.localised-tab-en i[class="mce-ico mce-i-mce-ico mce-i-image"]')).click();
      utils.uploadImageFile('image_button_selector', '../data_files/'+fileName);
      element(by.id('image_button_selector.alt')).sendKeys(altText);
      element(by.buttonText('SAVE')).click();
  }
};

module.exports = new general_common();
