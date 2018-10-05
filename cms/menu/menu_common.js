var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');


var menu_common = function() {
  var today = new Date().toISOString().slice(0, 10);

  this.displayMenuItemsBlock = function() {
    expect(element(by.id(browser.params.cmsMenuItemsId)).isDisplayed()).toBe(true);
  }

  this.displayAddMenuItemsBlock = function() {
    expect(element(by.className(browser.params.cmsAddMenuItemsClassName)).isDisplayed()).toBe(true);
  }


  this.displayAddMenuItemCTA = function() {
    expect(element(by.buttonText(browser.params.displayAddMenuItemButtonText)).isDisplayed()).toBe(true);
  }

  this.createMenu = function(cta) {
    utils.goToCreateMenu();
    var x = utils.autoGenerateString(3);
    var titleName = "testMenu-" + x + new Date().toISOString().slice(0, 10);
    gameResources.addInternalAndTitle(titleName);
    element.all(by.id(browser.params.cmsSlugField)).first().click();
    this.addMenuItems();
    element(by.buttonText(cta)).click();
    browser.sleep(4000);
    return titleName;
  }

this.displayMenuItems= function(){
  var cmsAddMenuItemCTACSS = element.all(by.css('bx-content-selector button.custom-cta')).first();
  cmsAddMenuItemCTACSS.click();
  var cmsInternalItemTab = element(by.css('bx-modal li:nth-child(1)'));
  expect(cmsInternalItemTab.getAttribute('class')).toEqual('active');
  var cmsSearchBy = element(by.id('searchBy'));
  expect(cmsSearchBy.isDisplayed()).toBe(true);
  var cmsContentTypeListNameTitle = element(by.id('contentTypeListNameTitle'));
  expect(cmsContentTypeListNameTitle.isDisplayed()).toBe(true);
  var cmsContentTypeListTypeTitle = element(by.id('contentTypeListTypeTitle'));
  expect(cmsContentTypeListTypeTitle.isDisplayed()).toBe(true);
  var cmsContentTypeListPageTitle = element(by.id('contentTypeListPageTitle'));
  expect(cmsContentTypeListPageTitle.isDisplayed()).toBe(true);
  var cmsContentTypeListStatusTitle = element(by.id('contentTypeListStatusTitle'));
  expect(cmsContentTypeListStatusTitle.isDisplayed()).toBe(true);
  var closeBtn = element(by.css('button.close-btn')).click();
}

this.displayMenuItemsExternal= function(){
  var cmsAddMenuItemCTACSS = element.all(by.css('bx-content-selector button.custom-cta')).first();
  cmsAddMenuItemCTACSS.click();
  var cmsExternalLinksTab = element(by.css('bx-modal li:nth-child(2)')).click();
  expect(cmsExternalLinksTab.isDisplayed()).toBe(true);
  var cmsAddMenuItemsClassName = element(by.cssContainingText('h1.h2-heading','Add Menu Items'));
  expect(cmsAddMenuItemsClassName.isDisplayed()).toBe(true);
  var cmsItemName = element(by.id('external_name'));
  expect(cmsItemName.isDisplayed()).toBe(true);
  var cmsExternalLink = element(by.id('external_link'));
  expect(cmsExternalLink.isDisplayed()).toBe(true);
  var cmsSameWindowRadioBtn = element(by.css('div.custom-radio.native-toggle > label'));
  expect(cmsSameWindowRadioBtn.isDisplayed()).toBe(true);
  var cmsSameWindowLabel = element(by.xpath('.//*[.="Open in Same Window"]'))
  expect(cmsSameWindowLabel.isDisplayed()).toBe(true);
  var cmsNewWindowRadioBtn = element(by.xpath('//div[2]/label')).click();
  var cmsNewTabLabel = element(by.xpath('.//*[.="Open in New Tab"]'))
  expect(cmsNewTabLabel.isDisplayed()).toBe(true);
  var cmsCancelCss = element(by.cssContainingText('button.custom-cta.tertiary','Cancel')).click();
  expect(cmsAddMenuItemCTACSS.isDisplayed()).toBe(true);
  }

this.addAnotherItem= function(){
  var cmsAddMenuItemCTACSS = element.all(by.css('bx-content-selector button.custom-cta')).first();
  cmsAddMenuItemCTACSS.click();
  var cmsExternalLinksTab = element(by.css('bx-modal li:nth-child(2)')).click();
  expect(cmsExternalLinksTab.isDisplayed()).toBe(true);
  var cmsItemName = element(by.id('external_name'));
  cmsItemName.sendKeys('abc1def2ghi3jkl4mno5pqrs6tuv7wxyz8ABCDEF9GHIJKLMNOPQRSTUVWXYZ!§$%&()=?*#|~ @.');
  expect(cmsItemName.getAttribute('class')).toContain('ng-untouched ng-dirty ng-valid');
  var cmsExternalLink = element(by.id('external_link'));
  cmsExternalLink.sendKeys('abc1def2ghi3jkl4mno5pqrs6tuv7wxyz8ABCDEF9GHIJKLMNOPQRSTUVWXYZ!§$%&()=?*#|~ @.');
  expect(cmsExternalLink.getAttribute('class')).toContain('ng-untouched ng-dirty ng-valid');
  var cmsAddAnotherItem = element.all(by.buttonText('Add Another Item')).first().click();
  var cmsAddAnotherItem = element.all(by.buttonText('Add Another Item')).first().click();
  var cmsRemoveItem = element(by.id('button_remove_2'));
  cmsRemoveItem.click();
  var cmsAddAnotherItem = element.all(by.buttonText('Add Another Item')).first().click();
  var cmsItemNameLast = element.all(by.id('external_name')).last().click();
  expect(cmsItemNameLast.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid');
  var cmsExternalLinkLast = element.all(by.id('external_link')).last().click();
  expect(cmsExternalLinkLast.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid');
  var cmsCancelCss = element(by.cssContainingText('button.custom-cta.tertiary','Cancel')).click();
  }

  this.removeItem= function(){
    var cmsAddMenuItemCTACSS = element.all(by.css('bx-content-selector button.custom-cta')).first();
    cmsAddMenuItemCTACSS.click();
    var cmsExternalLinksTab = element(by.css('bx-modal li:nth-child(2)')).click();
    var cmsRemoveItem0 = element(by.id('button_remove_0'));
    expect(cmsRemoveItem0.isDisplayed()).toBe(false);
    var cmsAddAnotherItem = element.all(by.buttonText('Add Another Item')).first().click();
    expect(cmsRemoveItem0.isDisplayed()).toBe(true);
    var cmsRemoveItem1 = element(by.id('button_remove_1'));
    expect(cmsRemoveItem1.isDisplayed()).toBe(true);
    var cmsAddAnotherItem = element.all(by.buttonText('Add Another Item')).first().click();
    var cmsRemoveItem2 = element(by.id('button_remove_2'));
    expect(cmsRemoveItem2.isDisplayed()).toBe(true);
    cmsRemoveItem1.click();
    cmsRemoveItem2.click();
    expect(cmsRemoveItem0.isDisplayed()).toBe(false);
    }

  this.AddSaveExternaLink= function(){
    var cmsAddMenuItemCTACSS = element.all(by.css('bx-content-selector button.custom-cta')).first();
    cmsAddMenuItemCTACSS.click();
    var cmsExternalLinksTab = element(by.css('bx-modal li:nth-child(2)')).click();
    var cmsItemName = element(by.id('external_name'));
    cmsItemName.sendKeys('Google');
    var cmsExternalLink = element(by.id('external_link'));
    cmsExternalLink.sendKeys('https://www.slots.lv/getting-started');
    var cmsNewWindowRadioBtn = element(by.xpath('//div[2]/label')).click();
    var cmsSave = element.all(by.buttonText('Save')).first().click();
    var cmsAddedList = element(by.cssContainingText('th.bx-content-name','Google'));
    expect(cmsAddedList.isDisplayed()).toBe(true);
  }

  this.EditAddedItem= function(){
    var cmsEditAddedItem = element.all(by.css('bx-content-selector button.custom-cta')).first(); //edit locator
    cmsEditAddedItem.click();
}
  this.MissingRequiredFields= function(){
    var cmsAddMenuItemCTACSS = element.all(by.css('bx-content-selector button.custom-cta')).first();
    cmsAddMenuItemCTACSS.click();
    var cmsExternalLinksTab = element(by.css('bx-modal li:nth-child(2)')).click();
    var cmsItemName = element(by.id('external_name')).click();
    expect(cmsItemName.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid');
    var cmsExternalLink = element(by.id('external_link'));
    cmsExternalLink.click();
    expect(cmsExternalLink.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid');
    var cmsNewWindowRadioBtn = element(by.xpath('//div[2]/label')).click();
    cmsItemName.sendKeys('Google');
    var cmsSave = element.all(by.buttonText('Save')).first().click();
    var cmsRequiredField = element(by.cssContainingText('div.custom-field.col-xs-6.invalid-field','This is a required field.'));
    expect(cmsRequiredField.isDisplayed()).toBe(true);
    //expect(cmsExternalLink.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid');
  }

  this.PrepopulatedExpandForm= function(){
    var cmsItemName = element(by.id('external_name'));
    expect(cmsItemName.getText()).toEqual('Google');
    var cmsExternalLink = element(by.id('external_link'));
    expect(cmsExternalLink.getText()).toEqual('https://www.slots.lv/getting-started');
    var cmsIconClass = element(by.id('external_name')); // change locator
    expect(cmsIconClass.isDisplayed()).toBe(true);
    var cmsSameWindowRadioBtn = element(by.css('div.custom-radio.native-toggle > label'));
    expect(cmsSameWindowRadioBtn.isDisplayed()).toBe(true);
    var cmsSameWindowLabel = element(by.xpath('.//*[.="Open in Same Window"]'))
    expect(cmsSameWindowLabel.isDisplayed()).toBe(true);
    var cmsCancelCss = element(by.cssContainingText('button.custom-cta.tertiary','Cancel')); //check
    expect(cmsCancelCss.isDisplayed()).toBe(true); // collapse if not changes
    var cmsOK = element(by.cssContainingText('button.custom-cta.tertiary','OK')); //check
    expect(cmsOK.isDisplayed()).toBe(true);
  }

  this.CollapseAndSave= function(){
    var cmsItemName = element(by.id('external_name'));
    cmsItemName.sendKeys('Roulette');
    var cmsExternalLink = element(by.id('external_link'));
    cmsExternalLink.sendKeys('https://casino.bodog.eu/table-games/european-roulette');
    var cmsIconClass = element(by.id('external_name')); // change locator
    cmsIconClass.sendKeys('!@#$%^&*()[];:,.<>?/12345678900qwertyuiopasdfghjklzxcvbnm~`-_=+|ABCDEF');
    var cmsOK = element(by.cssContainingText('button.custom-cta.tertiary','OK')).click(); //check locator
    var cmsEditAddedItem = element.all(by.css('bx-content-selector button.custom-cta')).first(); //edit locator
    cmsEditAddedItem.click();
    expect(cmsItemName.getText()).toEqual('Roulette');
    expect(cmsExternalLink.getText()).toEqual('https://casino.bodog.eu/table-games/european-roulette');
    expect //edit this -- should be saved
  }

  this.CollapseAndSaveWithMissingFields= function(){
    var cmsItemName = element(by.id('external_name'));
    cmsItemName.clear();
    var cmsExternalLink = element(by.id('external_link'));
    cmsExternalLink.clear();
    var cmsIconClass = element(by.id('external_name')); // change locator
    cmsIconClass.sendKeys('EuropeanRoulette');
    var cmsOK = element(by.cssContainingText('button.custom-cta.tertiary','OK')).click(); //check locator
    expect(cmsItemName.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid'); //edit this
    expect(cmsExternalLink.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid'); //edit this
    expect(cmsIconClass.getAttribute('class')).toContain(''); //edit this
    cmsItemName.sendKeys('Roulette');
    expect(cmsExternalLink.getAttribute('class')).toContain('ng-untouched ng-pristine ng-invalid'); //edit this
    expect //edit this -- form should not be saved
  }


this.verifyAddRemoveItems= function(){
  var cmsAddMenuItemCTACSS = element(by.css('button.custom-cta.custom-link'));
  cmsAddMenuItemCTACSS.click();
  var cmsAddComponent = element.all(by.buttonText('+ Add')).first();
  expect(cmsAddComponent.getText()).toEqual('+ ADD');
  cmsAddComponent.click();
  var cmsRemoveComponent = element.all(by.buttonText('Remove')).first();
  expect(cmsRemoveComponent.getText()).toEqual('REMOVE');
  cmsRemoveComponent.click();
  var cmsCancelCss = element(by.cssContainingText('button.custom-cta.tertiary','Cancel')).click();
}

this.paginationForMenuItems= function(){
  var cmsAddMenuItemCTACSS = element.all(by.css('button.custom-cta.custom-link')).first();
  cmsAddMenuItemCTACSS.click();
  browser.driver.manage().window().maximize();
  let contentList = element(by.id('contentManagementList')).all(by.tagName('tr'));
  expect(contentList.count()).toEqual(10);
  var cmsArrowNextPagination = element(by.xpath(browser.params.cmsArrowNextPaginationXpath));
  expect(cmsArrowNextPagination.isEnabled()).toBe(true);
}

this.saveAddMenuItems= function(){
  var EmptyList = element.all(by.cssContainingText('h3.h3-heading','You have no menu items added.')).first();
  expect(EmptyList.getText()).toEqual('You have no menu items added.');
  var cmsAddMenuItemCTACSS = element.all(by.css('button.custom-cta.custom-link')).first();
  cmsAddMenuItemCTACSS.click();
  browser.driver.manage().window().maximize();
  var cmsAddComponent = element.all(by.buttonText('+ Add')).first();
  cmsAddComponent.click();
  var cmsSave = element(by.cssContainingText('button.custom-cta.primary.cta-large','Save')).click();
  //var cmsSave = element(by.css('button.custom-cta.primary.cta-large')).click();
  var cmsAddedList = element(by.css('th.bx-content-name'));
  expect(cmsAddedList.isDisplayed()).toBe(true);
}

this.displayPlayerStates = function()
{
      //var cmsPlayerStates = element(by.css('bx-content-languages')); //change ID
      //expect(cmsPlayerStates.isDisplayed()).toBe(true);
      var cmsDefaultStates = element(by.css('bx-content-languages')); //change locator
      expect(cmsDefaultStates.getText()).toEqual('Visitor, Logged Out, Logged In');
}

this.doNotdisplayPlayerStates = function()
{
      var cmsDefaultStates = element(by.css('bx-content-languages')); //change locator
      expect(cmsDefaultStates.isDisplayed()).toBe(false);
}

this.deselectAlltypes = function()
{
      var cmsAddComponent = element.all(by.css('button.custom-cta.custom-link')).first();
      cmsAddComponent.click();
      element(by.css('input.selected-elements')).click();
      element(by.css('a.deselect-all')).click();
      browser.sleep(2000);
}

this.addComponentSave = function()
{
      var cmsAddComponent = element.all(by.buttonText('+ Add')).first();
      cmsAddComponent.click();
      var cmsSave = element(by.cssContainingText('button.custom-cta.primary.cta-large','Save')).click();
      browser.sleep(3000);
      var cmsAddedList = element(by.css('th.bx-content-name'));
      expect(cmsAddedList.isDisplayed()).toBe(true);
      // var cmsPlayerStates = element(by.id('menuListLanguagesTitle')); //change ID
      // expect(cmsPlayerStates.isDisplayed()).toBe(true);
      // var cmsDefaultStates = element(by.css('td.bx-menulist-languages')); //change locator
      // expect(cmsDefaultStates.getText()).toEqual('Visitor, Logged Out, Logged In');
}

this.searchMenuContentInternalName = function (internalName)
{
    utils.goToCreateMenu();
    element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
    utils.searchByName(internalName);
}

this.addMenuItems = function (){
  utils.scrollDown();
  element.all(by.css(browser.params.displayAddMenuItemButtonCSS)).first().click();
  browser.sleep(2000);
  element.all(by.css('tbody[id="contentTypeList"] button.tertiary')).first().click();
//  element(by.css('bx-form-group.localised-tab-en td.bx-content-action button:nth-child(1)')).click();
  element(by.buttonText(browser.params.cmsSaveModalButtonByText)).click();
}

this.createMenuContainer = function (menuComponentTitle, cta){
  var x = utils.autoGenerateString(3);
  var titleName = "testMenu-" + x + new Date().toISOString().slice(0, 10);
  gameResources.addInternalAndTitle(titleName);
  element.all(by.id(browser.params.cmsSlugField)).first().click();
  utils.scrollDown();
  element.all(by.css(browser.params.displayAddMenuItemButtonCSS)).first().click();
  utils.getRowByTitle(menuComponentTitle, "tbody[id='contentTypeList'] td.bx-content-name span").then(function(row){
  row.element(by.css("td.bx-content-action button.cta-medium")).click();
    })
  element(by.buttonText(browser.params.cmsSaveModalButtonByText)).click();
  element(by.buttonText(cta)).click();
  browser.waitForAngular();
  return titleName;
}

this.searchAndDeleteMenuContent = function(url, contentTitle){
  browser.get(url);
  utils.searchByName(contentTitle);
  element(by.css('#menuContentList td.bx-menulist-delete a span')).click();
  element(by.buttonText('Delete')).click();
  browser.waitForAngular();
}
};
module.exports = new menu_common();
