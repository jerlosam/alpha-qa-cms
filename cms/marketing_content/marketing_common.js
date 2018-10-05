var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

var marketing_common = function(){
var today = new Date().toISOString().slice(0, 10);
this.createMarketingPage = function (cta){
  browser.sleep(1000);
    utils.goToCreateMarketingContent();
    var x = utils.autoGenerateString(3);
    let titleName = "testAuto-" + x +new Date().toISOString().slice(0, 10);
    //utils.selectFromDropdown(element(by.id('playerState')),"Visitor State");
    gameResources.addInternalAndTitle(titleName);
    element.all(by.id(browser.params.cmsSlugField)).first().sendKeys(titleName);
    gameResources.addRichText();
    utils.uploadImageFile('add_image_en', '../data_files/testuploadfile.png');
    browser.sleep(3000);
    element(by.id('add_image_en.alt')).sendKeys('test');
    element(by.buttonText(cta)).click();
    browser.sleep(3000);
    return titleName;
}
this.addMarketingTranslations = function (titleName){
  utils.scrollUp();
  element(by.css('bx-tabs ul li:nth-child(2)')).click();
  element.all(by.id(browser.params.cmsTitleFieldId)).get(1).sendKeys(titleName);
  element.all(by.id(browser.params.cmsSlugField)).get(1).sendKeys('slug');
  gameResources.addRichText();
  element(by.css('bx-tabs ul li:nth-child(3)')).click();
  element.all(by.id(browser.params.cmsTitleFieldId)).get(2).sendKeys(titleName);
  element.all(by.id(browser.params.cmsSlugField)).get(2).sendKeys('slug');
  gameResources.addRichText();
}







};
module.exports = new marketing_common ();
