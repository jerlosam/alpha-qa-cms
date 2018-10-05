var utils = require('../../utils/utilities');
var imageContentResources = require('../image_content/image_content_common');
var gameResources = require('../game_content/game_common');
var marketingResources = require('../marketing_content/marketing_common');
var contentBlockResources = require('../content_block/content_block_common');
var contentListData = require('../../data_files/contentInternalNames.json');
var menuListData = require('../../data_files/menuInternalNames.json');
var slideContentResources = require('../slide_content/slide_common');
var generalResources = require('../general/general_common');
var styling = require('../../data_files/rteStyling.json')
var contentPageResources = require('../content_page/content_page_common');
var rteData = require('../../data_files/rteLocators.json');
var menuContentResources = require('../menu/menu_common');

describe('CMS Common Across All Contents', function() {
  var dataLength = contentListData.length;
  var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();
  var cmsTitleName = element.all(by.id(browser.params.cmsTitleFieldId));
  var cmsSlugField = element.all(by.id(browser.params.cmsSlugField));
  var cmsCardImageSection = element.all(by.id(browser.params.cmsCardImageId)).first();
  var cmsSaveDraft = element.all(by.css(browser.params.cmsSaveDraftCss)).first();
  var cmsPublished = element(by.buttonText(browser.params.cmsPublishButtonText));// element.all(by.css(browser.params.cmsPublishedCss)).first();
  var cmsAddCardAltText = element(by.id('card_image_en.alt'));
  var cmsAddPageAltText = element(by.id('page_image_en.alt'));
  var secondaryTabs = ["Published", "Draft", "Unpublished"];
  var secTabsLength = secondaryTabs.length;
 browser.driver.manage().window().maximize();
  utils.loginToCms();
  beforeEach(function() {
  browser.get(browser.params.cmsUrl);

  });
  browser.sleep(500);

  describe('Verify Unpublish Functionality', function() {
    it('Unpublish A Game Content', function() {
      var title = gameResources.createGame('129', browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title);
      expect(element(by.className('custom-notification success alert')).isDisplayed()).toBe(true);
      expect(browser.getCurrentUrl()).toContain('/content/list/published');
      element(by.css('div.bx-tabs li:nth-child(3)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '2.0');
    });
    it('Unpublish A Marketing Content', function() {
      var title = marketingResources.createMarketingPage(browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title);
      expect(element(by.className('custom-notification success alert')).isDisplayed()).toBe(true);
      expect(browser.getCurrentUrl()).toContain('/content/list/published');
      element(by.css('div.bx-tabs li:nth-child(3)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '2.0');
    });
    it('Unpublish An Image Content', function() {
      var title = imageContentResources.createImageContent(browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title);
      expect(element(by.className('custom-notification success alert')).isDisplayed()).toBe(true);
      expect(browser.getCurrentUrl()).toContain('/content/list/published');
      element(by.css('div.bx-tabs li:nth-child(3)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '2.0');
    });
    it('Unpublish A Content Block', function() {
      var title = contentBlockResources.createContentBlock(browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title);
      expect(element(by.className('custom-notification success alert')).isDisplayed()).toBe(true);
      expect(browser.getCurrentUrl()).toContain('/content/list/published');
      element(by.css('div.bx-tabs li:nth-child(3)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '2.0');
    });
  });


  describe('Verify Publish Functionality', function() {
    it('Publish An Unpublished Game Content', function() {
      var title = gameResources.createGame('129', browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title); //Unpublish Content
      element(by.css('div.bx-tabs li:nth-child(3)')).click(); //Navigate to Unpublished List
      utils.unpublishOrPublishContent(title); //Publish Content
      expect(browser.getCurrentUrl()).toContain('/content/list/unpublished');
      element(by.css('div.bx-tabs li:nth-child(1)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '3.0');
    });
    it('Publish An Unpublished Marketing Content', function() {
      var title = marketingResources.createMarketingPage(browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title); //Unpublish Content
      element(by.css('div.bx-tabs li:nth-child(3)')).click(); //Navigate to Unpublished List
      utils.unpublishOrPublishContent(title); //Publish Content
      expect(browser.getCurrentUrl()).toContain('/content/list/unpublished');
      element(by.css('div.bx-tabs li:nth-child(1)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '3.0');
    });
    it('Publish An Unpublished Image Content', function() {
      var title = imageContentResources.createImageContent(browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title); //Unpublish Content
      element(by.css('div.bx-tabs li:nth-child(3)')).click(); //Navigate to Unpublished List
      utils.unpublishOrPublishContent(title); //Publish Content
      expect(browser.getCurrentUrl()).toContain('/content/list/unpublished');
      element(by.css('div.bx-tabs li:nth-child(1)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '3.0');
    });
    it('Publish An Unpublished Content Block', function() {
      var title = contentBlockResources.createContentBlock(browser.params.cmsPublishButtonText);
      utils.unpublishOrPublishContent(title); //Unpublish Content
      element(by.css('div.bx-tabs li:nth-child(3)')).click(); //Navigate to Unpublished List
      utils.unpublishOrPublishContent(title); //Publish Content
      expect(browser.getCurrentUrl()).toContain('/content/list/unpublished');
      element(by.css('div.bx-tabs li:nth-child(1)')).click();
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
      utils.checkContentVersion(title, '3.0');
    });
  });

  describe('CMS Login Field Validation', function() {
    it('Field should be present', function() {
      browser.manage().deleteAllCookies();
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

  describe('CMS Homepage Validation', function() {
    it('Should Have a Header', function() {
      browser.manage().deleteAllCookies();
      var cmsHeaderTabbedMenu = element(by.className('tabbed-menu'));
      var cmsHeaderUserProfile = element(by.className('bx-user-profile'));
      expect(cmsHeaderUserProfile.isPresent()).toBe(true);
      expect(cmsHeaderUserProfile.isPresent()).toBe(true);
      browser.sleep(3000);
    });
    it('Should Have the Main Nav/Tabs', function() {
      var cmsNavigationContent = element(by.className('navigation-content'));
      var cmsSubNavigation = element(by.className('sub-navigation-content'));
      expect(cmsNavigationContent.isPresent()).toBe(true);
      expect(cmsSubNavigation.isPresent()).toBe(true);
      browser.sleep(3000);
    });
    it('Should Have Content as default main tab', function() {
      var cmsActiveMenu = element(by.className('navigation-content')).element(by.className('nav-link active'));
      expect(cmsActiveMenu.getText()).toEqual('CONTENT');
      browser.sleep(3000);
    });
    it('Should Have Existing Content as the default active subheader', function() {
      var cmsActiveSubMenu = element(by.className('sub-navigation-content')).element(by.className('nav-link active'));
      expect(cmsActiveSubMenu.getText()).toEqual('Existing Content');
      browser.sleep(3000);
    });
  });

  describe('CMS Brand Switcher Validation', function() {
    it('Display available brands', function() {
      browser.manage().deleteAllCookies();
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

  //ALPHAPLTF-666
  describe('ALPHAPLTF-666 [New] Beatrix CMS: Behavior of Slug field',function(){
    var random = utils.autoGenerateString(5);
    var date = new Date().toISOString().slice(0, 10);
    var titleName = "content page test ch-" + random + date;
    var slugName = "content-page-test-ch-";
    var slugNameeditable = slugName + 'editable';
    var titleNoSupportedLan =  '新年促销';
    var titleSupportAndNOSupportLan = 'content新年page新年';
    var slugOnlySupportLang = 'content-page';
    var slugEditable = 'editable';

    it('Scenario 1: Create a new Page Content - Title supported language -  Slug is populated',function(){
      //Create Content Page
      utils.createContentPage();
      browser.sleep(500);
      utils.selectFromDropdown(element.all(by.id('page_type')), 'Generic');
      browser.sleep(500);
      gameResources.addInternalAndTitle(titleName);

      cmsSlugField.get(0).click();

    //CHECK THAT TITLE HAVE BEEN AUTOMATICALLY POPULATED IN SLUG AND SPACES CONVERTED TO HYPTEN -
      expect(cmsSlugField.get(0).getAttribute('value')).toContain(slugName);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(0).clear();
      cmsSlugField.get(0).sendKeys(slugNameeditable);
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugNameeditable);

      //Check that it is populated in the other Lang Tab
      //ES
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugNameeditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(1).clear();
      cmsSlugField.get(1).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);
      //PT
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugNameeditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(2).clear();
      cmsSlugField.get(2).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      cmsSlugField.get(2).getAttribute('value').getText().then(console.log);

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(2000);
    });//CLOSE Scenario 1

    it('Scenario 2: Title field is edited - Slug field shall remain as is',function(){
      //Edit Title of the Content created in the previous Scenario
      browser.sleep(1000);
      expect(element.all(by.css('td.bx-content-name')).get(0).getText()).toContain(titleName);
      browser.sleep(1000);
      element.all(by.css('td.bx-content-name')).get(0).click();
      browser.sleep(1000);
      cmsTitleName.get(0).sendKeys('Edited');
      browser.sleep(500);

      //Slug field remain as is
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugNameeditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(0).clear();
      cmsSlugField.get(0).sendKeys(slugNameeditable +'E');
      browser.sleep(500);
      cmsTitleName.get(0).click();
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugNameeditable + 'E');

      //CHECH IN THE OTHER LANG TAB
      //ES
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      //Slug field remain as is
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(1).clear();
      cmsSlugField.get(1).sendKeys(slugNameeditable +'E');
      browser.sleep(500);
      cmsTitleName.get(1).click();
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugNameeditable + 'E');
      browser.sleep(500);
      //PT
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      //Slug field remain as is
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(2).clear();
      cmsSlugField.get(2).sendKeys(slugNameeditable +'E');
      browser.sleep(500);
      cmsTitleName.get(2).click();
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugNameeditable + 'E');

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(2000);
    });//CLOSE Scenario 2

    it('Scenario 3: Slug field is removed and edited the Title - Slug is populated',function(){
      //Access to the  Content created in the Scenario 1
      browser.sleep(5000);
      expect(element.all(by.css('td.bx-content-name')).get(0).getText()).toContain(titleName);
      browser.sleep(500);
      element.all(by.css('td.bx-content-name')).get(0).click();
      browser.sleep(500);

      //Delete Slug Field
      cmsSlugField.get(0).clear();
      //Edit Title Field
     cmsTitleName.get(0).clear();
     cmsTitleName.get(0).sendKeys('E');

      // Check that the Title  has been populated in Slug field and Spaces converted to Hypten
      cmsSlugField.get(0).click();
      browser.sleep(1000);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual('E');
      //Slug field is editable
      cmsSlugField.get(0).clear();
      cmsSlugField.get(0).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugEditable);

      // @Jhenna confirms that in the other tabs the behavious should be the same
      //CHECH IN THE OTHER LANG TAB
      //ES
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      //Delete Slug Field
      cmsSlugField.get(1).clear();
      //Edit Title Field
      cmsTitleName.get(1).clear();
      cmsTitleName.get(1).sendKeys('E');

      // Check that the Title  has been populated in Slug field and Spaces converted to Hypten
      cmsSlugField.get(1).click();
      browser.sleep(1000);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual('E');
      //Slug field is editable
      cmsSlugField.get(1).clear();
      cmsSlugField.get(1).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);
      //PT
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      //Delete Slug Field
      cmsSlugField.get(2).clear();
      //Edit Title Field
      cmsTitleName.get(2).clear();
      cmsTitleName.get(2).sendKeys('E');

      // Check that the Title  has been populated in Slug field and Spaces converted to Hypten
      cmsSlugField.get(2).click();
      browser.sleep(1000);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual('E');
      //Slug field is editable
      cmsSlugField.get(2).clear();
      cmsSlugField.get(2).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(2000);

    });//CLOSE Scenario 3

    it('Scenario 4:  Slug field is removed and did not edit the existing Title - Slug remains empty',function(){
      //Access to the  Content created in the Scenario 1
      browser.sleep(1000);
      expect(element.all(by.css('td.bx-content-name')).get(0).getText()).toContain(titleName);
      browser.sleep(500);
      element.all(by.css('td.bx-content-name')).get(0).click();
      browser.sleep(500);

      //Delete Slug Field
      cmsSlugField.get(0).clear();

      //Check that is not populated.
      cmsTitleName.get(0).click();
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual('');
      browser.sleep(500);

      //Slug field is editable
      cmsSlugField.get(0).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugEditable);

      //CHECK THAT THE BEHAVIOUR IS THE SAME IN THE OTHER LANG Tab
      //ES
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      //Delete Slug Field
      cmsSlugField.get(1).clear();
      //Check that is not populated.
      cmsTitleName.get(1).click();
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual('');
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(1).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);
      //PT
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      //Delete Slug Field
      cmsSlugField.get(2).clear();
      //Check that is not populated.
      cmsTitleName.get(2).click();
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual('');
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(2).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(2000);

    });//CLOSE Scenario 4

    it('Scenario 5: Create a new Page Content - Title unsupported language - Slug not populate',function(){
      //Create Content Page
      utils.createContentPage();
      browser.sleep(1000);
      utils.selectFromDropdown(element.all(by.id('page_type')), 'Generic');
      cmsInternalName.sendKeys(titleName);
      cmsTitleName.get(0).sendKeys(titleNoSupportedLan);
      cmsSlugField.get(0).click();

      //Check that Title is not populated in Slug
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual('');
      browser.sleep(500);

      //Check that Title is not populated in Slug in the other Lang Tab
      //ES
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual('');
      //PT
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual('');


      //Slug field is editable in Evrey Lang Tab
      //PT
      cmsSlugField.get(2).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);
      //EN
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(1)')).click();
      cmsSlugField.get(0).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugEditable);
      //ES
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      cmsSlugField.get(1).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(5000);

    });//CLOSE Scenario 5

    it ('Scenario 6: Title field is edited - Unsupported Language - Slug reamin as is',function(){
      //Access to the  Content created in the Scenario 1
      browser.sleep(1000);
      expect(element.all(by.css('td.bx-content-name')).get(0).getText()).toContain(titleName);
      browser.sleep(1000);
      element.all(by.css('td.bx-content-name')).get(0).click();
      browser.sleep(500);

      //Edit Title with unsupported language
      cmsTitleName.get(0).clear();
      cmsTitleName.get(0).sendKeys(titleNoSupportedLan);
      //Slug field remain as is
      cmsSlugField.get(0).click();
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(0).clear();
      cmsSlugField.get(0).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);

      //CHECK THAT THE BEHAVIOUR IS THE SAME IN THE OTHER LANG Tab
      //ES
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      //Edit Title with unsupported language
      cmsTitleName.get(1).clear();
      cmsTitleName.get(1).sendKeys(titleNoSupportedLan);
      //Slug field remain as is
      cmsSlugField.get(1).click();
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(1).clear();
      cmsSlugField.get(1).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      //PT
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      //Edit Title with unsupported language
      cmsTitleName.get(2).clear();
      cmsTitleName.get(2).sendKeys(titleNoSupportedLan);
      //Slug field remain as is
      cmsSlugField.get(2).click();
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);
      //Slug field is editable
      cmsSlugField.get(2).clear();
      cmsSlugField.get(2).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);
      browser.sleep(500);

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(3000);

    });//CLOSE Scenario 6

    it('Scenario 7: Create a new Page Content - Combination supported and unsupported language - Only supported part wil be populate in Slug',function(){
      //Create Content Page
      utils.createContentPage();
      utils.selectFromDropdown(element.all(by.id('page_type')), 'Generic');
      cmsInternalName.sendKeys(titleName);
      cmsTitleName.get(0).sendKeys(titleSupportAndNOSupportLan);
      cmsSlugField.get(0).click();

      //Check that only part of Title with suppurted lauage is populated in Slug
      cmsSlugField.get(0).click();
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugOnlySupportLang);

      //Check that Title is not populated in Slug in the other Lang Tab
      //ES
      element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugOnlySupportLang);
      //PT
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(3)')).click();
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugOnlySupportLang);

      //Slug field is editable in Evrey Lang Tab
      //PT
      cmsSlugField.get(2).clear();
      cmsSlugField.get(2).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(2).getAttribute('value')).toEqual(slugEditable);
      //EN
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(1)')).click();
      cmsSlugField.get(0).clear();
      cmsSlugField.get(0).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(0).getAttribute('value')).toEqual(slugEditable);
      //ES
      element(by.css(' bx-tabs > div > nav > ul > li:nth-child(2)')).click();
      cmsSlugField.get(1).clear();
      cmsSlugField.get(1).sendKeys(slugEditable);
      browser.sleep(500);
      expect(cmsSlugField.get(1).getAttribute('value')).toEqual(slugEditable);

      //SAVE
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.sleep(3000);

    });//CLOSE Scenario 7

  });//CLOSE ALPHAPLTF-666

describe('Verify Rich Text Editor', function(){
  it('Styling Should Be Saved In RTE', function() {
    var x = generalResources.createAMarketingContentWithRTStyling(browser.params.cmsPublishedCss, styling[0].sourceCode);
    browser.sleep(5000);
    browser.get(browser.params.cmsPublishedContentListURL);
    utils.getElementByTitle(x, "#contentManagementList td.bx-content-name span").then(function(el){
    el.click();
    });
        element(by.id(browser.params.cmsRteViewButtonById)).click();
        element(by.id(browser.params.cmsRteSourceCode)).click();
        var rteStyling = element(by.id(browser.params.cmsRteSourceCodeTextFieldById)).getAttribute('value');
        var style=rteStyling.then(function(text) {return text.trim();
        expect(style).toEqual(styling[0].sourceCode);
})
});
});
//ALPHAPLTF-784
  describe('Verify Search And Filter In Published Content List', function() {



 function testjj(secTabsLength) {


      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - All Supported Content Types Should Be Displayed For "All Types Selected"', function() {
      utils.clickEachContentTab(secTabsLength);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('All Types Selected');
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        expect(element(by.id(browser.params.cmsMarketingCheckBoxId)).getAttribute('checked')).toEqual('true');
        expect(element(by.id(browser.params.cmsGameCheckBoxId)).getAttribute('checked')).toEqual('true');
        expect(element(by.id(browser.params.cmsContentBlockCheckBoxId)).getAttribute('checked')).toEqual('true');
        expect(element(by.id(browser.params.cmsSlideCheckBoxId)).getAttribute('checked')).toEqual('true');
        expect(element(by.id(browser.params.cmsSlideShowCheckBoxId)).getAttribute('checked')).toEqual('true');
        expect(element(by.id(browser.params.cmsContentCheckBoxId)).getAttribute('checked')).toEqual('true');
        expect(element(by.id(browser.params.cmsImageCheckBoxId)).getAttribute('checked')).toEqual('true');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Deselect Link Should Unchecked All Checkboxes And Displays Default List', function() {
        utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        expect(element(by.css('a.deselect-all')).isDisplayed()).toBe(true);
        element(by.css('a.deselect-all')).click();
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('No Type selected');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Marketing Contents Should Be Displayed When Marketing Is Checked', function() {
        utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMarketingCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Marketing Page');
        utils.checkFilteredList('Marketing Page', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Game Contents Should Be Displayed When Casino Game Page Is Checked', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsGameCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Casino Game Page');
        utils.checkFilteredList('Casino Game Page', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Content Block Contents Should Be Displayed When Content Block Is Checked', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentBlockCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Content Block');
        utils.checkFilteredList('Content Block', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Slide Contents Should Be Displayed When Slide Is Checked', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsSlideCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Slide');
        utils.checkFilteredList('Slide', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Slideshow Contents Should Be Displayed When Slideshow Is Checked', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsSlideShowCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Slideshow');
        utils.checkFilteredList('Slideshow', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Content Page Contents Should Be Displayed When Content Page Is Checked', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Content Page');
        utils.checkFilteredList('Content Page', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Image Contents Should Be Displayed When Image Is Checked', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsImageCheckBoxId]);
        expect(element(by.css(browser.params.contentListMultiSelectCss)).getAttribute('value')).toEqual('Image');
        utils.checkFilteredList('Image', 'contentManagementList');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Filtered 2 Content Types Should Be Displayed In Content List', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId, browser.params.cmsImageCheckBoxId]);
        expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('2 Types Selected');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId, browser.params.cmsImageCheckBoxId, browser.params.cmsSlideShowCheckBoxId]);
        expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('3 Types Selected');
      });
      it(secondaryTabs[secTabsLength - 1] +'-'+ 'Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
      utils.clickEachContentTab(secTabsLength);
        element(by.css(browser.params.contentListMultiSelectCss)).click();
        element(by.css('a.deselect-all')).click();
        slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId, browser.params.cmsImageCheckBoxId, browser.params.cmsSlideShowCheckBoxId, browser.params.cmsMarketingCheckBoxId]);
        expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('4 Types Selected');
      });
};
  for (i = 1; i <= secTabsLength; i++) {
      testjj(i);

  }


    it('Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
      browser.get(browser.params.cmsPublishedContentListURL);

      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      expect(element(by.css('a.deselect-all')).isDisplayed()).toBe(true);
      element(by.css('a.deselect-all')).click();
      expect(element(by.id('marketing')).getAttribute('checked')).toEqual('false');
      expect(element(by.id('game')).getAttribute('checked')).toEqual('false');
      expect(element(by.id('content_block')).getAttribute('checked')).toEqual('false');
      expect(element(by.id('slide')).getAttribute('checked')).toEqual('false');
      expect(element(by.id('slideshow')).getAttribute('checked')).toEqual('false');
      expect(element(by.id('content_page')).getAttribute('checked')).toEqual('false');
      expect(element(by.id('image')).getAttribute('checked')).toEqual('false');
      expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('No Type selected');
    });
    it('Search By Multi Select Dropdown - Marketing Contents Should Be Displayed When Marketing Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMarketingCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Marketing Page');
      slideContentResources.checkFilteredList('Marketing Page');
    });
    it('Search By Multi Select Dropdown - Game Contents Should Be Displayed When Casino Game Page Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsGameCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Casino Game Page');
      slideContentResources.checkFilteredList('Casino Game Page');
    });
    it('Search By Multi Select Dropdown - Content Block Contents Should Be Displayed When Content Block Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentBlockCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Content Block');
      slideContentResources.checkFilteredList('Content Block');
    });
    it('Search By Multi Select Dropdown - Slide Contents Should Be Displayed When Slide Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsSlideCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Slide');
      slideContentResources.checkFilteredList('Slide');
    });
    it('Search By Multi Select Dropdown - Slideshow Contents Should Be Displayed When Slideshow Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsSlideShowCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Slideshow');
      slideContentResources.checkFilteredList('Slideshow');
    });
    it('Search By Multi Select Dropdown - Content Page Contents Should Be Displayed When Content Page Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Content Page');
      slideContentResources.checkFilteredList('Content Page');
    });
    it('Search By Multi Select Dropdown - Image Contents Should Be Displayed When Image Is Checked', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsImageCheckBoxId]);
      expect(element(by.css(browser.params.cmsMultiSelectContainerByCss)).getAttribute('value')).toEqual('Image');
      slideContentResources.checkFilteredList('Image');
    });
    it('Search By Multi Select Dropdown - Filtered 2 Content Types Should Be Displayed In Content List', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId, browser.params.cmsImageCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('2 Types Selected');
    });
    it('Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId, browser.params.cmsImageCheckBoxId, browser.params.cmsSlideShowCheckBoxId, browser.params.cmsSlideCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('3 Types Selected');
    });
    it('Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
      browser.get(browser.params.cmsPublishedContentListURL);
      element(by.buttonText(browser.params.cmsMultiSelectContainerByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId, browser.params.cmsImageCheckBoxId, browser.params.cmsSlideShowCheckBoxId,]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('4 Types Selected');
    });
});
describe('Verify Search Name In Content And Menu List', function() {
  var menuDataLength = menuListData.length;
it('Valid Content Should Be Returned As Results In Search Name Field', function() {
    for (var i = 0; i < dataLength; i++) {
      browser.get(contentListData[i].tab);
      browser.waitForAngular();
      utils.searchByName(contentListData[i].input);
      browser.waitForAngular();
      expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(contentListData[i].input);
    }
  });
  it('Valid Menu Should Be Returned As Results In Search Name Field', function() {
    for (var i = 0; i < menuDataLength; i++) {
      browser.get(menuListData[i].tab);
      browser.waitForAngular();
      utils.searchByName(menuListData[i].input);
      browser.waitForAngular();
      expect(element.all(by.css('td.bx-menulist-name span')).getText()).toContain(menuListData[i].input);
    }
  });

  it('No Results Should Be Returned For Non Existing Contents', function() {
    for (var i = 0; i < dataLength; i++) {
      browser.get(contentListData[i].tab);
      utils.searchByName('`');
      expect(element(by.css(browser.params.cmsContentAndMenuEmptyResult)).isDisplayed()).toBe(true);
      expect(element(by.css(browser.params.cmsContentAndMenuEmptyResult)).getText()).toEqual(browser.params.cmsContentEmptyMessage);
    }
    for (var i = 0; i < menuDataLength; i++) {
      browser.get(menuListData[i].tab);
      utils.searchByName('`');
      expect(element(by.css(browser.params.cmsContentAndMenuEmptyResult)).isDisplayed()).toBe(true);
      expect(element(by.css(browser.params.cmsContentAndMenuEmptyResult)).getText()).toEqual(browser.params.cmsMenuEmptyMessage);
    }
  });
});



