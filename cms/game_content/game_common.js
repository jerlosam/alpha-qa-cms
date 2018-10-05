var utils = require('../../utils/utilities');

var game_common = function() {
  //Locators
  var today = new Date().toISOString().slice(0, 10);

  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var dropDown = element(by.className('custom-droplist'));
  var cmsGameField = element(by.id('game_id_en_0'));
  var droplist = element.all(by.className("custom-droplist")).first();
  var cmsAddCardImageButton = element.all(by.css('i.icon.icon-plus'));
  var cmsAddPageImageButton = element.all(by.css('i.icon.icon-plus'));
  var cmsAddCardAltText = element(by.id('card_image_en.alt'));
  var cmsAddPageAltText = element(by.id('page_image_en.alt'));

  this.autoSuggest = function(locator, game) //locator by id
  {
    var cmsGameField = element(by.id(locator));
    cmsGameField.clear();
    cmsGameField.click();
    cmsGameField.sendKeys(game);
  }
  //Create a game content passing a game name and CTA by button text to click(discard, save as draft, or publish )
  this.createGame = function(gameName, cta) {
    utils.createGameContent();
    var x = utils.autoGenerateString(3);
    let titleName = "testAuto-" + x + today;
    this.addInternalAndTitle(titleName);
    element.all(by.id(browser.params.cmsSlugField)).first().sendKeys(today);
    cmsGameField.clear();
    cmsGameField.click();
    element(cmsGameField.sendKeys(gameName));
    cmsGameField.sendKeys(protractor.Key.ENTER);
    browser.sleep(2000);
    element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li')).first().click();
    element.all(by.id(browser.params.cmsShortDescriptionId)).first().sendKeys(today);
    this.addRichText();
    this.addGameImages();
    utils.scrollUp();
    element(by.buttonText(cta)).click();
    browser.sleep(3000);
    return titleName;
  }
  this.addInternalAndTitle = function(internalName) {
    //element(by.id(browser.params.cmsInternalNameId)).sendKeys('testAuto-'+ utils.autoGenerateString(3)+new Date().toISOString().slice(0, 10));

    utils.waitForVisibilityOf(element(by.id(browser.params.cmsInternalNameId)));
    element(by.id(browser.params.cmsInternalNameId)).sendKeys(internalName);
    element(by.css(browser.params.cmsTitleCss)).sendKeys(internalName);
    //element(by.id('title_en')).sendKeys(internalName);
    //element.all(by.id(browser.params.cmsTitleFieldId)).first().sendKeys('testAuto-' + utils.autoGenerateString(3)+ new Date().toISOString().slice(0, 10));
  }

  this.addRichText = function() {
    browser.ignoreSynchronization = true
    browser.switchTo().frame(0);
    element(by.id('tinymce')).sendKeys(today);
    browser.switchTo().defaultContent();
  }

  this.addGameImages = function() {
    utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
    utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
    cmsAddCardAltText.sendKeys('test');
    cmsAddPageAltText.sendKeys('test');
  }
  this.verifyLongDescriptionField = function() {
    this.longDescriptionRequiredField();
  }
  this.longDescriptionRequiredField = function() {
    var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
    cmsSaveAsDraftButton.click();
    var cmsRequiredFieldMessage = element(by.className('error-msg'));
    expect(cmsRequiredFieldMessage.isPresent()).toBe(true);
  }

  this.typeGameName = function(gameName) {
    cmsGameField.sendKeys(gameName);
    browser.sleep(5000);
    cmsGameField.click();
    cmsGameField.sendKeys(protractor.Key.ENTER);
    element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li')).first().click();
  }
};

module.exports = new game_common();
