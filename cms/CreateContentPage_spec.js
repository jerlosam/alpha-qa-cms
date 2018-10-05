var utils = require('../utils/utilities');

describe("Create Content Page Tests", function() {

  beforeEach(function() {
      browser.manage().deleteAllCookies();
  });

  describe('ALPHAPLTF-274 : Beatrix CMS: Create Content Page - Internal Name', function() {
    var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
    it('Internal Name should have a name field label', function(){
      utils.loginToCms();
      utils.createContentPage();
      var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
      expect (cmsInternalNameLabel.isPresent()).toBe(true);
      browser.sleep(3000);
      });
    it('Internal Name should be a required field', function(){
      cmsInternalName.click();
      element(by.className('hint-msg')).click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect (cmsRequiredFieldMessage.isPresent()).toBe(true);;
      browser.sleep(3000);
      });
    it('Internal Name should be have a max character limit of 100', function(){
      expect(cmsInternalName.getAttribute('maxlength')).toEqual('100');
      });
    it('Internal Name should only accept alphanumeric, hyphen, and space', function(){
      cmsInternalName.sendKeys('QA Test -123');
      expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
      cmsInternalName.sendKeys('***');
      expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
      browser.sleep(3000);
      });
  });

  describe('ALPHAPLTF-276 : Beatrix CMS: Create Content Page - Title', function() {
    var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    it('Title Field should be a required text field', function(){
      utils.loginToCms();
      utils.createContentPage();
      cmsTitleField.click();
      element(by.className('hint-msg')).click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect (cmsRequiredFieldMessage.isPresent()).toBe(true);
      browser.sleep(3000);
    });
    it('Title Field should allow 1-100 characters', function(){
      var oneHundredCharacters = '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789abcdefghij';
      cmsTitleField.sendKeys("a");
      expect(cmsTitleField.getAttribute('class')).toContain('ng-valid');
      cmsTitleField.sendKeys(protractor.Key.BACK_SPACE);
      expect(cmsTitleField.getAttribute('class')).toContain('ng-invalid');
      cmsTitleField.sendKeys(oneHundredCharacters);
      expect(cmsTitleField.getAttribute('class')).toContain('ng-valid');
      expect(cmsTitleField.getAttribute('maxlength')).toEqual('100');
    });
    it('Title Field should allow any character', function(){
      cmsTitleField.sendKeys('QA Test -123 #$%^@&');
      expect(cmsTitleField.getAttribute('class')).toContain('ng-valid');
      browser.sleep(3000);
    });
  });

  describe('ALPHAPLTF-275 :Beatrix CMS: Create Content Page - Language tabs available per Brand', function() {
    it('If the brand is Bodog88, it would return two language tabs (en and sc)', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      utils.createContentPage();
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(5000);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
      browser.sleep(5000);
      let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (BodogBrandLanguage.count()).toBe(3);
      expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
      expect (BodogBrandLanguage.get(1).getText()).toEqual('ES');
      expect (BodogBrandLanguage.get(2).getText()).toEqual('PT');
      browser.sleep(3000);
    });
    it('If the brand is Slots LV, it would return two language tabs (en,zh-hans)', function(){
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(5000);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Slots LV')).click();
      browser.sleep(5000);
      let SlotsBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (SlotsBrandLanguage.count()).toBe(2);
      expect (SlotsBrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (SlotsBrandLanguage.get(0).getText()).toEqual('EN');
      expect (SlotsBrandLanguage.get(1).getText()).toEqual('LANGUAGES.ZH-HANS');
      browser.sleep(3000);
    });
    it('If the brand is Crazy88, it would return three language tabs (en,sc,pt)', function(){
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(5000);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Crazy 88')).click();
      browser.sleep(5000);
      let Crazy88BrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (Crazy88BrandLanguage.count()).toBe(3);
      expect (Crazy88BrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (Crazy88BrandLanguage.get(0).getText()).toEqual('EN');
      expect (Crazy88BrandLanguage.get(1).getText()).toEqual('ES');
      expect (Crazy88BrandLanguage.get(2).getText()).toEqual('PT');
      browser.sleep(3000);
    });
  });

  describe('ALPHAPLTF-303: Beatrix CMS: Create Content Page - Body/Description section', function() {
    it('Long Description Field should allow any character, and apply RT Formats', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      utils.createContentPage();
      browser.executeScript('window.scrollTo(0,300);');
      browser.driver.sleep(5000)
      var cmsLongDescription = element(by.id(browser.params.cmsLongDescriptionId));
      var allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      var boldFormat = element(by.id(browser.params.cmsRTFBoldId));
      var italicFormat = element(by.id(browser.params.cmsRTFItalicId));
      var centerAlignFormat = element(by.id(browser.params.cmsRTFCenterAlignId));
      boldFormat.click();
      italicFormat.click();
      centerAlignFormat.click();
      browser.ignoreSynchronization = true
      browser.switchTo().frame(0);
      browser.driver.sleep(5000);
      cmsLongDescription.sendKeys(allCharacters);
      var cmsLongDescriptionTextInput = cmsLongDescription.element(by.tagName('p'));
      expect(cmsLongDescriptionTextInput.getAttribute('style')).toBe('text-align: center;');
      expect(cmsLongDescriptionTextInput.element(by.tagName('em')).element(by.tagName('strong')).isPresent()).toBe(true);
    });
  });

  describe('ALPHAPLTF-277 : Beatrix CMS: Create Content Page - By line', function() {
    var cmsBylineField = element.all(by.id(browser.params.cmsBylineFieldId)).first();
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createContentPage();
    it('By line Field should allow 1-50 characters', function(){
      var fiftyCharacters = '0123456789012345678901234567890123456789abcdefghij';
      cmsBylineField.sendKeys("a");
      expect(cmsBylineField.getAttribute('class')).toContain('ng-valid');
      cmsBylineField.sendKeys(fiftyCharacters);
      expect(cmsBylineField.getAttribute('class')).toContain('ng-valid');
      expect(cmsBylineField.getAttribute('maxlength')).toEqual('50');
    });

    it('By line Field should allow any character', function(){
      cmsBylineField.clear();
      cmsBylineField.sendKeys('QA Test -123 #$%^@&');
      expect(cmsBylineField.getAttribute('class')).toContain('ng-valid');
      browser.sleep(3000);
    });
  });

  describe('ALPHAPLTF-278 :Beatrix CMS: Create Content Page - Page Type', function() {
    var cmsPageTypeDropdown = element(by.id(browser.params.cmsPageTypeDropdownId));
    it('Page Type should be a dropdown with the following options: Article, Help Promotion, Generic', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      utils.createContentPage();
      expect (cmsPageTypeDropdown.isPresent()).toBe(true);
      cmsPageTypeDropdown.click();
      var cmsPageTypeItems = element.all(by.css('ul.custom-droplist')).get(1);
      var cmsPageTypeItemsList = cmsPageTypeItems.all(by.tagName('li'));
      expect(cmsPageTypeItemsList.get(0).getText()).toBe('Article');
      expect(cmsPageTypeItemsList.get(1).getText()).toBe('Help');
      expect(cmsPageTypeItemsList.get(2).getText()).toBe('Promotion');
      expect(cmsPageTypeItemsList.get(3).getText()).toBe('Generic');
    });
  });


  describe('ALPHAPLTF-371: Beatrix CMS: Rendering of Content Page Form', function() {
    var cmsHeaderTitle = element.all(by.className('bx-panel-header-title')).first();
    var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
    var cmsBylineField = element(by.id(browser.params.cmsBylineFieldId));
    var cmsPageTypeDropdown = element(by.id(browser.params.cmsPageTypeDropdownId));
    var cmsInternalNameLabel = element(by.xpath("//*[@id='internal-name-form']/div/bx-input-field-container/div/label"));
    var cmsLanguageTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
    var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    var cmsCardImageSection = element(by.id(browser.params.cmsCardImageId));
    var cmsPageImageSection = element(by.id(browser.params.cmsPageImageId));
    var cmsDescriptionContainer = element(by.id(browser.params.cmsLongDescriptionContainerId));
    var cmsMetaDataFieldContainer = element(by.css(browser.params.cmsMetaDataFieldContainerCss));
    var cmsDiscardButton = element(by.buttonText(browser.params.cmsDiscardButtonText));
    var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
    var cmsPublishButton = element(by.buttonText(browser.params.cmsPublishButtonText));

    it('Header should be displayed.', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      utils.createContentPage();
      expect(cmsHeaderTitle.isDisplayed()).toBe(true);
    });

    it('Internal Name field and label should be displayed.', function(){
      expect(cmsInternalName.isDisplayed()).toBe(true);
      expect(cmsInternalNameLabel.isDisplayed()).toBe(true);
    });

    it('Language tabs should be displayed.', function(){
      for (i=0; i<=cmsLanguageTabs.count(); i++)
      {
        expect(cmsLanguageTabs[i].isDisplayed()).toBe(true);
      }
    });

    it('Title field should be displayed.', function(){
      expect(cmsTitleField.isDisplayed()).toBe(true);
    });

    it('Byline field should be displayed.', function(){
      expect(cmsBylineField.isDisplayed()).toBe(true);
    });

    it('Page Type dropdown should be displayed.', function(){
      expect(cmsPageTypeDropdown.isDisplayed()).toBe(true);
    });

    it('Add Card Image Section should be present.', function(){
      expect(cmsCardImageSection.isPresent()).toBe(true);
    });

    it('Add Page Image Section should be present.', function(){
      expect(cmsPageImageSection.isPresent()).toBe(true);
    });

    it('Description Section should be displayed.', function(){
      expect(cmsDescriptionContainer.isDisplayed()).toBe(true);
    });

    it('MetaData Field Section should be displayed.', function(){
      expect(cmsMetaDataFieldContainer.isDisplayed()).toBe(true);
    });

    it('Discard CTA should be displayed.', function(){
      expect(cmsDiscardButton.isDisplayed()).toBe(true);
    });

    it('Save ad Draft CTA should be displayed.', function(){
      expect(cmsSaveAsDraftButton.isDisplayed()).toBe(true);
    });

    it('Publish CTA should be displayed.', function(){
      expect(cmsPublishButton.isDisplayed()).toBe(true);
    });
  });
});
