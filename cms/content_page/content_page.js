var utils = require('../../utils/utilities');
var contentPageResources = require('../content_page/content_page_common');
var gameResources = require('../game_content/game_common');

describe('Verify Create Content Page', function() {
  var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();
  var cmsTitleName = element.all(by.id(browser.params.cmsTitleFieldId)).first();
  var cmsSlugField = element.all(by.id(browser.params.cmsSlugField)).first();
  var cmsCardImageSection = element.all(by.id(browser.params.cmsCardImageId)).first();
  var cmsSaveDraft = element.all(by.css(browser.params.cmsSaveDraftCss)).first();
  var cmsPublished = element.all(by.css(browser.params.cmsPublishedCss)).first();
  var cmsAddCardAltText = element(by.id('card_image_en.alt'));
  var cmsAddPageAltText = element(by.id('page_image_en.alt'));
  var random = utils.autoGenerateString(5);
  var date = new Date().toISOString().slice(0, 10);

  //todo first
  browser.manage().deleteAllCookies();
  utils.loginToCms();

  //do this before each describe execute
  beforeEach(function() {
    browser.refresh();
  });

  //Paste all Child Describe below.
  describe('ALPHAPLTF-769 [New] Beatrix CMS: Validation of Slug field', function() {


    it('Slug Validation', function(){
      utils.createContentPage()
      utils.slug(cmsSlugField)
    }); // close slug validation
  }); // close ALPHAPLTF-769

  //Paste all Child Describe below.
  describe('ALPHAPLTF-340 [[New] Beatrix CMS: Create Content Page', function() {

    var generateText = utils.autoGenerateString(9)

      it('Create a Content Page and Save it as Draft', function(){
        utils.createContentPage()
        cmsInternalName.sendKeys(generateText);
        cmsTitleName.sendKeys(generateText);
        cmsSlugField.sendKeys(generateText);
        utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
        utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
        cmsAddCardAltText.sendKeys(generateText);
        cmsAddPageAltText.sendKeys(generateText);
        browser.sleep(5000);

        //Save Draft
        cmsSaveDraft.click()
        browser.waitForAngular();

        //Check if the content was successfully saved.
        var content = element(by.xpath("//*[contains(text(),'"+ generateText + "')]"))
        expect(content.isDisplayed()).toBe(true);
      }); // close -- Fillout all required items with valid items

      it('Create a Content Page and Publish', function(){
        utils.createContentPage()
        cmsInternalName.sendKeys(generateText);
        cmsTitleName.sendKeys(generateText);
        cmsSlugField.sendKeys(generateText);
        utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
        utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
        cmsAddCardAltText.sendKeys(generateText);
        cmsAddPageAltText.sendKeys(generateText);
        browser.sleep(5000);

        //Save Draft
        cmsPublished.click()
        browser.waitForAngular();

        //check if the content was successfully saved.
        var content = element(by.xpath("//*[contains(text(),'"+ generateText + "')]"))
        expect(content.isDisplayed()).toBe(true);
      }); // close -- Fillout all required items with valid items
    }); // close ALPHAPLTF-340

  describe('Verify Add Card Image And Add Page Image Section', function() {

    it('Add Card Image And Add Page Image Should Not Be A Required Field In Help Page', function() {
      var contentTitle = contentPageResources.createContentPageWithoutImages(browser.params.cmsPublishButtonText, 'Help')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(contentTitle);
    });
    it('Add Card Image And Add Page Image Should Not Be A Required Field In Generic Page', function() {
      var contentTitle = contentPageResources.createContentPageWithoutImages(browser.params.cmsPublishButtonText, 'Generic')
      expect(element.all(by.css('td.bx-content-name')).getText()).toContain(contentTitle);
    });
  });

  describe('ALPHAPLTF-467: [New] Beatrix CMS: Validation of Existing Internal Name', function(){
      var uploadImage = element(by.css('i.icon icon-plus'));
      var cmsCardImageAlt = element(by.id('card_image_en.alt'));
      var cmsPageImageAlt = element(by.id('page_image_en.alt'));
      var cmsLongDescription = element(by.id(browser.params.cmsLongDescriptionId));
      var longDescription = 'Long Description Game Page CH';
      var internalName = 'Internal Name Content' + random + date;
      var titleArt = 'Title Article CH' + random + date;
      var titleProm = 'Title Promotion CH' + random + date;

        it('Create a Article with the same Internal Name that the next Promotion', function(){
          browser.sleep(4000);
          utils.createContentPage();
          browser.sleep(2000);
          var uploadImage = element(by.css('i.icon icon-plus'));
          var cmsCardImageAlt = element(by.id('card_image_en.alt'));
          var cmsPageImageAlt = element(by.id('page_image_en.alt'));

          //CHOOSE BRAND
          element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
          element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Bodog88')).click();
          //CHOOSE PAGE TYPE
          element.all(by.css('bx-dropdown')).get(1).click();
          element.all(by.css('ul.custom-droplist')).get(1).element(by.cssContainingText('li','Article')).click();

          let BodogBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
          expect (BodogBrandLanguage.count()).toBe(3);
          expect (BodogBrandLanguage.get(0).getAttribute('class')).toEqual('active')
          expect (BodogBrandLanguage.get(0).getText()).toEqual('EN');
          element.all(by.id('internal_name')).first().sendKeys(internalName);
          element.all(by.id('title')).first().sendKeys(titleArt);
          utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
          expect (cmsCardImageAlt.isPresent()).toBe(true);
          cmsCardImageAlt.sendKeys('test');
          utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
          expect (cmsPageImageAlt.isPresent()).toBe(true);
          cmsPageImageAlt.sendKeys('test');

          //Click on Save as Published
          element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
          browser.sleep(6000);
          var publishTab = element.all(by.css('li.active'));
          expect(publishTab.getText()).toContain('Published Content');
          browser.sleep(900);
        });

        it('Existing Internal Name with the diferent brand or content type or Language (Create Promotion with same Internal Name that  previous Article but diferent brand)', function(){
          browser.sleep(3000);
          utils.createContentPage();
          browser.sleep(1000);

          var uploadImage = element(by.css('i.icon icon-plus'));
          var cmsCardImageAlt = element(by.id('card_image_en.alt'));
          var cmsPageImageAlt = element(by.id('page_image_en.alt'));

          //CHOOSE BRAND
          element(by.css('bx-brand-select')).element(by.css('bx-dropdown')).click();
          element(by.css('ul.custom-droplist')).element(by.cssContainingText('li','Slots LV')).click();
          //CHOOSE PAGE TYPE
          element.all(by.css('bx-dropdown')).get(1).click();
          element.all(by.css('ul.custom-droplist')).get(1).element(by.cssContainingText('li','Promotion')).click();

          let SlotsBrandLanguage = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
          expect (SlotsBrandLanguage.count()).toBe(2);
          expect (SlotsBrandLanguage.get(0).getAttribute('class')).toEqual('active')
          expect (SlotsBrandLanguage.get(0).getText()).toEqual('EN');
          element.all(by.id('internal_name')).first().sendKeys(internalName);
          element.all(by.id('title')).first().sendKeys(titleProm);
          utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
          expect (cmsCardImageAlt.isPresent()).toBe(true);
          cmsCardImageAlt.sendKeys('test');
          utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
          expect (cmsPageImageAlt.isPresent()).toBe(true);
          cmsPageImageAlt.sendKeys('test');

          //Click on Save as Published
          element(by.css('button.custom-cta.primary.cta-large.custom-cta_last')).click();
          browser.sleep(6000);
          var publishTab = element.all(by.css('li.active'));
          expect(publishTab.getText()).toContain('Published Content');
          browser.sleep(500);
        });
   });//CLOSE ALPHAPLTF-467

 //Paste all Child Describe below.
 describe('ALPHAPLTF-769 [New] Beatrix CMS: Validation of Slug field', function() {
   it('Slug Validation', function(){
     utils.createContentPage()
     utils.slug(cmsSlugField)
   }); // close slug validation
 }); // close ALPHAPLTF-769


 //Paste all Child Describe below.
 describe('ALPHAPLTF-340 [[New] Beatrix CMS: Create Content Page', function() {



     it('Create a Content Page and Save it as Draft', function(){
       var generateText = utils.autoGenerateString(9)
       utils.createContentPage()
       cmsInternalName.sendKeys(generateText);
       cmsTitleName.sendKeys(generateText);
       cmsSlugField.sendKeys(generateText);
       utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
       utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
       cmsAddCardAltText.sendKeys(generateText);
       cmsAddPageAltText.sendKeys(generateText);
       browser.sleep(5000);

       //Save Draft
       cmsSaveDraft.click()
       browser.waitForAngular();

       //Check if the content was successfully saved.
       var content = element(by.xpath("//*[contains(text(),'"+ generateText + "')]"))
       expect(content.isDisplayed()).toBe(true);
     }); // close -- Fillout all required items with valid items


     it('Create a Content Page and Publish', function(){
       var generateText = utils.autoGenerateString(9)
       utils.createContentPage()
       cmsInternalName.sendKeys(generateText);
       cmsTitleName.sendKeys(generateText);
       cmsSlugField.sendKeys(generateText);
       utils.uploadImageFile('card_image_en', '../data_files/testuploadfile.png');
       utils.uploadImageFile('page_image_en', '../data_files/testuploadfile.png');
       cmsAddCardAltText.sendKeys(generateText);
       cmsAddPageAltText.sendKeys(generateText);
       browser.sleep(5000);

       //Save Draft
       cmsPublished.click()
       browser.waitForAngular();

       //check if the content was successfully saved.
       var content = element(by.xpath("//*[contains(text(),'"+ generateText + "')]"))
       expect(content.isDisplayed()).toBe(true);
     }); // close -- Fillout all required items with valid items

   }); // close ALPHAPLTF-340


 describe('Verify Add Card Image And Add Page Image Section', function() {

   it('Add Card Image And Add Page Image Should Not Be A Required Field In Help Page', function() {
     var contentTitle = contentPageResources.createContentPageWithoutImages(browser.params.cmsPublishButtonText, 'Help')
     expect(element.all(by.css('td.bx-content-name')).getText()).toContain(contentTitle);
   });
   it('Add Card Image And Add Page Image Should Not Be A Required Field In Generic Page', function() {
     var contentTitle = contentPageResources.createContentPageWithoutImages(browser.params.cmsPublishButtonText, 'Generic')
     expect(element.all(by.css('td.bx-content-name')).getText()).toContain(contentTitle);
   });
 });

 describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
   it('Check if Tag Field is displayed for all content type', function() {
     utils.createContentPage();
     utils.tagfieldPresent();
   }); //IT
 }); //SUB DESCRIBE

}); // PARENT

//contentpage