//Start: ALPHAPLTF-140: [New] Beatrix CMS: View Published or Draft Content List
describe('Verify Content List - Secondary tabs and Table List', function() {
  var secondaryTabs = ["Published", "Draft", "Unpublished"];
  var secTabsLength = secondaryTabs.length;
  var tableList = ["Last Update\nDate/Time", "Name", "Author", "Type", "Page Type", "Languages", "Actions"];
  var tableListLength = tableList.length;

  function secondary_tabs_position(secondaryTabs, secTabsLength, tableListLength) {
    it(secondaryTabs[secTabsLength - 1] + ' Content tab position: ' + secTabsLength, function() {
      var secondaryTabsLocator = browser.params.cmsContentTabSecondaryTabs;
      var cmsContentTabSecTabsArray = secondaryTabsLocator + '[' + secTabsLength + ']';
      element(by.xpath(cmsContentTabSecTabsArray)).click();
      browser.driver.sleep(1000);
      expect(element(by.xpath(cmsContentTabSecTabsArray)).isPresent()).toBe(true);
      expect(element.all(by.xpath(cmsContentTabSecTabsArray)).getText()).toContain(secondaryTabs[secTabsLength - 1] + " Content");
      console.log("\n");
    });
  }

  function secondary_tabs_table_list(tableList, tableListLength) {
    it('Table Header: ' + tableList[tableListLength - 1] + ' - position: ' + tableListLength, function() {
      var tableListLocator = browser.params.cmsContentTableListHeader;
      var cmsContentTableListHeaderArray = tableListLocator + '[' + tableListLength + ']';
      browser.driver.sleep(1000);
      expect(element(by.xpath(cmsContentTableListHeaderArray)).isPresent()).toBe(true);
      expect(element.all(by.xpath(cmsContentTableListHeaderArray)).getText()).toContain(tableList[tableListLength - 1]);
    });
  }

  for (i = 1; i <= secTabsLength; i++) {
    //console.log("this is i "+i+": "+ secondaryTabs[i-1]);
    secondary_tabs_position(secondaryTabs, i)
      for (j = 1; j <= tableListLength; j++) {
          //  console.log("this is j "+j+": "+ tableList[j-1]);
          secondary_tabs_table_list(tableList, j)
        }
  }
});
//End: ALPHAPLTF-140: [New] Beatrix CMS: View Published or Draft Content List

