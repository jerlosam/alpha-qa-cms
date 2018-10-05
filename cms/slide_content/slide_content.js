var utils = require('../../utils/utilities');
var slideContentResources = require('../slide_content/slide_common');
var marketingResources = require('../marketing_content/marketing_common');
var gameResources = require('../game_content/game_common');
var contentPageResources = require('../content_page/content_page_common');
var internalPage = element.all(by.buttonText(browser.params.cmsAddInternalPage)).first();

describe('Verify Slide Content Form', function() {
  utils.loginToCms();
 beforeEach(function() {
   browser.get(browser.params.cmsUrl);
   browser.ignoreSynchronization = true;
 });
describe('Verify Search By Name Field', function() {
  it('Search By Name - Searched Marketing Content Should Be Displayed', function() {
    var title = marketingResources.createMarketingPage(browser.params.cmsPublishButtonText);
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    utils.searchByName(title);
    expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
  });
  it('Search By Name - Searched Game Content Should Be Displayed', function() {
    var title = gameResources.createGame('129', browser.params.cmsPublishButtonText);
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    utils.searchByName(title);
    expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
  });
  it('Search By Name - Searched Content Page Should Be Displayed', function() {
    var title = contentPageResources.createContent(browser.params.cmsPublishButtonText, 'Generic');
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    utils.searchByName(title);
    browser.sleep(1000);
    expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
  });
  it('Search By Name - "No Internal Pages Found" Should Be Displayed For No Matching Results', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    utils.searchByName('⌛');
    browser.sleep(2000);
    expect(element(by.css(browser.params.cmsNoSearchResult)).isDisplayed()).toBe(true);
    expect(element(by.css(browser.params.cmsNoSearchResult)).getText()).toEqual('No internal pages found.');
  });
});
describe('Verify Multi Select Dropdown', function() {
  it('Search By Multi Select Dropdown - All Supported Content Types Should Be Displayed For "All Types Selected"', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('All Types Selected');
    element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
    expect(element(by.id(browser.params.cmsMarketingCheckBoxId)).getAttribute('checked')).toEqual('true');
    expect(element(by.id(browser.params.cmsGameCheckBoxId)).getAttribute('checked')).toEqual('true');
    expect(element(by.id(browser.params.cmsContentCheckBoxId)).getAttribute('checked')).toEqual('true');
  });
  it('Search By Multi Select Dropdown - Deselect Link Should Unchecked All Checkboxes And Displays Default List', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
    expect(element(by.css('a.deselect-all')).isDisplayed()).toBe(true);
    element(by.css('a.deselect-all')).click();
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('No Type selected');
  });
  it('Search By Multi Select Dropdown - Marketing Contents Should Be Displayed When Marketing Is Checked', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
    element(by.css('a.deselect-all')).click();
    slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMarketingCheckBoxId]);
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('Marketing Page');
    utils.checkFilteredList('Marketing Page', 'contentTypeList');
  });
  it('Search By Multi Select Dropdown - Game Contents Should Be Displayed When Game Is Checked', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
    element(by.css('a.deselect-all')).click();
    slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsGameCheckBoxId]);
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('Casino Game Page');
    utils.checkFilteredList('Casino Game Page', 'contentTypeList');
  });
  it('Search By Multi Select Dropdown - Content Page Should Be Displayed When Content Page Is Checked', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
    element(by.css('a.deselect-all')).click();
    slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId]);
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('Content Page');
    utils.checkFilteredList('Content Page', 'contentTypeList');
  });
  it('Search By Multi Select Dropdown - Filtered 2 Content Types Should Be Displayed In Content List', function() {
    utils.createSlideContent();
    utils.waitForVisibilityOf(internalPage);
    internalPage.click();
    element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
    element(by.css('a.deselect-all')).click();
    slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsGameCheckBoxId, browser.params.cmsContentCheckBoxId]);
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).getAttribute('value')).toEqual('2 Types Selected');
  });
});
describe('Verify Slideshow Page Fields', function() {
  it('Complete Fields Should Be Displayed', function() {
    utils.goTocreateSlideShowContent();
    utils.displayHeader('Create New Slideshow');
    utils.displayLanguageTab();
    utils.displayInternalNameAndTitleName();
    utils.displayTagsField();
    utils.contentButtonsVerification();
    utils.internalNameValidation();
    utils.titleValidation();
    utils.contentButtonsVerification();
  //  slideContentResources.displaySlidesItemsBlock; //This is only displayed when there are some menus added
    slideContentResources.displayAddSlidesItemsBlock();
    slideContentResources.displayAddMenuItemCTA ();
  });
});
describe('ALPHAPLTF-705: [Enhancement] Added Slides/Components/Menu Items shall be updated if there are changes made on the original Content/Menu', function() {
  it('Edit Slided added on Slideshow', function(){
    //VAR
    var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();
    var cmsTitleName = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    var cmsSave = element.all(by.buttonText(browser.params.cmsPublishButtonText)).first();
    //Funtion to generate random chains
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          return text;
    }
    //CREATE SLIDE
    var internalName = 'Test Slide internal name CH' + makeid() + new Date().toISOString().slice(0, 10);
    var title = 'Title Slide CH';
    var backgroundColor = 'white';
    var cmsbackgroundColor = element(by.id(browser.params.cmsBackgroundId));
    var openInLink = element(by.id(browser.params.cmsLinkId));
    var cmsPageImageAlt = element(by.id('image_en.alt'));
    var uploadImage = element(by.css('i.icon icon-plus'));
    var openPopPup = element.all(by.css('ul.custom-droplist')).get(1);

    utils.createSlideContent();
    cmsInternalName.sendKeys(internalName);
    cmsTitleName.sendKeys(title);
    utils.uploadImageFile('image_en');
    browser.sleep(1000);
    expect (cmsPageImageAlt.isPresent()).toBe(true);
    cmsPageImageAlt.sendKeys('test');
    cmsbackgroundColor.sendKeys(backgroundColor);
    openInLink.click();
    browser.sleep(500);
    openPopPup.click();
    cmsSave.click();
    browser.sleep(2000);

    //CREATE SLIDESHOW AND ADD THE PREVIOUS SLIDE
    var searchSlide = element(by.css(browser.params.cmsSearchComponentCss));
    var slideName = element.all(by.css('td.bx-content-name'));
    var addSlide = element.all(by.css('td.bx-content-action')).get(0);
    var cmsSaveAdd = element(by.css('button.custom-cta.primary.cta-large'));
    var addedSlideName = element.all(by.css('th.bx-content-name'));
    var statusSlide = element.all(by.css('th.bx-content-status'));
    var landTabCreated = element.all(by.css('th.bx-content-languages'));
    var published = 'Published';
    var langTab ='EN';

    utils.goTocreateSlideShowContent();
    browser.sleep(1000);
    cmsInternalName.sendKeys('Test SlideShow CH - Internal Name' + makeid() + new Date().toISOString().slice(0, 10));
    cmsTitleName.sendKeys('Title Slideshow');
    searchSlide.click();
    browser.sleep(500);
    expect(slideName.get(0).getText()).toContain(internalName);
    addSlide.click();
    browser.sleep(500);
    cmsSaveAdd.click();
    browser.sleep(500);
    expect(addedSlideName.get(0).getText()).toEqual(internalName);
    expect(statusSlide.get(0).getText()).toEqual(published);
    expect(landTabCreated.get(0).getText()).toEqual(langTab);
    cmsSave.click();
    browser.sleep(1000);

    //EDIT FIRST SLIDE
    var listContent = element.all(by.css('td.bx-content-name'));
    var saveDraft = element(by.css(browser.params.cmsSaveDraftCss));
    var langTabES = element(by.css('bx-tabs > div > nav > ul > li:nth-child(2)'));

    expect(listContent.get(1).getText()).toContain([ 'Test Slide internal name CH' ]);
    browser.sleep(500);
    listContent.get(1).click();
    cmsInternalName.sendKeys(' Edited');
    langTabES.click();
    saveDraft.click();
    browser.sleep(3000);


    // CHECK THAT THE SLIDE CHANGES ARE REFLECTED IN SLIDESHOW
    var publishedContentTab = element(by.css('bx-tabs > div > nav > ul > li:nth-child(1)'));

    publishedContentTab.click();
    browser.sleep(1000);
    listContent.get(0).getText().then(console.log);
    expect(listContent.get(0).getText()).toContain('Test SlideShow CH - Internal Name');
    listContent.get(0).click();
    browser.sleep(5000);
    expect(addedSlideName.get(0).getText()).toContain('Test Slide internal name bla bla Edited');
    expect(statusSlide.get(0).getText()).toEqual([ 'Draft' ]);
    landTabCreated.getText().then(console.log);
    expect(landTabCreated.get(0).getText()).toEqual([ 'EN, ES' ]);

  });
});//CLOSE ALPHAPLTF-705

