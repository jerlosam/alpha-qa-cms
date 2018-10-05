var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');
var addCardImageLabel = element.all(by.css('div.imageselector-label label')).first();
var addCPageImageLabel = element.all(by.css('div.imageselector-label label')).get(1);
this.createContent = function(cta, pageType)
{
  var today = new Date().toISOString().slice(0, 10);
  utils.createContentPage();
  var x = utils.autoGenerateString(3);
  var titleName = "testContentPage-" + x + new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  utils.selectFromDropdown(element.all(by.id('page_type')), pageType);
  element.all(by.id(browser.params.cmsSlugField)).first().sendKeys(today);
  gameResources.addGameImages();
  element(by.buttonText(cta)).click();
  browser.sleep(8000);
  return titleName;
}
this.addGameContentTranslations = function (titleName){
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
this.createContentPageWithoutImages = function(cta, pageType)
{
  utils.createContentPage();
  utils.selectFromDropdown(element.all(by.id('page_type')), pageType);
  utils.fieldLabelValidation(addCardImageLabel, 'Add Card Image');
  utils.fieldLabelValidation(addCPageImageLabel, 'Add Page Image');
  var titleName = utils.autoGenerateString(4) + new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  element.all(by.id(browser.params.cmsSlugField)).first().sendKeys(titleName);
  element(by.buttonText(cta)).click();
  browser.sleep(8000);
  return titleName;
}