//ALPHAPLTF-674
describe('ALPHAPLTF-674: [New] Beatrix CMS: Validation of Existing Slug', function(){
  //VAR
  var date = new Date().toISOString().slice(0, 10);
  var cmsAddCardAltText = element(by.id('card_image_en.alt'));
  var cmsAddPageAltText = element(by.id('page_image_en.alt'));
  var cmsLongDescription = element(by.id(browser.params.cmsLongDescriptionId));
  var longDescription = 'Long Description Game Page CH';
  var cmsGameField = element(by.id('game_id_en_0'));
  var slugField = element.all(by.id('slug'));
  var slugGame = 'SlugGamePage' + utils.autoGenerateString(5) + date;
  var slugContent = 'SlugContentPage' + utils.autoGenerateString(5) + date;
  var slugContentSame = 'SlugContentSamePage' + utils.autoGenerateString(5) + date;

//Scenario 1
  it('Scenario 1: Create a Game  Page', function(){
    var gametitle1 = 'Internal Name Game Page' + utils.autoGenerateString(5) + date;
    utils.createGameContent();
    browser.sleep(500);
    element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
    browser.sleep(500);
    element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
    browser.sleep(500);
    //Fill the required fields
    gameResources.addInternalAndTitle(gametitle1);
    slugField.get(0).click();
    slugField.get(0).clear();
    slugField.get(0).sendKeys(slugGame);
    browser.sleep(500);
    cmsGameField.sendKeys('129');
    cmsGameField.sendKeys(protractor.Key.ENTER);
    browser.sleep(500);
    element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li')).first().click();
    element.all(by.id('short_description')).first().sendKeys('Short Description Game Page CH');
    browser.ignoreSynchronization = true
    browser.switchTo().frame(0);
    browser.driver.sleep(1000);
    cmsLongDescription.sendKeys(longDescription);
    expect(cmsLongDescription.isPresent()).toBe(true);  
    browser.switchTo().defaultContent();
    utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
    browser.sleep(1000);
    expect (cmsAddCardAltText.isPresent()).toBe(true);
    cmsAddCardAltText.sendKeys('test');
    utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
    browser.sleep(1000);
    expect (cmsAddPageAltText.isPresent()).toBe(true);
    cmsAddPageAltText.sendKeys('test');

    //Click on Save as Published
    element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
    browser.sleep(5000);
    //utils.waitForVisibilityOf(element(by.css(browser.params.cmsCreateNewContentCss)))
    var publishTab = element.all(by.css('li.active')).getText();
    publishTab.then(console.log);
    expect(publishTab).toContain('Published Content');
    browser.sleep(1000);
  });

      it('Scenario 1: Existing Slug with the same brand, content type and Language -- Game Page', function(){
        var gametitle2 = 'Internal Name Game Page' + utils.autoGenerateString(5) + date;
        utils.createGameContent();
        browser.sleep(1000);
        //CHOOSE BRAND
        element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
        browser.sleep(500);
        element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
        browser.sleep(500);
        let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
        expect (BodogBrandLanguage.count()).toBe(3);
        expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
        expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
        gameResources.addInternalAndTitle(gametitle2);
        browser.sleep(1000);
        slugField.get(0).click();
        slugField.get(0).clear();
        slugField.get(0).sendKeys(slugGame);
        cmsGameField.click();
        browser.sleep(1000);
        let errorMessage = element(by.className('custom-field col-xs-4 clear-row invalid-field')).element(by.css('p'));
        expect (errorMessage.getText()).toContain('Slug already exists.');
        browser.driver.navigate().refresh();
        browser.sleep(5000);
      }); //CLOSE Scenario 1

     //Scenario 2
    it('Scenario 2: Create a Article', function(){
         var articletitle1 = 'Internal Name Article Page' + utils.autoGenerateString(5) + date;
         utils.createContentPage();
         browser.sleep(1000);

         //CHOOSE BRAND
         element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
         browser.sleep(500);
         element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
         browser.sleep(500);
         //CHOOSE PAGE TYPE
         element.all(by.css('bx-dropdown')).get(1).click();
         element.all(by.css('ul.custom-droplist')).get(1).element(by.cssContainingText('li','Article')).click();

         let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
         expect (BodogBrandLanguage.count()).toBe(3);
         expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
         expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
         gameResources.addInternalAndTitle(articletitle1);
         slugField.get(0).click();
         slugField.get(0).clear();
         slugField.get(0).sendKeys(slugContent);

         utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
         browser.sleep(1000);
         expect (cmsAddCardAltText.isPresent()).toBe(true);
         cmsAddCardAltText.sendKeys('test');
         utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
         browser.sleep(1000);
         expect (cmsAddPageAltText.isPresent()).toBe(true);
         cmsAddPageAltText.sendKeys('test');

         //Click on Save as Published
         element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
         browser.sleep(4000);
         var publishTab = element.all(by.css('li.active')).getText();
         expect(publishTab).toContain('Published Content');
         browser.sleep(1000);
      });
    //
    it('Scenario 2: Existing Slug with the same brand, content type, page type and Language -- Article', function(){
      var articletitle2 = 'Internal Name Article Page' + utils.autoGenerateString(5) + date;
      utils.createContentPage();
      browser.sleep(500);
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      browser.sleep(500);
      element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
      browser.sleep(500);
      //CHOOSE PAGE TYPE
      element.all(by.css('bx-dropdown')).get(1).click();
      element.all(by.css('ul.custom-droplist')).get(1).element(by.cssContainingText('li','Article')).click();

      let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      expect (BodogBrandLanguage.count()).toBe(3);
      expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
      expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
      gameResources.addInternalAndTitle(articletitle2);
      slugField.get(0).click();
      slugField.get(0).clear();
      slugField.get(0).sendKeys(slugContent);
      cmsTitleName.get(0).click();
      browser.sleep(1000);
    //  element.all(by.id('slug')).get(0).sendKeys('SlugTest');
      let errorMessage = element(by.className('custom-field col-xs-4 clear-row invalid-field')).element(by.css('p'));
      expect (errorMessage.getText()).toContain('Slug already exists.');
      browser.driver.navigate().refresh();
      browser.sleep(1000);
    });//CLOSE Scenario 2

    //Scenario 3
      it('Scenario 3: Create a Article with the same Slug that the next Promotion', function(){
          var promotiontitle = 'Internal Name Article Page' + utils.autoGenerateString(5) + date;
          utils.createContentPage();
          browser.sleep(500);
          //CHOOSE BRAND
          element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
          browser.sleep(500);
          element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
          browser.sleep(500);
          //CHOOSE PAGE TYPE
          element.all(by.css('bx-dropdown')).get(1).click();
          element.all(by.css('ul.custom-droplist')).get(1).element(by.cssContainingText('li','Article')).click();

          let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
          expect (BodogBrandLanguage.count()).toBe(3);
          expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
          expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
          gameResources.addInternalAndTitle(promotiontitle);
          slugField.get(0).click();
          slugField.get(0).clear();
          slugField.get(0).sendKeys(slugContentSame);
          browser.sleep(1000);
          utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
          browser.sleep(1000);
          expect (cmsAddCardAltText.isPresent()).toBe(true);
          cmsAddCardAltText.sendKeys('test');
          utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
          browser.sleep(1000);
          expect (cmsAddPageAltText.isPresent()).toBe(true);
          cmsAddPageAltText.sendKeys('test');

          //Click on Save as Published
          element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
          browser.sleep(4000);
          var publishTab = element.all(by.css('li.active')).getText();
          expect(publishTab).toContain('Published Content');
          browser.sleep(1000);
        });

    it('Scenario 3: Existing Slug with the diferent brand or content type or page type or Language (Create Promotion with same Slug that  previous Article)', function(){
        var articletitle3 = 'Internal Name Promotion Page' + utils.autoGenerateString(5) + date;
        utils.createContentPage();
        browser.sleep(500);

        //CHOOSE BRAND
        element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
        element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
        //CHOOSE PAGE TYPE
        element.all(by.css('bx-dropdown')).get(1).click();
        element.all(by.css('ul.custom-droplist')).get(1).element(by.cssContainingText('li','Promotion')).click();

        let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
        expect (BodogBrandLanguage.count()).toBe(3);
        expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
        expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
        gameResources.addInternalAndTitle(articletitle3);
        slugField.get(0).click();
        slugField.get(0).clear();
        slugField.get(0).sendKeys(slugContentSame);

        utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
        browser.sleep(1000);
        expect (cmsAddCardAltText.isPresent()).toBe(true);
        cmsAddCardAltText.sendKeys('test');
        utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
        browser.sleep(1000);
        expect (cmsAddPageAltText.isPresent()).toBe(true);
        cmsAddPageAltText.sendKeys('test');

        //Click on Save as Published
        element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
        browser.sleep(10000);
        var publishTab = element.all(by.css('li.active')).getText();
        expect(publishTab).toContain('Published Content');
        browser.sleep(1000);
    });//CLOSE Scenario 3
  });  //CLOSE ALPHAPLTF-674
  describe('Verify Rich Text Editor', function() {
    var rtePages = [browser.params.createMarketingPageURL, browser.params.createSlidePageURL, browser.params.createContentBlockPageURL, browser.params.createContentPageURL, browser.params.createCasinoGamePageURL]
    it('RTE Should Display Basic Formatting', function() {
        rtePages.forEach(function(url){
        browser.get(url);
        browser.executeScript('window.scrollTo(0,600);').then(function () {
        })
        browser.sleep(1000);
        element(by.id('mceu_28-open')).click();
        for (var i = 0; i < rteData.format.length; ++i){
            var rteLoc = element(by.css(rteData.format[i].locatorByClassName));
            expect(rteLoc.isDisplayed()).toBeTruthy();
          }
      });
    });
      it('Color Picker For Text And Background Colors Should Be Displayed', function() {
        rtePages.forEach(function(url){
          browser.get(url);
            browser.executeScript('window.scrollTo(0,600);').then(function () {
            })
          expect(element(by.css(".localised-tab-en i[class='mce-ico mce-i-forecolor']")).isDisplayed()).toBeTruthy();
          expect(element(by.css(".localised-tab-en i[class='mce-ico mce-i-backcolor']")).isDisplayed()).toBeTruthy();
          element.all(by.css(".localised-tab-en div[aria-label='Text color'] button.mce-open")).first().click();
          expect(element.all(by.css("div.mce-floatpanel table.mce-grid")).first().isDisplayed(true));
          element.all(by.css(".localised-tab-en div[aria-label='Background color'] button.mce-open")).first().click();
          expect(element.all(by.css("div.mce-floatpanel table.mce-grid")).get(1).isDisplayed(true));
        });
      });
    it('Alignment, Indentation, And Lists Formatting Should Be Displayed', function() {
      rtePages.forEach(function(url){
        browser.get(url);
          browser.executeScript('window.scrollTo(0,600);').then(function () {
          })
        for (var i = 0; i < rteData.alignment.length; ++i){
          var rteLoc = element(by.css(rteData.alignment[i].locatorByClassName));
          expect(rteLoc.isDisplayed()).toBeTruthy();
        }
      });
    });
    it('Insert Image, Link, Table And Special Character Should Be Displayed', function() {
      rtePages.forEach(function(url){
        browser.get(url);
          browser.executeScript('window.scrollTo(0,600);').then(function () {
          })
          element(by.id('mceu_27-open')).click();
        for (var i = 0; i < rteData.insert.length; ++i){
          var rteLoc = element(by.css(rteData.insert[i].locatorByClassName));
          expect(rteLoc.isDisplayed()).toBeTruthy();
        }
      });
    });
    it('Editing Settings And Undo/Redo Options Should Be Displayed', function() {
      rtePages.forEach(function(url){
        browser.get(url);
          browser.executeScript('window.scrollTo(0,600);').then(function () {
          })
          element(by.id('mceu_25-open')).click();
        for (var i = 0; i < rteData.edit.length; ++i){
          var rteLoc = element(by.css(rteData.edit[i].locatorByClassName));
          expect(rteLoc.isDisplayed()).toBeTruthy();
        }
      });
    });
  });//close rte VERIFICATION

