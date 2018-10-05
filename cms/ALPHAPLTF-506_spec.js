var utils = require('../utils/utilities');


describe('[New] Beatrix CMS: Create Menu - Internal Name', function() {
    var cmsMenu = element.all(by.css(browser.params.cmsMenuCss)).first();
    var cmsCreateNewMenu = element.all(by.css(browser.params.cmsCreateNewMenuCss)).first();
    var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();


    it('Login', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms()
      browser.waitForAngular();
    }); //close it


    it('Internal Name should be a required field', function(){
      //Create New Menu
      cmsMenu.click();
      cmsCreateNewMenu.click();
      expect(cmsInternalName.isPresent()).toBe(true);

      //Check if Interbal name is a required field
      cmsInternalName.click();
      element(by.className('hint-msg')).click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect (cmsRequiredFieldMessage.isPresent()).toBe(true);;
      browser.sleep(3000);
    });

    it('Internal Name should only accept alphanumeric, hyphen,x and space', function(){
      cmsInternalName.sendKeys('QA Test -123');
      expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
      cmsInternalName.sendKeys('***');
      expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
      browser.sleep(3000);
      cmsInternalName.clear();
    });

    it('Internal Name should allow 1-100 characters', function(){
      var oneHundredCharacters = '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789abcdefghij';
      cmsInternalName.sendKeys("a");
      expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
      cmsInternalName.sendKeys(protractor.Key.BACK_SPACE);
      expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
      cmsInternalName.sendKeys(oneHundredCharacters);
      expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
      expect(cmsInternalName.getAttribute('maxlength')).toEqual('100');


    });

}); //close describe
