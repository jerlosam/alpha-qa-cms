var utils = require('../utils/utilities');

describe('Beatrix CMS: Content Status - Draft and Published jer sample', function() {

  var cmsTitleField = element.all(by.id('title')).first();
  var dropDown = element(by.className('custom-droplist'));
  var cmsGameField = element(by.id('game_id_en'));
  var cmsGameField2 = element(by.id('game_id_en_1'));
  var droplist = element.all(by.className("custom-droplist")).first();
  var desktopCheckbox = element(by.id('platform_device_0'));
  var desktopCheckbox1 = element(by.id('platform_device_0_0'));
  var mobileCheckbox1 = element(by.id('platform_device_1_0'));
  var pokerCheckbox1 = element(by.id('platform_device_2_0'));
  var addGameButton = element(by.buttonText('ADD ANOTHER ID'));
  utils.loginToCms()
  browser.waitForAngular();
  utils.createGameContent();
  browser.waitForAngular();

  it('New Game Fields Should Be Displayed On Click of Add New Game Button', function(){
    cmsGameField.clear();
    cmsGameField.click();
    element(cmsGameField.sendKeys('rei'));
    cmsGameField.sendKeys(protractor.Key.ENTER);
    browser.sleep(3000);
    element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li')).first().click();
    element(desktopCheckbox.click());
    addGameButton.click();
    expect(cmsGameField2.isDisplayed()).toBe(true);
    expect(desktopCheckbox1.isDisplayed()).toBe(true);
    expect(mobileCheckbox1.isDisplayed()).toBe(true);
    expect(pokerCheckbox1.isDisplayed()).toBe(true);
  });
});