//ALPHAPLTF-716
  describe('ALPHAPLTF-716: [Enhancement] Beatrix CMS: Edited Published/Unpublished Content or Menu shall retain its current published/unpublished version in the Published/Unpublished Content/Menus list', function(){
    //VAR
    var contentType = element.all(by.id('page_type'));
    var date = new Date().toISOString().slice(0, 10);
    var titleName = 'Internal Name Generic Page CH' + utils.autoGenerateString(5) + date;
    var titleName2 = 'Internal Name Generic Page CH2' + utils.autoGenerateString(5) + date;
    var contentNameList = element.all(by.css('td.bx-content-name'));
    var newContent = element(by.css(browser.params.cmsCreateNewContentCss));
    var existingContent = element(by.css(browser.params.cmsExistingContentCss));
    var overlay = element(by.css('div.modal-content.modal-small.screen-center'));
    var yes = element.all(by.css('button.custom-cta.primary'));
    var unpublishedList = element(by.css('bx-tabs > div > nav > ul > li:nth-child(3)'));
    var unpublishedLink =   element.all(by.css('td.bx-content-actions > button > span'));
    var draftTab = element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)'));
    it('Scenario 1: Edited an existing published content, navigate away and saved changes', function(){
      //Create a Content Page and Published
      utils.createContentPage();
      utils.selectFromDropdown(contentType, 'Generic');
      gameResources.addInternalAndTitle(titleName);
      cmsSlugField.get(0).click();
      //SAVE (PUBLISH)
      cmsPublished.click();
      browser.sleep(2000);
      // utils.waitForVisibilityOf(contentNameList);
      //Redirected to Published Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      //Edit the previous published content
      expect(contentNameList.get(0).getText()).toContain(titleName);
      contentNameList.get(0).click();
      cmsInternalName.sendKeys('Edited');
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      //Navigate away and pop-up confirmation is displayed
      newContent.click();
      expect(overlay.isDisplayed()).toBe(true);
      //Click on Yes
      yes.get(1).click();
      browser.sleep(3000);
      //Changes are saved as Draft and we are redirected to Draft tab
      expect(element(by.css('bx-tabs > div > nav > ul > li.active')).getText()).toContain('Draft Content');
      //Name of Draft is updated with the changes done
      expect(contentNameList.get(0).getText()).toContain(titleName + 'Edited');
      //Check version of draft
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionDraft = element(by.css('div.bx-panel-header-version')).getText();
      //Navigate to Published Tab to check the version of Published one
      existingContent.click();
      //Redirected to Published Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      //The title of the current published content remain as is
      expect(contentNameList.get(0).getText()).toContain(titleName);
      //Check version of current Published content
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionPublished = element(by.css('div.bx-panel-header-version')).getText();
      //Version of Published content is the same that the Draft one
      expect(versionDraft).toEqual(versionPublished);
      browser.sleep(4000);
    });//CLOSE Scenario 1
    it('Scenario 2: Edited an existing published content and saved it as draft', function(){
      //Navigate to Published list
      existingContent.click();
      browser.sleep(3000);
      // Edited the published Content created in the Scenario 1
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      expect(contentNameList.get(0).getText()).toContain(titleName);
      contentNameList.get(0).click();
      cmsInternalName.sendKeys('Edited2');
      //Save as Draft
      cmsSaveDraft.click();
      browser.sleep(4000);
      //Redirected to Draft Tab
      expect(element(by.css('bx-tabs > div > nav > ul > li.active')).getText()).toContain('Draft Content');
      //Name of Draft is updated with the changes done
      expect(contentNameList.get(0).getText()).toContain(titleName + 'Edited' + 'Edited2');
      //Check version of draft
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionDraft = element(by.css('div.bx-panel-header-version')).getText();
      //Check version of Published one
      existingContent.click();
      browser.sleep(2000);
      //Redirected to Published Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      //The title of the current published content remain as is
      expect(contentNameList.get(0).getText()).toContain(titleName);
      //Check version of current Published content
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionPublished = element(by.css('div.bx-panel-header-version')).getText();
      //Version of Published content is the same that the Draft one
      expect(versionDraft).toEqual(versionPublished);
      //Publish the content because of ALPHAPLTF-1127 , so the error is not displayed  because the published one will be the newset content
      cmsPublished.click();
      browser.sleep(5000);
    });//CLOSE Scenario 2
    it('Scenario 5: Edited an existing unpublished content, navigate away and saved changes', function(){
      //Unpublish the element which was published in the previous Scenario
      browser.sleep(3000);
      unpublishedLink.get(0).click();
      browser.sleep(3000);
      //Navigate to Unpublished Tab
      unpublishedList.click();
      browser.sleep(1000);
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Unpublished Content');
      expect(contentNameList.get(0).getText()).toContain(titleName + 'Edited' + 'Edited2');
      browser.sleep(500);
      //Edit the unpublished content
      contentNameList.get(0).click();
      cmsInternalName.clear();
      cmsInternalName.sendKeys(titleName +'E');
      //Navigate away and pop-up confirmation is displayed
      newContent.click();
      browser.sleep(500);
      expect(overlay.isDisplayed()).toBe(true);
      browser.sleep(500);
      //Click on Yes
      yes.get(1).click();
      browser.sleep(4000);
      //Changes are saved as Draft and we are redirected to Draft tab
      expect(element(by.css('bx-tabs > div > nav > ul > li.active')).getText()).toContain('Draft Content');
      //Name of Draft is updated with the changes done
      expect(contentNameList.get(0).getText()).toContain(titleName + 'E');
      //Check version of draft
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionDraft = element(by.css('div.bx-panel-header-version')).getText();
      //Navigate to Unpublished Tab to check the version of Unpublished one
      existingContent.click();
      browser.sleep(500);
      unpublishedList.click();
      //Redirected to Unpublished Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Unpublished Content');
      //The title of the current unpublished content remain as is
      expect(contentNameList.get(0).getText()).toContain(titleName + 'Edited' + 'Edited2');
      //Check version of current Unpublished content
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionUnpublished = element(by.css('div.bx-panel-header-version')).getText();
      //Version of Unpublished content is the same that the Draft one
      expect(versionDraft).toEqual(versionUnpublished);
      browser.sleep(4000);
    }); //CLOSE Scenario 5
    it('Scenario 9: Edited an existing unpublished content, navigate away and saved changes then edited the draft version and publishes it', function(){
      //Navigate to Draft Tab
      existingContent.click();
      draftTab.click();
      browser.sleep(500);
      expect(element(by.css('bx-tabs > div > nav > ul > li.active')).getText()).toContain('Draft Content');
      //Edit the draft of the unpublish content of the previous Scenario
      expect(contentNameList.get(0).getText()).toContain(titleName + 'E');
      contentNameList.get(0).click();
      browser.sleep(500);
      //Publish the Draft
      cmsPublished.click();
      browser.sleep(4000);
      //Content is displayed in Published Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      expect(contentNameList.get(0).getText()).toContain(titleName + 'E');
      //Content is not displayed in Draft Tab anymore
      draftTab.click();
      expect(contentNameList.get(0).getText()).not.toContain(titleName + 'E');
      //Content is not displayed in Unpublished Tab anymore
      unpublishedList.click();
      expect(contentNameList.get(0).getText()).not.toContain(titleName + 'Edited' + 'Edited2');
      expect(contentNameList.get(0).getText()).not.toContain(titleName + 'E');

    });//CLOSE Scenario 9
    it('Scenario 6: Edited an existing unpublished content and saved it as draft', function(){
      //Create a Content Page and Published
      utils.createContentPage();
      browser.sleep(500);
      utils.selectFromDropdown(contentType, 'Generic');
      browser.sleep(500);
      gameResources.addInternalAndTitle(titleName2);
      cmsSlugField.get(0).click();
      //SAVE (PUBLISH)
      cmsPublished.click();
      browser.sleep(2000);
      // utils.waitForVisibilityOf(contentNameList);
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      //Unpublish the element which was published in the previous Scenario
      unpublishedLink.get(0).click();
      //Navigate to Unpublished Tab
      unpublishedList.click();
      browser.sleep(1000);
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Unpublished Content');
      expect(contentNameList.get(0).getText()).toContain(titleName2);
      //Edit the unpublished content
      contentNameList.get(0).click();
      cmsInternalName.clear();
      cmsInternalName.sendKeys(titleName2 +'E');
      //Save as Draft
      cmsSaveDraft.click();
      browser.sleep(4000);
      //Redirected to Draft Tab
      expect(element(by.css('bx-tabs > div > nav > ul > li.active')).getText()).toContain('Draft Content');
      //Name of Draft is updated with the changes done
      expect(contentNameList.get(0).getText()).toContain(titleName2 + 'E');
      //Check version of draft
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionDraft = element(by.css('div.bx-panel-header-version')).getText();
        browser.sleep(1000);
      //Navigate to Unpublished Tab to check the version of Unpublished one
      existingContent.click();
      browser.sleep(500);
      unpublishedList.click();
      //Redirected to Unpublished Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Unpublished Content');
      //The title of the current unpublished content remain as is
          browser.sleep(2000);
      expect(contentNameList.get(0).getText()).toContain(titleName2);
      //Check version of current Unpublished content
      contentNameList.get(0).click();
      element(by.css('div.bx-panel-header-version')).getText().then(console.log);
      var versionUnpublished = element(by.css('div.bx-panel-header-version')).getText();
        browser.sleep(1000);
      //Version of Unpublished content is the same that the Draft one
      expect(versionDraft).toEqual(versionUnpublished);
      browser.sleep(3000);
    });//CLOSE Scenario 6

    it('Scenario 10:  Edited an existing unpublished content, saved it as draft then edited the draft version and publishes it', function(){
      //Navigate to Draft Tab
      existingContent.click();
      draftTab.click();
      browser.sleep(500);
      expect(element(by.css('bx-tabs > div > nav > ul > li.active')).getText()).toContain('Draft Content');
      //Edit the draft of the unpublish content of the previous Scenario
      expect(contentNameList.get(0).getText()).toContain(titleName2 + 'E');
      contentNameList.get(0).click();
      //Publish the Draft
      cmsPublished.click();
      browser.sleep(3000);
      //Content is displayed in Published Tab
      expect(element(by.css(' bx-tabs > div > nav > ul > li.active')).getText()).toContain('Published Content');
      expect(contentNameList.get(0).getText()).toContain(titleName2 + 'E');
      //Content is not displayed in Draft Tab anymore
      draftTab.click();
      expect(contentNameList.get(0).getText()).not.toContain(titleName2 + 'E');
      //Content is not displayed in Unpublished Tab anymore
      unpublishedList.click();
      expect(contentNameList.get(0).getText()).not.toContain(titleName2);
      expect(contentNameList.get(0).getText()).not.toContain(titleName2 + 'E');
   });
  });//CLOSE ALPHAPLTF-716

  describe('Verify Upload Image Functionality In Rich Text Editor', function() {
    var rtePages = [browser.params.createMarketingPageURL, browser.params.createSlidePageURL, browser.params.createContentBlockPageURL, browser.params.createContentPageURL, browser.params.createCasinoGamePageURL]
    it('Upload Image Modal Should Be Displayed in RTE For All Supported Pages', function() {
      rtePages.forEach(function(url) {
        browser.get(url);
        browser.waitForAngular();
        browser.executeScript('window.scrollTo(0,600);').then(function() {})
        element(by.css('.localised-tab-en i[class="mce-ico mce-i-mce-ico mce-i-image"]')).click();
        generalResources.verifyInsertImageModal();
      });
    });
    it('Image Field And Alternate Text Should Be Required Fields', function() {
      rtePages.forEach(function(url) {
        browser.get(url);
        browser.waitForAngular();
        browser.executeScript('window.scrollTo(0,600);').then(function() {})
        element(by.css('.localised-tab-en i[class="mce-ico mce-i-mce-ico mce-i-image"]')).click();
        element(by.buttonText('SAVE')).click();
        var count = element.all(by.css('div.invalid-field p'));
        count.each(function(item) {
          expect(item.getText()).toBe('This is a required field.');
        })
      });
    });
    it('Error Message Should Be Displayed On Invalid File Type Upload', function() {
      rtePages.forEach(function(url) {
        browser.get(url);
        browser.waitForAngular();
        browser.executeScript('window.scrollTo(0,600);').then(function() {})
        element(by.css('.localised-tab-en i[class="mce-ico mce-i-mce-ico mce-i-image"]')).click();
        utils.uploadImageFile('image_button_selector', '../data_files/invalid-file.txt');
        expect(element(by.css('div.invalid-field p')).getText()).toBe('Invalid File Type');
      });
    });
    it('Error Message Should Be Displayed On Invalid File Size Upload', function() {
      rtePages.forEach(function(url) {
        browser.get(url);
        browser.waitForAngular();
        browser.executeScript('window.scrollTo(0,600);').then(function() {})
        element(by.css('.localised-tab-en i[class="mce-ico mce-i-mce-ico mce-i-image"]')).click();
        utils.uploadImageFile('image_button_selector', '../data_files/invalid-size.png');
        expect(element(by.css('div.invalid-field p')).getText()).toBe('Maximum File Size Limit Reached (150Kb)');
      });
    });
    it('RTE Can Upload A Valid Image File Type', function() {
      rtePages.forEach(function(url) {
        browser.get(url);
        browser.waitForAngular();
        browser.executeScript('window.scrollTo(0,600);').then(function() {});
        generalResources.uploadImageInRTE('../data_files/testuploadfile.png', 'testAlt')
        browser.ignoreSynchronization = true
        browser.switchTo().frame(0);
        var image = element(by.css('body[id="tinymce"] img')).getAttribute('data-img-name').then(function(image){
          console.log(image);
          expect(image).toEqual('testuploadfile.png')
        })
        browser.switchTo().defaultContent();
      });
    });
    it('RTE Can Upload Multiple Images', function() {
      rtePages.forEach(function(url) {
        browser.get(url);
        browser.sleep(2000);
        browser.executeScript('window.scrollTo(0,600);').then(function() {});
        var files = ['testuploadfile.png', 'testuploadfile.png'];
        files.forEach(function(imageFile, index) {
          generalResources.uploadImageInRTE(imageFile, 'testAlt');
        });
        browser.ignoreSynchronization = true
        browser.switchTo().frame(0);
        var images = element.all(by.css('body[id="tinymce"] img'));
            images.each(function(item, index) {
              expect(item.getAttribute('data-img-name')).toEqual(files[index]);
            });
        browser.switchTo().defaultContent();
      });
    });
  });

