var utils = require('../../utils/utilities');
var slideshowResources = require('../slideshow_content/slideshow_common');
var slideResouces = require('../slide_content/slide_common');
var gameResources = require('../game_content/game_common');
var add = '+ ADD';
var remove = 'REMOVE';
var cmsCancel = element.all(by.css(browser.params.cmsDeleteColumnCss)).first();
var cmsRemoveTranslation= element.all(by.css(browser.params.cmsRemoveTranslationCss)).first();
var cmsPublished = element.all(by.css(browser.params.cmsPublishedCss)).first();

describe('Verify Slideshow Section Form', function() {
  browser.driver.manage().window().maximize();
  utils.loginToCms();
  beforeEach(function() {
    browser.refresh();
  });


  describe('ALPHAPLTF-837 [Defect] "Remove" CTA is still being displayed even the added items in the overlay were not saved', function() {

    it('Check the CTA after added items in the overlay were not saved', function() {
      utils.goTocreateSlideShowContent();
      slideshowResources.addSlideAndSave([1,2]);
      slideshowResources.addSlideAndCancel([3,4]);
      slideshowResources.checkAddRemoveButton([3,4], add);
    });
  }); //SUB DESCRIBE


  describe('ALPHAPLTF-838 [Defect] Delete, Reordering and Remove translation are frozen when added items in the overlay were not saved', function() {
    it('Components added to have an option to re-order the arrangement', function() {
      utils.goTocreateSlideShowContent();
      slideshowResources.addSlideAndSave([1,2,3,4])
      utils.getCurrentArrangement()
          .then(function(arrangement) {
              slideshowResources.addSlideAndCancel([5,6]);
              utils.moveUpDown([2],'up');
              utils.getCurrentArrangement()
                  .then(function(afterArrangement) {
                      expect(arrangement[0]).toBe(afterArrangement[1]);
                      expect(arrangement[1]).toBe(afterArrangement[0]);
                  });
          })
    });

    it('Components added to have an option to delete', function() {
      utils.goTocreateSlideShowContent();
      slideshowResources.addSlideAndSave([1])
      slideshowResources.addSlideAndCancel([2]);
      cmsCancel.click();
      expect(cmsCancel.isPresent()).toBeFalsy();
    });

    it('Option to Remove Translation', function() {
      utils.goTocreateSlideShowContent();
      slideshowResources.addSlideAndSave([1])
      slideshowResources.addSlideAndCancel([2]);
      cmsRemoveTranslation.click();
      expect(cmsCancel.isPresent()).toBeFalsy();
    });

  }); //SUB DESCRIBE


  describe('ALPHAPLTF-865: [Defect] Ordering changed when an original content/menu has been edited and saved', function() {

    it('Check the CTA after added items in the overlay were not saved', function() {

      //2 Create Slide Content First
      let slide1 = slideResouces.createSlide(browser.params.cmsPublishButtonText, 'Same Tab');
      let slide2 = slideResouces.createSlide(browser.params.cmsPublishButtonText, 'Same Tab');

      utils.goTocreateSlideShowContent();
      slideshowResources.addSlideAndSave([1,2])
      utils.getCurrentArrangement()
          .then(function(OriginalArrangement) {

              //Complete the required fields and Publish
              var slideshow = utils.autoGenerateString(10) + new Date().toISOString().slice(0, 10);
              gameResources.addInternalAndTitle(slideshow);
              element(by.buttonText(browser.params.cmsPublishButtonText)).click();

              //Edit Original content (slide1) > then Save
              element(by.xpath("//*[contains(text(),'"+ slide1 + "')]")).click();
              element(by.buttonText(browser.params.cmsPublishButtonText)).click();

              //Open Slideshow and check the arrangement
              element(by.xpath("//*[contains(text(),'"+ slideshow + "')]")).click();
              utils.getCurrentArrangement()
                  .then(function(afterArrangement) {
                      expect(OriginalArrangement[0]).toBe(afterArrangement[0]);
                      expect(OriginalArrangement[1]).toBe(afterArrangement[1]);
                  });
        }); //OriginalArrangement
      }); // IT
    }); //SUB DESCRIBE

  describe('ALPHAPLTF-853 [Defect] Unable to save or publish a language specific content when user clicks other tab and remove the translation.', function() {

    it('Create Test Data - User clicks on other tab and remove the translation then save.', function() {

      //FILL ALL THE REQUIRED ITEMS
      utils.goTocreateSlideShowContent();
      var titleName = "ALPHAPLTF-853 " + utils.autoGenerateString(13); +new Date().toISOString().slice(0, 10);
      gameResources.addInternalAndTitle(titleName);
      slideshowResources.addSlideAndSave([1]);

      //GO TO SECOND TAB
      let langTabs = element(by.className('bx-tabs__content')).element(by.tagName('ul')).all(by.css('li'));
      langTabs.get(1).click();

      //REMOVE TRANSLATION THEN SAVE
      cmsRemoveTranslation.click();
      cmsPublished.click();

      //Check File
      utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
      expect(element(by.xpath("//*[contains(text(),'"+ titleName + "')]")).isDisplayed()).toBe(true);
    }); //IT
  }); //SUB DESCRIBE


  describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
    it('Check if Tag Field is displayed for all content type', function() {
      utils.goTocreateSlideShowContent();
      utils.tagfieldPresent();
    }); //IT
  }); //SUB DESCRIBE


  describe('ALPHAPLTF-886 [New] Beatrix CMS: Deleting Content', function() {

    it('Check Delete Button in (1)Published (2)Unpublished (3)Draft', function() {
      utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
      var tabs = element.all(by.css('div.bx-tabs > nav > ul > li'));
         tabs.each(function(tab, index){
                tab.click();
                utils.deleteActionPresent();
         })
    }); //IT


    it('Check Delete Confirmation modal and Properties', function() {
      utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
      element.all(by.buttonText('Delete')).first().click();
      expect(element(by.className('modal-content')).isDisplayed()).toBe(true);
      expect(element(by.className('modal-header')).isDisplayed()).toBe(true);
      expect(element(by.className('modal-msg')).isDisplayed()).toBe(true);
      expect(element(by.className('inline-ctas')).element(by.buttonText('Cancel')).isDisplayed()).toBe(true);
      expect(element(by.className('inline-ctas')).element(by.buttonText('Delete')).isDisplayed()).toBe(true);
      expect(element(by.className('close-btn')).isDisplayed()).toBe(true);
    });

    it('Check if a Content Deleted Successfully', function() {
      var titlename = slideshowResources.createSlideShow(browser.params.cmsPublishButtonText);
      utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
      element(by.xpath("//*[contains(td[2],'"+ titlename + "')]")).getAttribute("id").then(function (value) {
        utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
        element(by.id(value)).element(by.buttonText('Delete')).click();
        element(by.className('inline-ctas')).element(by.buttonText('Delete')).click();
        browser.refresh();
        utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
        expect(element(by.id(value)).isPresent()).toBeFalsy();
      }); //THEN
    }); //IT

    it('Check if a Content is still displayed in Content Management List when User click Cancel from the Modal', function() {
      var titlename = slideshowResources.createSlideShow(browser.params.cmsPublishButtonText);
      utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
      element(by.xpath("//*[contains(td[2],'"+ titlename + "')]")).getAttribute("id").then(function (value) {
        utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
        element(by.id(value)).element(by.buttonText('Delete')).click();
        element(by.className('inline-ctas')).element(by.buttonText('Cancel')).click();
        browser.refresh();
        utils.waitForVisibilityOf(element(by.css('#contentManagementList')));
        expect(element(by.id(value)).isDisplayed()).toBe(true);
      }); //THEN
    }); //IT

  }); //SUB DESCRIBE

}); // PARENT
