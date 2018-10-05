var utils = require('../../utils/utilities');
var gameResources = require('../game_content/game_common');

describe('Create Game Content Page', function() {
  var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var dropDown = element(by.className('custom-droplist'));
  var cmsGameField = element(by.id('game_id_en_0'));
  var droplist = element.all(by.className("custom-droplist")).first();
  var notSave = element(by.className('modal-content modal-small screen-center')).element(by.buttonText('No'));
  var cmsShortDescription = element.all(by.id(browser.params.cmsShortDescriptionId)).first();
  var random = utils.autoGenerateString(5);
  var date = new Date().toISOString().slice(0, 10);

  utils.loginToCms();
  beforeEach(function() {
    //browser.manage().deleteAllCookies();
    browser.refresh();
  });

  describe('ALPHAPLTF-450: Beatrix CMS: Create Game Page - Input of Game Name/ID', function() {

    it('Auto Suggest Will Not Be Displayed On 1st Character For Existing Game Id', function() {
      utils.createGameContent();
      gameResources.autoSuggest('game_id_en_0', 'b');
      expect(droplist.isDisplayed()).toBe(false);
    });
    it('Auto Suggest Will Not Be Displayed On 2nd Character For Existing Game Id', function() {
      gameResources.autoSuggest('game_id_en_0', 'bl');
      expect(droplist.isDisplayed()).toBe(false);
    });
    it('Auto Suggest Will Not Be Displayed For Non Existing Game Field/ID', function() {
      gameResources.autoSuggest('game_id_en_0', '+++');
      expect(droplist.isDisplayed()).toBe(false);
    });
    it('Auto Suggest Will Display On 3rd Character For Existing Game Id', function() {
      gameResources.autoSuggest('game_id_en_0', 'bla');
      expect(droplist.isDisplayed());
    });
    it('Auto Suggest Will Display On 3rd Character Of Game ID', function() {
      gameResources.autoSuggest('game_id_en_0', '129');
      expect(droplist.isDisplayed());
    });
    it('Auto Suggest Should Display Maximum 10 Results', function() {
      gameResources.autoSuggest('game_id_en_0', 'bla');
      let list = element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li'));
      expect(list.count()).toBe(10);
    });
  });

  describe('ALPHAPLTF-451: Beatrix CMS: Create Game Page - Selecting Game Name/ID', function() {
    it('Game Name and Id should be displayed after selecting a game from suggestions', function() {
        utils.createGameContent();
      //CHECK GAME NAME/ID FIELD and PLATFORM CHECKBOX
      gameResources.typeGameName('jac');
      expect(element(by.css('div.selected-inner')).isPresent()).toBe(true);
      expect(element(by.className('btn-clear-selected')).isPresent()).toBe(true);
      expect(element(by.className('gameId')).isPresent()).toBe(true);
    });

    it('Available Game Platform should be checked and unavailable game platforms should be disabled', function() {
      gameResources.typeGameName('jac');
      expect(element(by.id('game_id_en_device_platform_mobile_tablet_1')).getAttribute('class')).toContain('ng-valid');
      expect(element(by.id('game_id_en_device_platform_desktop_1')).getAttribute('disabled').isPresent()).toBe(true);
      expect(element(by.id('game_id_en_device_platform_poker_client_1')).getAttribute('disabled').isPresent()).toBe(true);
    });

    it('Game field is deleted when you click on the (x) button', function() {
      gameResources.typeGameName('jac');
      element(by.className('btn-clear-selected')).click();
      browser.sleep(5000);
      expect(element(by.css('div.selected-inner')).isPresent()).toBe(false);
    });
  });
  describe('Beatrix CMS: Create Game Page - Adding Game Name/ID', function() {

    var cmsGameField2 = element(by.id('game_id_en_1'));
    var desktopCheckbox = element(by.id('game_id_en_device_platform_desktop_1'));
    var desktopCheckbox1 = element(by.id('game_id_en_device_platform_desktop_2'));
    var mobileCheckbox1 = element(by.id('game_id_en_device_platform_mobile_tablet_2'));
    var pokerCheckbox1 = element(by.id('game_id_en_device_platform_poker_client_2'));
    var addGameButton = element.all(by.buttonText('ADD ANOTHER ID')).first();

    it('New Game Fields Should Be Displayed On Click of Add New Game Button', function() {
      utils.createGameContent();
      cmsGameField.clear();
      cmsGameField.click();
      element(cmsGameField.sendKeys('rei'));
      cmsGameField.sendKeys(protractor.Key.ENTER);
      browser.sleep(3000);
      element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li')).first().click();
      //element(desktopCheckbox.click());
      addGameButton.click().then(function() {
        expect(desktopCheckbox1.isPresent()).toBe(true);
        expect(mobileCheckbox1.isPresent()).toBe(true);
        expect(pokerCheckbox1.isPresent()).toBe(true);
      });
    });
    it('Maximum Of 3 Games Can Be Added In Game Page Content', function() {
      for (var i = 0; i < 2; i++) {
        addGameButton.click().then(function() {
          var block = element.all(by.className('autocomplete-form-group')).get(i);
          expect(block.isPresent()).toBe(true);
          // var removeGameLink = element(by.className('row autocomplete-platform-footer')).all(by.className('custom-link')).get(i);
          // expect(removeGameLink.isDisplayed()).toBe(true);
        });
      }
    });
  });
  describe('Beatrix CMS: Create Game Page - Internal Name', function() {
    var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
    it('Internal Name Should Be A Required Field, Has Label, And Accepts Alpha-numeric Characters', function() {
    utils.internalNameValidation();
  });
  });
  describe('Beatrix CMS: Create Game Page - Language tabs available per Brand', function() {

    it('If the brand is Bodog88, it would return 3 language tabs (en,sc,pt)', function() {
      utils.createGameContent();
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      element.all(by.className('custom-droplist')).first().element(by.cssContainingText('li', 'Bodog88')).click();
      utils.checkLanguageTab('Bodog88');
    });

    it('If the brand is Slots LV, it would return 2 language tabs (en,sc)', function() {
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      element.all(by.className('custom-droplist')).first().element(by.cssContainingText('li', 'Slots LV')).click();
      utils.checkLanguageTab('Slots LV');
    });

    it('If the brand is Crazy 88, it would return three language tabs (en,sc,pt)', function() {
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      element.all(by.className('custom-droplist')).first().element(by.cssContainingText('li', 'Crazy 88')).click();
      utils.checkLanguageTab('Crazy 88');
    });
    it('If the brand is Slots, it would return three language tabs (en,sc,pt)', function() {
      //CHOOSE BRAND
      element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
      element.all(by.className('custom-droplist')).first().all(by.tagName('li')).get(2).click();
      utils.checkLanguageTab('Slots');
    });
  });

  describe('Beatrix CMS: Create Game Page - Title', function() {
    var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();

    it('Title Name Should Be A Required Field, Has Label, And Accepts Any Characters', function() {
      utils.titleValidation();
    });

  });
  describe('Beatrix CMS: Create Game Page - Long Description', function() {
    var cmsSaveAsDraftButton = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));

    it('Long Description Field should be a required text field', function() {
      utils.createGameContent();
      cmsSaveAsDraftButton.click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect(cmsRequiredFieldMessage.isPresent()).toBe(true);
      browser.sleep(3000);
    });

    it('Long Description Field should allow any character, and apply RT Formats', function() {
      utils.bodySectionvalidation();
    })
  });
  describe('Beatrix CMS: Create Game Page - Short Description', function() {


    it('Short Description Field should be a required text field', function() {
      utils.createGameContent();
      //Check if the Short Description Field is a required field
      cmsShortDescription.click();
      utils.scrollUp();
      cmsGameField.click();
      var cmsRequiredFieldMessage = element(by.className('error-msg'));
      expect(cmsRequiredFieldMessage.isPresent()).toBe(true);
      //browser.sleep(3000);
    });

    it('Short Description Field should allow 520 characters', function() {
      browser.sleep(1000)
      cmsShortDescription.sendKeys("a");
      expect(cmsShortDescription.getAttribute('class')).toContain('ng-valid');
      cmsShortDescription.sendKeys(protractor.Key.BACK_SPACE);
      expect(cmsShortDescription.getAttribute('class')).toContain('ng-valid');
      cmsShortDescription.sendKeys(utils.autoGenerateString(520));
      expect(cmsShortDescription.getAttribute('class')).toContain('ng-valid');
      expect(cmsShortDescription.getAttribute('maxlength')).toEqual('520');
    })

    it('Short Description Field should allow any character', function() {
      browser.sleep(1000)
      cmsShortDescription.sendKeys('QA Test -123 #$%^@&');
      expect(cmsShortDescription.getAttribute('class')).toContain('ng-valid');
      //browser.sleep(3000);
    });
  });

  describe('Beatrix CMS: Validation of Game Page field/section', function() {

    var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    var cmsInternalName = element(by.css('label.internal_name'));
    var cmsAddCardImageButton = element(by.css('i.icon.icon-plus'));
    // WE for GameId text field and Game Platform checkboxes
    var cmsGameIDField = element(by.id('game_id_en_0'));
    var cmsGameDesktopCheckbox = element(by.id('game_id_en_device_platform_desktop_1'));
    var cmsGameMobileTabletCheckbox = element(by.id('game_id_en_device_platform_mobile_tablet_1'));
    var cmsGamePokerClientCheckbox = element(by.id('game_id_en_device_platform_poker_client_1'));

    // WE for short and long description text fields
    var cmsLongDescTextField = element(by.id('long_description_en'));

    // WE for add card and page image buttons and text fields
    var cmsAddCardImageButton = element(by.css('i.icon.icon-plus'));
    var cmsAddPageImageButton = element(by.css('i.icon.icon-plus'));
    var cmsAddCardAltText = element(by.id('card_image_en.alt'));
    var cmsAddPageAltText = element(by.css('div.custom-field.col-xs-5'));
    var cmsAddPageAltTextField = element(by.id('page_image_en.alt'));

    // WE for save and publish button
    var cmsSaveAsDraftButton = element(by.css('.custom-cta.tertiary.cta-large'));
    var cmsPublishCTAButton = element(by.css('.custom-cta.primary.cta-large.custom-cta_last'));

    // WE for invalid required fields and sections
    var cmsThisIsARequiredFieldMsg = element(by.css('p.error-msg'));
    var cmsNullInternalName = element(by.css('div.custom-field.col-xs-12.invalid-field'));
    var cmsNullGameID = element(by.css('figure.custom-dropdown.custom-field.invalid-field'));
    var cmsNullShortDesc = element(by.css('div.custom-field.custom-textarea.invalid-field'));
    var cmsNullAddCardAltText = element(by.css('div.custom-field.col-xs-5.invalid-field.active'));
    var cmsNullAddPageAltText = element(by.css('div.custom-field.col-xs-5.invalid-field.active'));

    // WE for required fields and sections - labels

    it('Game Fields should be present and an asterisk indicator should be displayed after Name of the required Game Fields and Sections', function() {
      utils.createGameContent();

      expect(cmsGameIDField.isPresent()).toBe(true);
      expect(cmsGameDesktopCheckbox.isPresent()).toBe(true);
      expect(cmsGameMobileTabletCheckbox.isPresent()).toBe(true);
      expect(cmsGamePokerClientCheckbox.isPresent()).toBe(true);
      expect(cmsShortDescription.isPresent()).toBe(true);
    });

    it('Upload Card and Page Image Buttons should be present', function() {
      browser.sleep(1000);
      expect(cmsAddCardImageButton.isPresent()).toBe(true);
      expect(cmsAddPageImageButton.isPresent()).toBe(true);
    });

    it('Save as Draft and Publish CTA Buttons should be present', function() {
      browser.sleep(1000);
      expect(cmsSaveAsDraftButton.isPresent()).toBe(true);
      expect(cmsPublishCTAButton.isPresent()).toBe(true);
      browser.sleep(3000);
    });

    it('An Empty Required Text Fields should display an error message', function() {

      element(cmsSaveAsDraftButton.click());

      // Assert error message
      expect(cmsThisIsARequiredFieldMsg.isPresent()).toBe(true);
      // Assert empty Internal Name text field
      expect(cmsNullInternalName.isPresent()).toBe(true);
      // Assert empty GameId text field
      expect(cmsNullGameID.isPresent()).toBe(true);
      // Assert empty Short Description text field
      expect(cmsNullShortDesc.isPresent()).toBe(true);

      // Assert invalid value of Alt Text for Page Image
      utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
      // click upload add card image button
      expect(cmsAddCardAltText.isPresent()).toBe(true);
      element(cmsAddCardAltText.click());
      element(cmsAddCardAltText.sendKeys('a'));
      element(cmsAddCardAltText.sendKeys(protractor.Key.BACK_SPACE));
      expect(cmsNullAddCardAltText.isPresent()).toBe(true);

      //Assert invalid value of Alt Text for Page Image

      utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
      expect(cmsAddPageAltText.isPresent()).toBe(true);
      // element(cmsAddPageAltTextField.click());
      // element(cmsAddPageAltTextField.sendKeys('a'));
      // element(cmsAddPageAltText.sendKeys(protractor.Key.BACK_SPACE));
      // expect (cmsNullAddPageAltText.isPresent()).toBe(true);
    });
  });
  describe('Game Page Should Be Saved As Draft And Published', function() {
    //ALPHAPLTF-346
    it('Page Should Be Redirected To Draft Content Page After Saving A Content As Draft', function() {
      var title = gameResources.createGame('129', browser.params.cmsSaveAsDraftButtonText);
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/draft')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
    });
    it('Page Should Be Redirected To Published Content Page After Saving A Content As Published', function() {
      var title = gameResources.createGame('129', browser.params.cmsPublishButtonText);
      expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/published')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
    })
  });
  describe('Rendering of Game Page Form', function() {
    it('Go to create Game Page', function() {

      //Game Page Form should be isDisplayed and the nex elements of the Form
      //Header

      utils.createGameContent();
      var header = element(by.css('div > div.bx-panel-header'));
      expect(header.isDisplayed()).toBe(true);
      browser.sleep(500); //browser waits 2 second

      // //Version (on Header) Only It should be displayed when edit a casino game but it doen't for a new one
      // var version = element(by.id(''));
      // expect(version.isDisplayed()).toBe(true);
      // browser.sleep(2000); //browser waits 2 second

      //Internal name field
      var internalName = element(by.id('internal_name'));
      expect(internalName.isDisplayed()).toBe(true);

      //Internal name field label
      var version = element(by.xpath('//bx-input-field-container/div/label'));
      expect(version.isDisplayed()).toBe(true);

      //language Tabs available
      //English
      utils.displayLanguageTab();

      //Remove translation CTA (tertiaty)
      var removeTranslation = element.all(by.id('remove-translation-link-wrapper')).first();
      expect(removeTranslation.isDisplayed()).toBe(true);


      //Meta Data field section
      var metaData = element(by.css('div.metatags-container'));
      expect(metaData.isDisplayed()).toBe(true);
      //Click on Meta Data section to expand and to Check the meta data fields
      element.all(by.css('body > bx-app > bx-app > div.content > div > bx-content-type-selector-outlet > bx-content-type-form > bx-panel > div > div:nth-child(2) > div > bx-content-type-form-body > bx-form > form > bx-tabs > div > bx-form-group.localised-tab.localised-tab-en.form-tabs-content.clearfix > div > bx-dynamic-loader-component:nth-child(6) > bx-metafield > div > div > header')).click();
      browser.sleep(1000);



      //Discar CTA
      var discardCta = element(by.buttonText(browser.params.cmsDiscardButtonText));
      expect(discardCta.isDisplayed()).toBe(true);

      //Save As Draft CTA
      var saveDraftCta = element(by.buttonText(browser.params.cmsSaveAsDraftButtonText));
      expect(saveDraftCta.isDisplayed()).toBe(true);

      //Publish CTA
      var publishCta = element(by.buttonText(browser.params.cmsPublishButtonText));
      expect(publishCta.isDisplayed()).toBe(true);
    });
  });
  describe('ALPHAPLTF-467: [New] Beatrix CMS: Validation of Existing Internal Name', function(){
    var internalName = 'Internal Name Menu' + random + date;
    var title = 'Title Game Page CH' + random + date;
    it('Create a Game  Page', function(){
      utils.createGameContent();

      var uploadImage = element(by.css('i.icon icon-plus'));
      var cmsCardImageAlt = element(by.id('card_image_en.alt'));
      var cmsPageImageAlt = element(by.id('page_image_en.alt'));
      var cmsGameField = element.all(by.id('game_id_en_0'));
      //Fill the required fields
      element.all(by.id('internal_name')).first().sendKeys(internalName);
      element.all(by.id('title')).first().sendKeys(title);
      element.all(by.id('game_id_en_0')).first().sendKeys('129');
      browser.sleep(500);
      element.all(by.css('ul.custom-droplist')).get(1).all(by.tagName('li'));
        browser.sleep(500);
      var clickGame = cmsGameField.get(0).element(by.xpath('following-sibling::ul[@class="custom-droplist"]'));
      clickGame.click();
      browser.sleep(500);
      element.all(by.id('short_description')).first().sendKeys('Short Description Game Page CH');
      var cmsLongDescription = element(by.id(browser.params.cmsLongDescriptionId));
      var longDescription = 'Long Description Game Page CH';

      browser.ignoreSynchronization = true
      browser.switchTo().frame(0);
      browser.driver.sleep(1000);
      cmsLongDescription.sendKeys(longDescription);
      expect(cmsLongDescription.isPresent()).toBe(true);  
      browser.switchTo().defaultContent();

      utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
      browser.sleep(500);
      expect (cmsCardImageAlt.isPresent()).toBe(true);
      cmsCardImageAlt.sendKeys('test');
      utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
      browser.sleep(500);
      expect (cmsPageImageAlt.isPresent()).toBe(true);
      cmsPageImageAlt.sendKeys('test');

      //Click on Save as Published
      element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
      browser.sleep(6000);
      var publishTab = element.all(by.css('li.active')).getText();
      publishTab.then(console.log);
      expect(publishTab.isPresent()).toBe(true);
      browser.sleep(500);
    });

        it('Existing Internal Name with the same brand, content type and Language -- Game Page', function(){
          browser.sleep(3000);
          utils.createGameContent();
          browser.sleep(1000);
          //CHOOSE BRAND
          element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
          element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
          element.all(by.id('internal_name')).first().sendKeys(internalName);
          element(by.id('slug')).click();
          let errorMessage = element.all(by.css('p.error-msg'));
          errorMessage.getText().then(console.log);
          expect (errorMessage.isPresent()).toBe(true);
          browser.sleep(1000);

        });

   });//CLOSE ALPHAPLTF-467

});
//Adding this temporary comment for CRON trigger. This will be deleted later. Thanks :)
