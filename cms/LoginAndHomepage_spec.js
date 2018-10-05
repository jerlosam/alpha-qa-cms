  var utils = require('../utils/utilities');

describe("Login and Homepage Tests", function() {

  beforeEach(function() {
      browser.manage().deleteAllCookies();
  });

  describe("ALPHAPLTF-138: Beatrix CMS: Login", function() {
    it('Field should be present', function() {      
      browser.get(browser.params.cmsUrl);
      browser.sleep(3000);
      element(by.id(browser.params.cmsUsernameId)).sendKeys('jpantaleon');

      //Header
      var headerFld = element(by.css('header.modal-header'));
      expect(headerFld.isDisplayed()).toBe(true);

      //Close Button
      var closeBtn = element(by.css('button.close-btn'));
      expect(closeBtn.isDisplayed()).toBe(true);

      //Username field
      var usernameFld = element(by.id(browser.params.cmsUsernameId));
      expect(usernameFld.isDisplayed()).toBe(true);

      //Password field
      var passwordFld = element(by.id(browser.params.cmsPasswordId));
      expect(passwordFld.isDisplayed()).toBe(true);

      //Submit Button
      var submitBtn = element(by.id('internalLogin-submit'));
      expect(submitBtn.isDisplayed()).toBe(true);
    });

    it('Field should changed color to red when moving out', function() {
      browser.get(browser.params.cmsUrl);
      browser.sleep(3000);

      var NoInvalidFld = element(by.css('div.custom-field.invalid-field'));
      expect(NoInvalidFld.isPresent()).toBe(false);

      //Click Username Field then Move Out
      element(by.id(browser.params.cmsUsernameId)).click();
      element(by.css('header.modal-header')).click();
      browser.sleep(5000);
      var invalidFld = element(by.css('div.custom-field.invalid-field'));
      expect(invalidFld.isPresent()).toBe(true);
    });

    it('Field should changed color to red when removing text', function() {
      //Enter text in Username Field the remove
      element(by.id(browser.params.cmsUsernameId)).sendKeys('a');
      element(by.id(browser.params.cmsUsernameId)).sendKeys(protractor.Key.BACK_SPACE);
      browser.sleep(3000);
      var invalidFld = element(by.css('div.custom-field.invalid-field'));
      expect(invalidFld.isPresent()).toBe(true);
    });

    it('Field should changed color to red when user did not fill up the fields then submit', function() {
      browser.get(browser.params.cmsUrl);
      browser.sleep(3000);
      element(by.id('internalLogin-submit')).click();
      var invalidFld = element(by.css('div.custom-field.invalid-field'));
      expect(invalidFld.isPresent()).toBe(true);;
    });
  });

  describe("ALPHAPLTF-139: Beatrix CMS: Homepage", function() {
    it('Should Have a Header', function(){
      utils.loginToCms();
      var cmsHeaderTabbedMenu = element(by.className('tabbed-menu'));
      var cmsHeaderUserProfile = element(by.className('bx-user-profile'));
      expect (cmsHeaderUserProfile.isPresent()).toBe(true);
      expect (cmsHeaderUserProfile.isPresent()).toBe(true);
      browser.sleep(3000);
    });

    it('Should Have the Main Nav/Tabs', function(){
      var cmsNavigationContent = element(by.className('navigation-content'));
      var cmsSubNavigation = element(by.className('sub-navigation-content'));
      expect (cmsNavigationContent.isPresent()).toBe(true);
      expect (cmsSubNavigation.isPresent()).toBe(true);
      browser.sleep(3000);
    });

    it('Should Have Content as default main tab', function(){
      var cmsActiveMenu = element(by.className('navigation-content')).element(by.className('nav-link active'));
      expect(cmsActiveMenu.getText()).toEqual('CONTENT');
      browser.sleep(3000);
    });

    it('Should Have Existing Content as the default active subheader', function(){
      var cmsActiveSubMenu = element(by.className('sub-navigation-content')).element(by.className('nav-link active'));
      expect(cmsActiveSubMenu.getText()).toEqual('Existing Content');
      browser.sleep(3000);
    });
  });

  describe("ALPHAPLTF-143: Beatrix CMS: Brand Switcher", function() {
    it('Display available brands', function(){
      utils.loginToCms();
      element.all(by.css('div.selector-area')).click();

      //Hardcoded for the meantime. Still researching about faking responses using protractor
      var dropdown1 = element(by.css('figure > ul > li:nth-child(1)')).getText();
      expect(dropdown1).toEqual('Bodog88');

      var dropdown2 = element(by.css('figure > ul > li:nth-child(2)')).getText();
      expect(dropdown2).toEqual('Slots LV');

      var dropdown3 = element(by.css('figure > ul > li:nth-child(3)')).getText();
      expect(dropdown3).toEqual('Slots');

      var dropdown4 = element(by.css('figure > ul > li:nth-child(4)')).getText();
      expect(dropdown4).toEqual('Crazy 88');
    });
  });

});