describe('ALPHAPLTF-1125 [Enhancement] All content types to have Tags field', function() {
   it('Check if Tag Field is displayed for all content type', function() {
     utils.createSlideContent();
     utils.tagfieldPresent();
   }); //IT
 }); //SUB DESCRIBE

//START ALPHAPLTF-1146
describe('Verify Add Background Image Section In Create Slide Form', function() {
   var backgroundImageLabel = element(by.css('.localised-tab-en bx-form-group bx-imageselector:nth-child(4) label'));
   var addBackgroundButton = element(by.css('.localised-tab-en bx-form-group bx-imageselector:nth-child(4) .imageselector-stage span.custom-link')) ;
   var backgroundImageSelector = 'background_image_en';
   var backgroundDeleteLink = element(by.css('.localised-tab-en bx-form-group bx-imageselector:nth-child(4) .imageselector-removeimage-link span.custom-link'));
   var backgroundImage =  element(by.css('.localised-tab-en bx-form-group bx-imageselector:nth-child(4) .imageselector-preview img'));
   var backgroundErrorMessage = element(by.css('.localised-tab-en bx-form-group bx-imageselector:nth-child(4) span.error-msg'));
   it('Add Background Image Should Be Displayed In Slide Form, Should Not Be A Required Field, And Has Upload Image CTA And Header ', function() {
     utils.goToCreateSlideContent();
     utils.fieldLabelValidation(backgroundImageLabel, 'Add a Background Image');
     expect(addBackgroundButton.isDisplayed()).toBeTruthy();
   });
   it('Uploaded Background Image Should Be Displayed In Background Image Section And Header Should Be Changed To "Background Image Added"', function() {
     utils.goToCreateSlideContent();
     utils.uploadImageFile(backgroundImageSelector, '../data_files/testuploadfile.png');
     utils.fieldLabelValidation(backgroundImageLabel, 'Background Image Added');
     expect(backgroundDeleteLink.isDisplayed()).toBeTruthy();
     expect(backgroundImage.getCssValue('text-align')).toBe('center');
   });
   it('Background Image Added Can Be Deleted In Create Slide Form', function() {
     utils.goToCreateSlideContent();
     utils.uploadImageFile(backgroundImageSelector, '../data_files/testuploadfile.png');
     backgroundDeleteLink.click();
     expect(backgroundImage.isPresent()).toBeFalsy();
     expect(addBackgroundButton.isDisplayed()).toBeTruthy();
   });
   it('Error Message Should Be Displayed For Invalid File Size', function() {
     utils.goToCreateSlideContent();
     utils.uploadImageFile(backgroundImageSelector, '../data_files/invalid-size.png');
     utils.fieldLabelValidation(backgroundErrorMessage, 'Maximum File Size Limit Reached (150Kb)');
   });
   it('Creation Of Slide Form Should Be Successful With Background Image Uploaded', function() {
     var title = slideContentResources.createSlideWithbackground(browser.params.cmsPublishButtonText, 'Same Tab');
     expect(element.all(by.css('td.bx-content-name')).getText()).toContain(title);
   });
 }); //END ALPHAPLTF-1146

});

//Adding this temporary comment for CRON trigger. This will be deleted later. Thanks :)
