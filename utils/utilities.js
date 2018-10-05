
var utilities = function(){


  //USE THIS TO LOGIN TO CMS
  this.loginToCms = function()
  {
    browser.get(browser.params.cmsUrl);
    browser.waitForAngular();
    element.all(by.id(browser.params.cmsUsernameId)).last().sendKeys(browser.params.cmsUsername);
    element.all(by.id(browser.params.cmsPasswordId)).last().sendKeys(browser.params.cmsPassword);
    element(by.buttonText('Login')).click();
    browser.sleep(5000);
  }
  //GO TO CREATE IMAGE CONTENT TYPE
  this.goToCreateImageContent = function()
  {
      browser.get(browser.params.createImageContentURL);
  }
  this.goToCreateContentBlock = function()
  {
      browser.get(browser.params.createContentBlockPageURL);
  }

  this.goToCreateMarketingContent = function()
  {
    browser.get(browser.params.createMarketingPageURL);
  }
  //USE THIS TO CREATE NEW GAME PAGE CONTENT
  this.createGameContent = function()
  {
    browser.get(browser.params.createCasinoGamePageURL);
  }
  //USE THIS TO CREATE NEW SLIDESHOW PAGE CONTENT
  this.goToCreateSlideShowContent = function()
  {
    browser.get(browser.params.createSlideShowPageURL);
  }

  //USE THIS TO CREATE NEW SLIDE PAGE CONTENT
  this.goToCreateSlideContent = function()
  {
    browser.get(browser.params.createSlidePageURL);
  }

  //USE THIS TO CREATE NEW CONTENT PAGE TYPE
  this.createContentPage = function()
  {
    browser.get(browser.params.createContentPageURL);
  }

  //USE THIS TO GO TO ADD IMAGE PAGE
  this.goToAddImagePage = function()
  {
    element(by.css(browser.params.cmsCreateNewContentCss)).click();
    element(by.css(browser.params.cmsAddNewImageCss)).click();
  }
  //USE TO SCROLL UP
  this.scrollUp = function()
  {
    browser.executeScript('window.scrollTo(0,200);').then(function() {
    browser.sleep(3000);
    }).then(function() {
      browser.executeScript('window.scrollTo(0,0);');
    });
  }


  this.scrollDown = function()
  {
    browser.executeScript('window.scrollTo(0,1000);').then(function () {
    })
  }

    // Upload Image File
  this.uploadImageFile = function(locator, fileName)
  {
    var path = require('path');
    // set remote file detector
    var remote = require('selenium-webdriver/remote');
    browser.setFileDetector(new remote.FileDetector());
    // set file to upload
    var fileToUpload = fileName;
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = element(by.id(locator));
    browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());
    fileElem.sendKeys(absolutePath);
    browser.driver.sleep(100);
  }
  this.editPage = function(cta)
  {
    var url = browser.getCurrentUrl();
    element(by.id('contentManagementList')).all(by.css('.bx-content-name .custom-link')).first().click();
    browser.sleep(1000);
    var InternalNameEd = element(by.id(browser.params.cmsInternalNameId));
    var titleEd = element.all(by.id(browser.params.cmsTitleFieldId));
    InternalNameEd.sendKeys('test');
    titleEd.get(0).sendKeys('test');
    browser.sleep(500);
    expect(InternalNameEd.getAttribute('value')).toContain('test');
    expect(titleEd.get(0).getAttribute('value')).toContain('test');
    browser.sleep(2000);
    element(by.buttonText(cta)).click();
    browser.sleep(8000);
    expect(browser.getCurrentUrl()).toBe(url);
  }

  this.requiredFieldValidation = function(locator)
  {
    locator.click();
    locator.sendKeys(protractor.Key.TAB);
    var field = element.all(by.className('error-msg'));
    expect(field.get(0).getText()).toBe('This is a required field.');
    browser.sleep(1000);

  }
  this.alphaNumericValidation = function(locator)
  {
      locator.sendKeys('QA_Test-123');
      locator.sendKeys(protractor.Key.TAB);
      expect(locator.getAttribute('class')).toContain('ng-valid');
      locator.sendKeys('***$$$');
      locator.sendKeys(protractor.Key.TAB);
      expect(locator.getAttribute('class')).toContain('ng-invalid');
      locator.clear();
  }
  this.anyCharactersAllowedValidation = function(locator)
  {
      locator.sendKeys('QA Test -123');
      locator.sendKeys(protractor.Key.TAB);
      expect(locator.getAttribute('class')).toContain('ng-valid');
      locator.sendKeys('***$$$');
      expect(locator.getAttribute('class')).toContain('ng-valid');
      locator.clear();
  }
  this.fieldLabelValidation = function(locator, label) {
    expect(locator.isPresent()).toBe(true);
    expect(locator.getText()).toEqual(label);
  }
  this.maximumCharactersValidation = function(locator, maxChar)
  {
    expect(locator.getAttribute('maxlength')).toEqual(maxChar);
    locator.sendKeys(this.autoGenerateString(maxChar));
  }
  this.internalNameValidation = function()
  {
    var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
    var cmsInternalNameLabel = element(by.css('label[for="internal_name"]'));
    cmsInternalName.clear();
    this.requiredFieldValidation(cmsInternalName);
    this.alphaNumericValidation(cmsInternalName);
    this.fieldLabelValidation(cmsInternalNameLabel, 'Internal Name*')
    this.maximumCharactersValidation(cmsInternalName, '100');
  }
  this.titleValidation = function()
  {
    var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
    var cmsTitleFieldLabel = element.all(by.css('label[for="title"]')).first();
    cmsTitleField.clear();
    this.requiredFieldValidation(cmsTitleField);
    this.anyCharactersAllowedValidation(cmsTitleField);
    this.fieldLabelValidation(cmsTitleFieldLabel, 'Title*')
    this.maximumCharactersValidation(cmsTitleField, '100');
  }
  this.bodySectionvalidation = function()
  {
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
  //  browser.driver.sleep(5000);
    cmsLongDescription.sendKeys(allCharacters);
    var cmsLongDescriptionTextInput = cmsLongDescription.element(by.tagName('p'));
    expect(cmsLongDescriptionTextInput.getAttribute('style')).toBe('text-align: center;');
    expect(cmsLongDescriptionTextInput.element(by.tagName('em')).element(by.tagName('strong')).isPresent()).toBe(true);
  }
  this.autoGenerateString = function(length)
  {
    var string = '';
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789- '
        for (i = 0; i < length; i++) {
            string += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return string;
  }
  this.autoGenerateStringForSlug = function(length)
  {
    var string = '';
    var letters = 'abcdefghijklmnopqrstuvwxyz123456789-'
        for (i = 0; i < length; i++) {
            string += letters.charAt(Math.floor(Math.random() * letters.length));
        }
        return string;
  }
  this.displayInternalNameAndTitleName = function(){

    expect(element(by.id(browser.params.cmsInternalNameId)).isDisplayed()).toBe(true);
    expect(element.all(by.id(browser.params.cmsTitleFieldId)).first().isDisplayed()).toBe(true);
  }
  this.displayTagsField = function(){

    expect(element(by.id(browser.params.cmsTagsField)).isDisplayed()).toBe(true);
  }
  this.displayLanguageTab = function(){
    expect(element(by.css('div.bx-tabs nav')).isDisplayed()).toBe(true);
    expect(element(by.id('remove-translation-link-wrapper')).isDisplayed()).toBe(true);
  }
  this.displayHeader = function(headerName){
    expect(element(by.css('bx-content-type-form-header span.bx-panel-header-title')).isDisplayed()).toBe(true);
    expect(element(by.css('bx-content-type-form-header span.bx-panel-header-title')).getText()).toBe(headerName)
  }
  this.displayAddImageTab = function(){
    expect(element.all(by.className('custom-imageselector')).first().isDisplayed()).toBe(true);
    expect(element.all(by.className('imageselector-stage')).first().isDisplayed()).toBe(true);
  }
  this.displayDescriptionBlock = function(){
    expect(element(by.id('body_en')).isDisplayed()).toBe(true);
  }
  this.contentButtonsVerification = function(){
    expect(element(by.buttonText(browser.params.cmsSaveAsDraftButtonText)).isDisplayed()).toBe(true);
    expect(element(by.buttonText(browser.params.cmsPublishButtonText)).isDisplayed()).toBe(true);
    expect(element(by.buttonText(browser.params.cmsDiscardButtonText)).isDisplayed()).toBe(true);

  }
  this.checkLanguageTab = function(brand){
    let brandName = element.all(by.className('bx-tabs__content')).first().element(by.tagName('nav')).all(by.css('li'));
    if(brand=="Slots LV"){
      expect(brandName.count()).toBe(2);
      expect(brandName.get(0).getAttribute('class')).toEqual('active')
      expect(brandName.get(0).getText()).toEqual('EN');
      expect(brandName.get(1).getText()).toEqual('SC');
      browser.sleep(3000);
    }
    else{
      expect(brandName.count()).toBe(3);
      expect(brandName.get(0).getAttribute('class')).toEqual('active')
      expect(brandName.get(0).getText()).toEqual('EN');
      expect(brandName.get(1).getText()).toEqual('ES');
      expect(brandName.get(2).getText()).toEqual('PT');
    }
  }
  this.unpublishOrPublishContent = function(title){
    element(by.id('contentManagementList')).all(by.css('td.bx-content-name span')).first().getText().then(function(text){
        console.log(text);
        if (text==title){
          element(by.id('contentManagementList')).all(by.css('td.bx-content-delete span')).first().click();
          //browser.sleep(2000);
          //element(by.css('bx-notification-alert button.close-btn')).click();
          //browser.sleep(3000);
        }
    });
  }
  this.checkContentVersion = function(title, version){
    element(by.id('contentManagementList')).all(by.css('td.bx-content-name span')).first().getText().then(function(text){
          if (text==title){
          element(by.id('contentManagementList')).all(by.css('td.bx-content-name span')).first().click();
          browser.sleep(3000);
          expect(element(by.className('bx-panel-header-version-value')).getText()).toBe(version);
          //browser.sleep(3000);
        }
    });
  }
    this.checkMenuVersion = function(title, version){
      element(by.id('menuContentList')).all(by.css('td.bx-menulist-name span')).first().getText().then(function(text){
            if (text==title){
            element(by.id('menuContentList')).all(by.css('td.bx-menulist-name span')).first().click();
            browser.sleep(3000);
            expect(element(by.className('bx-panel-header-version-value')).getText()).toBe(version);
            //browser.sleep(3000);
          }
      });
    }
    this.editAndSaveMenu = function(title, cta){
      element(by.id('menuContentList')).all(by.css('td.bx-menulist-name span')).first().getText().then(function(text){
      if (text==title){
      element(by.id('menuContentList')).all(by.css('.bx-menulist-name .custom-link')).first().click();
      element(by.buttonText(cta)).click();
      browser.sleep(8000);
      }
    });
    }

  //GO TO CREATE MENU FORM
  //Go to Menu List
  this.goToMenuList = function()
  {
        element(by.css(browser.params.cmsMenuTab)).click();
  }

  this.goToCreateMenu = function()
  {
        element(by.css(browser.params.cmsMenuCss)).click();
        element(by.css(browser.params.cmsCreateNewMenuCss)).click();
  }
  this.searchByName = function (contentTitle){
      var searchField = element(by.id(browser.params.cmsSearchByName));
      searchField.sendKeys(contentTitle);
      searchField.sendKeys(protractor.Key.ENTER);
      browser.sleep(3000);
  }

  //Field should only accept alphanumeric, hyphen, and period
  this.slug = function(field)
  {
    //test invalid
    field.sendKeys('***');
    expect(field.getAttribute('class')).toContain('ng-invalid');
    browser.sleep(3000);
    field.clear();

    //test valid
    field.sendKeys(this.autoGenerateString(3)
                    + '.' + this.autoGenerateString(3)
                    + '-' + this.autoGenerateString(3)
                    + '_' + this.autoGenerateString(3)
                  );
    expect(field.getAttribute('class')).toContain('ng-valid');
    field.clear();
  }



  this.selectFromDropdown = function(locator, item){
    var selectList, desiredOption;
    locator.click();
    browser.findElements(protractor.By.tagName('li'))
          .then(function findMatchingOption(options){
              options.some(function(option){
                  option.getText().then(function doesOptionMatch(text){
                      if (item === text){
                          desiredOption = option;
                          return true;
                      }
                  });
              });
          })
          .then(function clickOption(){
              if (desiredOption){
                  desiredOption.click();
              }
          });
  }

  this.goToCreateSectionForm = function() {
    browser.get(browser.params.createSectionUrl);
  }

  this.waitForVisibilityOf = function(element) {
    browser.wait(EC.visibilityOf(element), 10000).then(function() {
      // success handler
      expect(element.isDisplayed()).toBeTruthy();
    }, function(error) {
      expect(true).toBe(false);
    });
  }

  this.selectSlides = function(selections) {
    var btns = element.all(by.css("#contentTypeList")).all(by.css("button"));
       btns.each(function(btn,index){
          if(selections.indexOf(index+1) > -1 ){
              btn.click();
              browser.sleep(1000);
          }
       })
  };
this.getElementByTitle = function(title, listLocator) {
  var deferred = protractor.promise.defer();

  element.all(by.css(listLocator))
    .each(function(el, index) {
      el.getText()
        .then(function(text) {
          if(text === title) {
            deferred.fulfill(el);
          }
        });
    });

  return deferred.promise;
};

this.getRowByTitle = function (title, listLocator) {
  var deferred = protractor.promise.defer();

  this.getElementByTitle(title, listLocator)
    .then(function(el) {
      deferred.fulfill(el.element(by.xpath("ancestor::tr")));
    });

  return deferred.promise;
}


this.checkFilteredList = function(contentType, listId){

  element(by.id(listId))
      .all(by.css("td.bx-content-type span"))
            .each(function(contentTypeColumn, index) {
                  contentTypeColumn.getText().then(function(text) {
                        expect(text).toEqual(contentType);
                  })
             });
}
this.clickEachContentTab = function(tabLength){
  var cmsContentTabSecTabsArray = browser.params.cmsContentTabSecondaryTabs + '[' + tabLength + ']';
  element(by.xpath(cmsContentTabSecTabsArray)).click();
}

this.displaySlugField = function(){

    expect(element(by.css(browser.params.slugCss)).isDisplayed()).toBe(true);

  }
this.displayAddComponentsBlock = function(){

    expect(element(by.css(browser.params.addComponentsBlockCss)).isDisplayed()).toBe(true);
    expect(element(by.css(browser.params.cmsSearchComponentCss)).isDisplayed()).toBe(true);

  }
  this.modalHeaderName = function(headerName) {
    expect(element(by.css(browser.params.cmsModalHeaderByCss)).getText()).toBe(headerName);
  }
  this.addComponentsFieldsvalidation = function() {
    expect(element(by.css(browser.params.cmsModalHeaderByCss)).isDisplayed(true));
    this.modalHeaderName('Add Components');
    expect(element(by.css('input[id="searchBy"]')).isDisplayed(true));
    expect(element(by.css(browser.params.cmsMultiSelectDropdownByCss)).isDisplayed(true));

  }
  this.addButtonsOverlay = function() {
    var btns = element.all(by.css("#contentTypeList")).all(by.css("button"));
    btns.each(function(btn, index) {
      expect(element.all(by.css('bx-modal button span')).get(index).getText()).toBe('+ ADD');
    })
  }
  this.checkOverlayTableHeaders = function() {
    expect(element(by.id('contentTypeListNameTitle')).isDisplayed(true));
    expect(element(by.id('contentTypeListTypeTitle')).isDisplayed(true));
    expect(element(by.id('contentTypeListStatusTitle')).isDisplayed(true));
  }
  this.checkModalButtons = function() {
    expect(element(by.buttonText(browser.params.cmsSaveModalButtonByText)).isDisplayed(true));
    expect(element(by.buttonText(browser.params.cmsCancelButtonText)).isDisplayed(true));
  }

  this.getNameOfAddedComponentsFromOverlay = function() {
    var list = element.all(by.css('#contentTypeList')).all(by.css('button.secondary'))
    var selected = list.map(function(item, idx) {
      var iname = item.element(by.xpath("ancestor::tr")).element(by.xpath("descendant::td[@class='bx-content-name']//span"));
      return {
        index: idx,
        internal_name: iname.getText()
      };
    });
    return selected;
  }
  this.getNameofAddedComponentsFromTableList = function(){
    var list = element.all(by.css('div.content-selector-list')).all(by.css('th.bx-content-name'));
    var table = list.map(function(item, idx){
      var listName = item.element(by.css('th.bx-content-name span'));
      return {
        index: idx,
        tableListName: listName.getText()
      }
    });
return table;
};


  this.moveUpDown = function(row, selected) {
    var moveUp = element.all(by.css("th.bx-content-action")).all(by.css("button > i.icon.icon-arrow-up"));
    var moveDown = element.all(by.css("th.bx-content-action")).all(by.css("button > i.icon.icon-arrow-down"));
    //var btns = element.all(by.css("th.bx-content-action")).all(by.css("button > i.icon.icon-arrow-up"));
    if (selected == 'up'){
      moveUp.each(function(up,index){
         if ((row).includes(index+1)) {
             up.click();
             browser.sleep(1000);
         }
      })

    }
    else if (selected == 'down'){
      moveDown.each(function(down,index){
         if ((row).includes(index+1)) {
             down.click();
             browser.sleep(1000);
         }
      })
    }

   };

  this.getCurrentArrangement = function() {
    var deferred = protractor.promise.defer();
    var arrangement = [];

    element.all(by.css("#new_slide_en")).all(by.css("th.bx-content-name span"))
      .each(function(name, index) {
        name.getText()
          .then(function(text) {
            arrangement.push(text);
          }) //close function
      }) //close list -- each
      .then(
        function() {
          deferred.fulfill(arrangement);
        },
        function() {
          deferred.reject();
        }
      );
    return deferred.promise;
  };//close getCurrentArrangement

  this.tagfieldPresent = function(){
    expect(element(by.css("#tags")).isDisplayed()).toBe(true);
};

  this.deleteActionPresent = function(){
    expect(element.all(by.buttonText('Delete')).first().isDisplayed()).toBe(true);

  };


 };

module.exports = new utilities ();
