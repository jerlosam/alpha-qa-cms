var utils = require('../../utils/utilities');
var marketingResources = require('../marketing_content/marketing_common');
var gameResources = require('../game_content/game_common');
describe("Create Marketing Page Tests", function() {
 var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
 var cmsTitle = element.all(by.id(browser.params.cmsTitleFieldId));
 var cmsSlug = element.all(by.id(browser.params.cmsSlugField));
 var cmsSaveDraft = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
 var cmsSavePublish = element(by.buttonText(browser.params.cmsPublishButtonText));

 var cmsHeaderTitle = element.all(by.className('bx-panel-header-title')).first();
 var cmsInternalNameLabel = element(by.xpath("/html/body/bx-app/bx-app/div[2]/div/bx-content-type-selector-outlet/bx-content-type-form/bx-panel/div/div[2]/div/bx-content-type-form-body/bx-form/form/div/bx-form-group/div/bx-input-field-container/div/label"));
 var cmsLanguageTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
 var cmsAddImageSection = element(by.id(browser.params.cmsAddImageId));
 var cmsDescriptionContainer = element(by.id(browser.params.cmsLongDescriptionContainerId));
 var cmsComponentsList = element(by.cssContainingText('label',browser.params.cmsComponentsListHeaderText));
 var cmsAddComponentsSection  = element(by.css(browser.params.cmsSearchComponentCss));
 var cmsMetaDataFieldContainer = element(by.css(browser.params.cmsMetaDataFieldContainerCss));
 var cmsDiscardButton = element(by.buttonText(browser.params.cmsDiscardButtonText));

  browser.manage().deleteAllCookies();
  utils.loginToCms();
  browser.sleep(500);

  describe('ALPHAPLTF-239: Beatrix CMS: Create Marketing Page - Internal Name', function() {
    var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
    it('Internal Name should have a name field label', function(){

      utils.goToCreateMarketingContent();
      var cmsInternalNameLabel = element(by.xpath('/html/body/bx-app/bx-app/div[2]/div/bx-content-type-selector-outlet/bx-content-type-form/bx-panel/div/div[2]/div/bx-content-type-form-body/bx-form/form/div/bx-form-group/div/bx-input-field-container/div/label'));
      expect (cmsInternalNameLabel.isPresent()).toBe(true);
      browser.sleep(2000);
      });
    it('Internal Name should be a required field', function(){
      cmsInternalName.click();
      element(by.className('hint-msg')).click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect (cmsRequiredFieldMessage.isPresent()).toBe(true);;
      browser.sleep(2000);
      });
    it('Internal Name should only accept alphanumeric, hyphen, and space', function(){
      cmsInternalName.sendKeys('QA Test -123');
      expect(cmsInternalName.getAttribute('class')).toContain('ng-valid');
      cmsInternalName.sendKeys('***');
      expect(cmsInternalName.getAttribute('class')).toContain('ng-invalid');
      browser.sleep(2000);
      browser.driver.navigate().refresh();

      });
    });

 describe('ALPHAPLTF-243: Beatrix CMS: Create Marketing Page - Language tabs available per Brand', function() {
    it('If the brand is Bodog88, it would return two language tabs (en and sc)', function(){
      browser.sleep(1000);
     utils.goToCreateMarketingContent();
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(1000);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
      browser.sleep(1000);
      let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (BodogBrandLanguage.count()).toBe(3);
      expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
      expect (BodogBrandLanguage.get(1).getText()).toEqual('ES');
      expect (BodogBrandLanguage.get(2).getText()).toEqual('PT');
      browser.sleep(3000);
      });
    it('If the brand is Slots LV, it would return two language tabs (en,sc)', function(){
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(1000);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Slots LV')).click();
      browser.sleep(1000);
      let SlotsBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (SlotsBrandLanguage.count()).toBe(2);
      expect (SlotsBrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (SlotsBrandLanguage.get(0).getText()).toEqual('EN');
      expect (SlotsBrandLanguage.get(1).getText()).toEqual('SC');
      browser.sleep(2000);
      });
    it('If the brand is Crazy88, it would return three language tabs (en,sc,pt)', function(){
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(1000);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Crazy 88')).click();
      browser.sleep(1000);
      let Crazy88BrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (Crazy88BrandLanguage.count()).toBe(3);
      expect (Crazy88BrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (Crazy88BrandLanguage.get(0).getText()).toEqual('EN');
      expect (Crazy88BrandLanguage.get(1).getText()).toEqual('ES');
      expect (Crazy88BrandLanguage.get(2).getText()).toEqual('PT');
      browser.sleep(2000);
      });
    });

 describe('ALPHAPLTF-245: Beatrix CMS: Create Marketing Page - Title', function() {
   var cmsTitleFieldEN = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    it('Title Field should be a required text field', function(){
     utils.goToCreateMarketingContent();
      cmsTitleFieldEN.click();
      element(by.className('hint-msg')).click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect (cmsRequiredFieldMessage.isPresent()).toBe(true);
      browser.sleep(2000);
    });
    it('Title Field should allow 1-100 characters', function(){
      var oneHundredCharacters = '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789abcdefghij';
      cmsTitleFieldEN.sendKeys('a');
      expect(cmsTitleFieldEN.getAttribute('class')).toContain('ng-valid');
      cmsTitleFieldEN.sendKeys(oneHundredCharacters);
      expect(cmsTitleFieldEN.getAttribute('class')).toContain('ng-valid');
      expect(cmsTitleFieldEN.getAttribute('maxlength')).toEqual('100');
      browser.driver.navigate().refresh();
    });

    it('Title Field should allow any character', function(){
      cmsTitleFieldEN.sendKeys('QA Test -123 #$%^@&');
      expect(cmsTitleFieldEN.getAttribute('class')).toContain('ng-valid');
      browser.sleep(5000);
    });
  });

  describe('ALPHAPLTF-245: Beatrix CMS: Create Marketing Page - Body/Description section', function() {
    it('Long Description Field should allow any character, and apply RT Formats', function(){
      browser.executeScript('window.scrollTo(0,300);');
      browser.driver.sleep(2000)
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
      browser.driver.sleep(2000);
      cmsLongDescription.sendKeys(allCharacters);
      var cmsLongDescriptionTextInput = cmsLongDescription.element(by.tagName('p'));
      expect(cmsLongDescriptionTextInput.getAttribute('style')).toBe('text-align: center;');
      expect(cmsLongDescriptionTextInput.element(by.tagName('em')).element(by.tagName('strong')).isPresent()).toBe(true);
      browser.driver.navigate().refresh();
    });
  });

describe('Editing Marketing Page', function() {
    browser.sleep(1000);
    it('Draft Marketing Page Content Should Be Editable', function(){
      //Create Marketing Page as Draft
     utils.goToCreateMarketingContent();
     cmsInternalName.sendKeys('Internal Name Marketing Page CH' + utils.autoGenerateString(5) + new Date().toISOString().slice(0, 10));
     cmsTitle.get(0).sendKeys('Title Marketing Page CH');
     cmsSlug.get(0).click();
     cmsSaveDraft.click();
     browser.sleep(3000);
     //Edit previous Draft Marketing Page
      utils.editPage(browser.params.cmsSaveAsDraftButtonText);
      browser.sleep(1000);
    });
    it('Published Marketing Page Content Should Be Editable', function(){
      //Create Marketing Page as Publish
      utils.goToCreateMarketingContent();
      cmsInternalName.sendKeys('Internal Name Marketing Page CH' + utils.autoGenerateString(5) + new Date().toISOString().slice(0, 10));
      cmsTitle.get(0).sendKeys('Title Marketing Page CH');
      cmsSlug.get(0).click();
      cmsSavePublish.click(0);
      browser.sleep(5000);
      //Edit previous Published Marketing Page
      utils.editPage(browser.params.cmsPublishButtonText);
      browser.sleep(1000);
    });
  });

 describe('ALPHAPLTF-372: Beatrix CMS: Rendering of Marketing Page Form', function() {

    it('Header should be displayed.', function(){
      utils.goToCreateMarketingContent();
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
      expect(cmsTitle.get(0).isDisplayed()).toBe(true);
    });

    it('Add an Image Section should be present.', function(){
      expect(cmsAddImageSection.isPresent()).toBe(true);
    });

    it('Description Section should be displayed.', function(){
      expect(cmsDescriptionContainer.isDisplayed()).toBe(true);
    });

    it('Components List Section should be present.', function(){
      expect(cmsComponentsList.isDisplayed()).toBe(true);
    });

    it('Add Components Section should be present.', function(){
      expect(cmsAddComponentsSection.isDisplayed()).toBe(true);
    });

    it('MetaData Field Section should be displayed.', function(){
      expect(cmsMetaDataFieldContainer.isDisplayed()).toBe(true);
    });

    it('Discard CTA should be displayed.', function(){
      expect(cmsDiscardButton.isDisplayed()).toBe(true);
    });

    it('Save ad Draft CTA should be displayed.', function(){
      expect(cmsSaveDraft.isDisplayed()).toBe(true);
    });

    it('Publish CTA should be displayed.', function(){
      expect(cmsSavePublish.isDisplayed()).toBe(true);
      browser.get(browser.params.cmsPublishedContentListURL);
      browser.driver.navigate().refresh();
      browser.sleep(2000);
    });
  });
describe('Marketing Page Should Be Saved As Draft And Published', function() {
    //ALPHAPLTF-346
    it('Page Should Be Redirected To Draft Content Page After Saving A Content As Draft', function(){
      //We are in Published Content tab
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl+'content/list/published');
      //Create a Marketing Page and Save as Draft
    var title = marketingResources.createMarketingPage(browser.params.cmsSaveAsDraftButtonText);
      browser.sleep(1000);
      //We are in Draft Content tab
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl+'content/list/draft');
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);

      });
    it('Page Should Be Redirected To Published Content Page After Saving A Content As Published', function(){
      //We are in Draft Content tab
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl+'content/list/draft');
      //Create a Marketing Page and Save as Publish
      var title = marketingResources.createMarketingPage(browser.params.cmsPublishButtonText);
      browser.sleep(1000);
      //We are in Published Content Tab
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl+'content/list/published')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
    });
  });
  //ALPHAPLTF-876
  describe('ALPHAPLTF-876: [New] Beatrix CMS: Player State field in Marketing Page Content form', function(){
    var playerState = element(by.id('playerState'));
    var playerStateLabel = playerState.element(by.xpath('following-sibling::label'));
    var errorMessage = playerState.element(by.xpath('following-sibling::p[@class="error-msg"]'));
    var playerStateField = element.all(by.css('bx-dropdown'));
    var dropDown = element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li'));
    var selectionDD = element(by.css('#playerState'));
    it('Scenario 1: Display Player State dropdown', function(){
      utils.goToCreateMarketingContent();
      utils.waitForVisibilityOf(cmsInternalName);
      //Player State field is displayed and by default is displayed "Player State*"  and * is displayed too
      expect(playerStateLabel.getText()).toContain('Player State*');

      //Check that Payer State is a required field
      cmsSavePublish.click();
      utils.waitForVisibilityOf(errorMessage);
      expect(errorMessage.getText()).toContain('This is a required field.');
      browser.driver.navigate().refresh();
      browser.sleep(1000);
    });
    it('Scenario 2: User clicks on the Player State dropdown',function(){
      //Click on the drop down
      playerStateField.get(1).click();
      //All state are displayed
      expect(dropDown.get(0).getText()).toBe('Visitor State');
      expect(dropDown.get(1).getText()).toBe('Logged Out State');
      expect(dropDown.get(2).getText()).toBe('Logged In State');
      browser.driver.navigate().refresh();
      browser.sleep(1000);
    });
    it('Scenario 3: On click specific Player State', function(){
      //Select the second option
      utils.selectFromDropdown(playerState, 'Logged Out State');
      //Check that the second option has been correctly selected
      expect(selectionDD.getAttribute('value')).toBe('Logged Out State');
      browser.driver.navigate().refresh();
      browser.sleep(1000);
    });
    it('Scenario 4: Validation of Player State dropdown', function(){
      var x = utils.autoGenerateString(5);
      var today = new Date().toISOString().slice(0, 10);
      let titleName = "testAuto-" + x + today;
      //Fills the required fields except Player state
      gameResources.addInternalAndTitle(titleName);
      //Click on Save
      cmsSavePublish.click();
      utils.waitForVisibilityOf(errorMessage);
      //Player state is required field and message is displayed --> Marketing page is not saved
      expect(errorMessage.getText()).toBe('This is a required field.');
      browser.sleep(1000);
    });
  });//CLOSE ALPHAPLTF-876


describe('Verify Search And Filter In Add Component Modal In Marketing Form', function() {
    it('Section Should Be Added In Marketing Add Component Filter', function(){
      utils.goToCreateMarketingContent();
      element(by.css(browser.params.cmsSearchComponentCss)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      expect(element(by.css(browser.params.cmsSectionCheckBoxCss)).isDisplayed()).toBe(true);

      });
    });
 describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
    it('Check if Tag Field is displayed for all content type', function() {
      utils.goToCreateMarketingContent();
      utils.tagfieldPresent();
    }); //IT
  }); //SUB DESCRIBE
});
