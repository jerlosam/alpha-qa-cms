var utils = require('../../utils/utilities');
var sectionResources = require('../section_content/section_common');
var gameResources = require('../game_content/game_common');
var slideContentResources = require('../slide_content/slide_common');
var slideshowResources = require('../slideshow_content/slideshow_common');
var contentBlockResources = require('../content_block/content_block_common');
var imageContentResources = require('../image_content/image_content_common');
var menuContent = require('../menu/menu_common');

describe('Verify Create Section Form', function() {
      browser.driver.manage().window().maximize();
      utils.loginToCms();
      beforeEach(function() {
        browser.refresh();
      });
      describe('Verify Create Section Form Fields', function() {

        it('Internal Name Should Be A Required Field, Has Label, And Accepts Alpha-numeric Characters', function() {
          utils.goToCreateSectionForm();
          utils.internalNameValidation();
        });

        it('Title Name Should Be A Required Field, Has Label, And Accepts Any Characters', function() {
          utils.titleValidation();
        });

        it('Language Tabs Should Be Displayed And Available Per Brand', function() {
          utils.displayLanguageTab();
          utils.checkLanguageTab();
        });

      });

      describe('Verify Search And Filter In Add Component Form In Section Form', function() {
        it('Search By Multi Select Dropdown - All Supported Content Types Should Be Displayed For "All Types Selected"', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('All Types Selected');
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          expect(element(by.id(browser.params.cmsSlideCheckBoxId)).getAttribute('checked')).toEqual('true');
          expect(element(by.id(browser.params.cmsMenuCheckBoxId)).getAttribute('checked')).toEqual('true');
          expect(element(by.id(browser.params.cmsSlideShowCheckBoxId)).getAttribute('checked')).toEqual('true');
          expect(element(by.id(browser.params.cmsImageCheckBoxId)).getAttribute('checked')).toEqual('true');
          expect(element(by.id(browser.params.cmsContentBlockCheckBoxId)).getAttribute('checked')).toEqual('true');
        });
        it('Search By Multi Select Dropdown - All Supported Content Types Should Not Be Displayed When "Deselect All" Link Is Clicked', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          expect(element(by.css('a.deselect-all')).isDisplayed()).toBe(true);
          element(by.css('a.deselect-all')).click();
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('No Type selected');

        });
        it('Search By Multi Select Dropdown - Slide Contents Should Be Displayed When Slide Is Checked', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          browser.sleep(2000);
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsSlideCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Slide');
          slideContentResources.checkFilteredList('Slide');
        });
        it('Search By Multi Select Dropdown - Menu Contents Should Be Displayed When Menu Is Checked', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          browser.sleep(2000);
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Menu');
          slideContentResources.checkFilteredList('Menu');
        });
        it('Search By Multi Select Dropdown - Slideshow Contents Should Be Displayed When Slideshow Is Checked', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          browser.sleep(2000);
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsSlideShowCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Slideshow');
          slideContentResources.checkFilteredList('Slideshow');
        });
        it('Search By Multi Select Dropdown - Content Blocks Pages Should Be Displayed When Content Block Is Checked', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          browser.sleep(2000);
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentBlockCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Content Block');
          slideContentResources.checkFilteredList('Content Block');
        });
        it('Search By Multi Select Dropdown - Image Pages Should Be Displayed When Image Is Checked', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          browser.sleep(2000);
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsImageCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Image');
          slideContentResources.checkFilteredList('Image');
        });
        it('Search By Multi Select Dropdown - Filtered 2 Content Types Should Be Displayed In Content List', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId, browser.params.cmsImageCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('2 Types Selected');
        });
        it('Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId, browser.params.cmsImageCheckBoxId, browser.params.cmsSlideCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('3 Types Selected');
        });
        it('Search By Multi Select Dropdown - Filtered 4 Content Types Should Be Displayed In Content List', function() {
          utils.goToCreateSectionForm();
          element(by.css(browser.params.cmsSearchComponentCss)).click();
          element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
          element(by.css('a.deselect-all')).click();
          slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId, browser.params.cmsImageCheckBoxId, browser.params.cmsSlideCheckBoxId, browser.params.cmsContentBlockCheckBoxId]);
          expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('4 Types Selected');
        });
      });

      describe('Internal Items - Verify Search By Name Field', function() {
        it('Search By Name - Searched Slide Content Should Be Displayed', function() {
          var title = slideContentResources.createSlide(browser.params.cmsSaveAsDraftButtonText, 'Same Tab' );
          sectionResources.searchSectionComponent(title);
          expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
        });
        it('Search By Name - Searched Menu Content Should Be Displayed', function() {
          var title = menuContent.createMenu(browser.params.cmsPublishButtonText);
          sectionResources.searchSectionComponent(title);
          expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
        });
        it('Search By Name - Searched Slideshow Should Be Displayed', function() {
          var title = slideshowResources.createSlideShow(browser.params.cmsSaveAsDraftButtonText);
          sectionResources.searchSectionComponent(title);
          expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
        });
        it('Search By Name - Searched Content Block Should Be Displayed', function() {
          var title = contentBlockResources.createContentBlock(browser.params.cmsPublishButtonText);
          sectionResources.searchSectionComponent(title);
          expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
        });
        it('Search By Name - Searched Image Should Be Displayed', function() {
          var title = imageContentResources.createImageContent(browser.params.cmsPublishButtonText);
          sectionResources.searchSectionComponent(title);
          expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
        });
        it('Search By Name - "No Internal Pages Found" Should Be Displayed For No Matching Results', function() {
          sectionResources.searchSectionComponent('`');
          expect(element(by.css(browser.params.cmsNoSearchResult)).isDisplayed()).toBe(true);
          expect(element(by.css(browser.params.cmsNoSearchResult)).getText()).toEqual(browser.params.cmsNoComponentFoundMessage);
        });
      });

      describe('Section Content Should Be Saved As Draft And Published', function() {
        it('Page Should Be Redirected To Draft Content Page After Saving A Content As Draft', function() {
          var title = sectionResources.createSectionContent(browser.params.cmsSaveAsDraftButtonText);
          expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/draft')
          expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
        });
        it('Page Should Be Redirected To Published Content Page After Saving A Content As Published', function() {
          var title = sectionResources.createSectionContent(browser.params.cmsPublishButtonText);
          expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/published')
          expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
        })
      });

      describe('Verify Menu Form Rendering', function() {
      it('Complete fields should be displayed', function() {
        utils.goToCreateSectionForm();
        utils.displayHeader('Create New Section');
        utils.displayLanguageTab();
        utils.displayInternalNameAndTitleName();
        utils.displaySlugField();
        utils.contentButtonsVerification();
        utils.displayAddComponentsBlock();

      });
    });
    describe('Verify Add Components In Create Section Form', function() {
      it('Add Components Complete Fields Should Be Displayed', function() {
        utils.goToCreateSectionForm();
        element(by.css(browser.params.cmsSearchComponentCss)).click();
        utils.addComponentsFieldsvalidation();
        utils.addButtonsOverlay();
        utils.checkOverlayTableHeaders();
        utils.checkModalButtons();
      });
      it('Components Can Be Added In Section Form', function() {
        utils.goToCreateSectionForm();
        element(by.css(browser.params.cmsSearchComponentCss)).click();
        utils.selectSlides([1, 2, 4]);
        var componentsFromOverlay = utils.getNameOfAddedComponentsFromOverlay(); //Returns an array of Internal Names with index and internal_name properties
        element(by.buttonText(browser.params.cmsSaveModalButtonByText)).click();
        var componentsFromTable = utils.getNameofAddedComponentsFromTableList(); //Returns an array of Internal Names with index and tableListName properties
        for (var i = 0; i < componentsFromOverlay.length; i++) {
          expect(componentsFromOverlay[i].internal_name).toEqual(componentsFromTable[i].tableListName);
        }
      });
      it('Components Can Be Removed In Section Form', function() {
        utils.goToCreateSectionForm();
        element(by.css(browser.params.cmsSearchComponentCss)).click();
        utils.selectSlides([1, 2, 4]); // Add Components
        element(by.buttonText(browser.params.cmsSaveModalButtonByText)).click();
        element(by.css(browser.params.cmsSearchComponentCss)).click();
        utils.selectSlides([1, 2, 4]); // Reclicking Same Components Will Remove Items From The Component List
        element(by.buttonText(browser.params.cmsSaveModalButtonByText)).click();
        expect(element(by.css(browser.params.cmsNoComponentAddedByCss)).getText()).toBe(browser.params.cmsNoAddedComponentMessage);
      });
    });

   describe('Verify Create Section-Slug', function(){
    it('Slug Should Be A Required Field, Accepts Alpha-Numberic, And has 100 Max Allowed Characters', function(){
      utils.goToCreateSectionForm();
      utils.alphaNumericValidation(element(by.css(browser.params.slugCss)));
      browser.refresh();
      utils.requiredFieldValidation(element(by.css(browser.params.slugCss)));
      utils.maximumCharactersValidation(element(by.css(browser.params.slugCss)), '100')
    });
    it('Special Characters From Title Field Should Be Deleted In Slug Field When Auto-Populated', function(){
      utils.goToCreateSectionForm();
      element(by.css(browser.params.cmsTitleCss)).sendKeys('Title#%');
      element(by.css(browser.params.cmsTitleCss)).sendKeys(protractor.Key.TAB);
      expect(element(by.className('error-msg')).isPresent(false));
    });
    it('Editing A Valid Slug Value With Invalid Characters Should Display Error Message For Invalid Characters', function(){
      utils.goToCreateSectionForm();
      element(by.css(browser.params.cmsTitleCss)).sendKeys('Title');
      element(by.css(browser.params.cmsTitleCss)).sendKeys(protractor.Key.TAB);
      expect(element(by.className('error-msg')).isPresent(false));
      element(by.css(browser.params.slugCss)).sendKeys('#title#');
      element(by.css(browser.params.cmsTitleCss)).sendKeys(protractor.Key.TAB);
      expect(element(by.className('error-msg')).isDisplayed(true));
      expect(element(by.className('error-msg')).getText()).toBe(browser.params.slugCharactersValidationMessage);
    });
  })
  describe('Verify Editing Section Form', function() {
    it('Section Content Forms Fields Should Retain When Editing The Form', function() {
      var formFields = sectionResources.completeFormAndReturnFieldValues().then(function(formFields) { //Returns an array of fields value
        let d = formFields[0].int_name;
        browser.get(browser.params.cmsPublishedContentListURL);
        utils.searchByName(d);
        element(by.css('td.bx-content-name span')).click();
        expect(element(by.id(browser.params.cmsInternalNameId)).getAttribute('value')).toEqual(formFields[0].int_name);
        expect(element(by.css(browser.params.cmsTitleCss)).getAttribute('value')).toEqual(formFields[0].title_name);
        expect(element(by.css(browser.params.slugCss)).getAttribute('value')).toEqual(formFields[0].slug_field);
      });
    });
    it('Existing Section Content Can Be Edited And Saved As Published', function() {
      var titlename = sectionResources.createSectionContent(browser.params.cmsSaveAsDraftButtonText)
      utils.searchByName(titlename);
      element(by.css('td.bx-content-name span')).click();
      element(by.css(browser.params.cmsTitleCss)).sendKeys("updated");
      var updatedTitle = element(by.css(browser.params.cmsTitleCss)).getAttribute('value');
      element(by.buttonText(browser.params.cmsPublishButtonText)).click();
      browser.waitForAngular();
      utils.searchByName(titlename);
      element(by.css('td.bx-content-name span')).click();
      expect(element(by.css(browser.params.cmsTitleCss)).getAttribute('value')).toEqual(updatedTitle);
    });
    it('Existing Section Content Can Be Edited And Saved As Draft', function() {
      var titlename = sectionResources.createSectionContent(browser.params.cmsPublishButtonText)
      utils.searchByName(titlename);
      element(by.css('td.bx-content-name span')).click();
      element(by.css(browser.params.cmsTitleCss)).sendKeys("updated");
      var updatedTitle = element(by.css(browser.params.cmsTitleCss)).getAttribute('value');
      element(by.buttonText(browser.params.cmsSaveAsDraftButtonText)).click();
      browser.waitForAngular();
      utils.searchByName(titlename);
      element(by.css('td.bx-content-name span')).click();
      expect(element(by.css(browser.params.cmsTitleCss)).getAttribute('value')).toEqual(updatedTitle);
    });
  });
describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
   it('Check if Tag Field is displayed for all content type', function() {
     utils.goToCreateSectionForm();
     utils.tagfieldPresent();
   }); //IT
 }); //SUB DESCRIBE
});