//ALPHAPLTF-1038
  describe('[New] Beatrix CMS: Unpublish a Published Menu/Content', function(){
    it('Scenario 3: Unpublish a Published content on the list', function(){
      var contentName = element.all(by.css('td.bx-content-name > span'));
      var version = element(by.css('div.bx-panel-header-version'));
      var existingContent = element(by.css('div.sub-navigation-content > nav > a:nth-child(1)'));
      var unpublishedLink =   element.all(by.css('td.bx-content-actions > button > span'));
      var unpublishedList = element(by.css('bx-tabs > div > nav > ul > li:nth-child(3)'));
      //Create a Content and Publish
      var newContent = contentPageResources.createContentPageWithoutImages(browser.params.cmsPublishButtonText,'Generic');
      //Click on the content again and check the Version
      expect(contentName.get(0).getText()).toContain(newContent);
      contentName.get(0).click();
      browser.sleep(500);
      var versionPublish = element(by.css('div.bx-panel-header-version')).getText();
      version.getText().then(console.log);
      //Navigate to Published tab
      existingContent.click();
      browser.sleep(1000);
      //Click on Unpublished linkf of the previoues created Content
      unpublishedLink.get(0).click();
      browser.sleep(1000);
      //Navigate to Unpublished Tab
      unpublishedList.click();
      //Check that the Content is in this List
      expect(contentName.get(0).getText()).toContain(newContent);
      //Click on the previous content
      contentName.get(0).click();
      //Check the Version
      var versionUnpublish = element(by.css('div.bx-panel-header-version')).getText();
      version.getText().then(console.log);
      //Check tha the verion Publish and Unpublish is the same
      expect(versionPublish).toEqual(versionUnpublish);
    });//CLOSE Scenario 3

  });//CLOSE ALPHAPLTF-1038
    describe('Verify Deleted Components To Not Display In Container', function() {
    it('Deleted Components Which Were Previously Added To Container Should Also Be Deleted In The Container', function() {
      var menuTitle = menuContentResources.createMenu(browser.params.cmsSaveAsDraftButtonText); //create a menu component
      console.log("menuTitle: " + menuTitle);
      utils.goToCreateMenu();
      var menuContainer = menuContentResources.createMenuContainer(menuTitle, browser.params.cmsSaveAsDraftButtonText); //create a container
      console.log("menuContainer: " + menuContainer)
      menuContentResources.searchAndDeleteMenuContent(browser.params.cmsDraftMenuListURL, menuTitle);
      browser.get(browser.params.cmsDraftMenuListURL);
      utils.searchByName(menuContainer);
      element(by.css('#menuContentList td.bx-menulist-name span')).click();
      expect(element.all(by.css('#items_en th.bx-content-name span')).getText()).not.toContain('menuTitle');
    });
    });
//ALPHAPLTF-1143
    describe('Title field is not required', function() {
      var notRequiredPages = [browser.params.createSlidePageURL, browser.params.createSlideShowPageURL, browser.params.createImageContentURL, browser.params.createSectionUrl]
      it('Check if Title Name is not required', function() {
          notRequiredPages.forEach(function(url) {
          browser.get(url);
          browser.sleep(3000);
          element(by.css(browser.params.cmsTitleCss)).click();
          element(by.css(browser.params.cmsTitleCss)).sendKeys(protractor.Key.TAB);
          expect(element(by.css(browser.params.cmsTitleCss)).getText()).not.toContain('error-msg');
        });
      });
    });
});
