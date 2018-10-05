var utils = require('../../utils/utilities');
var menuContentResources = require('../menu/menu_common');
var marketingResources = require('../marketing_content/marketing_common');
var gameResources = require('../game_content/game_common');
var contentPageResources = require('../content_page/content_page_common');
var slideContentResources = require('../slide_content/slide_common');

describe('Verify Menu Form', function() {

  var cmsAddMenuItemCTACSS = element(by.css('bx-content-selector button.custom-cta'));
  var cmsCloseButtonCss = element.all(by.css('button.close-btn')).first();
  var cmsCancelCss = element(by.cssContainingText('button.custom-cta.tertiary', 'Cancel'));
  var cmsAdd = element.all(by.css(browser.params.cmsAddCss)).first();
  var cmsAddComponent = element.all(by.buttonText('+ Add')).first();
  var cmsRemoveComponent = element.all(by.buttonText('Remove')).first();
  var closeBtn = element(by.css('button.close-btn'));
  var cmsDisabledArrowUp = element.all(by.css(browser.params.cmsDisabledArrowUpCss)).first();;
  var cmsDisabledArrowDown = element.all(by.css(browser.params.cmsDisabledArrowDownCss)).first();
  var cmsPublished = element.all(by.cssContainingText(browser.params.cmsPublishedCss, 'Save')).first();
  var cmsDelete = element.all(by.css(browser.params.cmsDeleteCss)).first();
  var cmsLanguageColumn = element.all(by.css(browser.params.cmsLanguageColumnCss)).first();
  var cmsInternalColumn = element.all(by.css(browser.params.cmsInternalColumnCss)).first();
  var cmsTypeColumn = element.all(by.css(browser.params.cmsTypeColumnCss)).first();
  var cmsStatusColumn = element.all(by.css(browser.params.cmsStatusColumnCss)).first();
  var cmsEditIcon = element.all(by.css(browser.params.cmsEditIconCss)).first();
  var cmsDeleteColumn = element.all(by.css(browser.params.cmsDeleteColumnCss)).first();
  var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId)).first();
  var cmsSlugField = element.all(by.id(browser.params.cmsSlugField));


  utils.loginToCms();
  beforeEach(function() {
    browser.get(browser.params.cmsUrl);
  });


  //ALPHAPTLF-512
  describe('Verify Menu Form Rendering', function() {
    it('Complete fields should be displayed', function() {
      utils.goToCreateMenu();
      utils.displayHeader('Create New Menu');
      utils.displayLanguageTab();
      utils.displayInternalNameAndTitleName();
      utils.displayTagsField();
      utils.internalNameValidation();
      utils.titleValidation();
      utils.contentButtonsVerification();
    //  menuContentResources.displayMenuItemsBlock(); //This is only displayed when there are some menus added
      menuContentResources.displayAddMenuItemsBlock();
      menuContentResources.displayAddMenuItemCTA();

  });
    // ALPHAPTLF-515 reopened waiting for fix in ALPHAPLTF-666
    it('Validation of required text fields', function() {
      var cmsInternalName = element(by.id(browser.params.cmsInternalNameId));
      var cmsInternalNameLabel = element(by.css('label[for="internal_name"]'));
      utils.goToCreateMenu();
      utils.requiredFieldValidation(cmsInternalName);
      var cmsTitleField = element.all(by.id(browser.params.cmsTitleFieldId)).first();
      var cmsTitleFieldLabel = element.all(by.css('label[for="title"]')).first();
      cmsTitleField.clear();
      utils.requiredFieldValidation(cmsTitleField);
    });

    it('Astrisk is displayed after Internal NAme and Add Menu Items', function() {
      utils.goToCreateMenu();
      var cmsAddMenuItemLabel = element.all(by.className('div.contentselector-label')).get(0);
      expect(cmsAddMenuItemLabel.getText()).toContain('Add Menu Items*');
    });
});


  describe('Verify Menu Version Functionality', function() {
    it('Menu Version Draft - Major Increments', function() {
      var title = menuContentResources.createMenu(browser.params.cmsSaveAsDraftButtonText)
      utils.checkMenuVersion(title, '1.0');
    });
    it('Menu Version Publish - Major Increments', function() {
      var title = menuContentResources.createMenu(browser.params.cmsPublishButtonText)
      utils.checkMenuVersion(title, '1.0');
    });
    it('Draft Menu Edit Version - Minor Increments', function() {
      var title = menuContentResources.createMenu(browser.params.cmsSaveAsDraftButtonText)
      utils.editAndSaveMenu(title, browser.params.cmsSaveAsDraftButtonText)
      utils.checkMenuVersion(title, '1.1');
    });
    it('Draft Menu To Published Version - Minor Increments', function() {
      var title = menuContentResources.createMenu(browser.params.cmsSaveAsDraftButtonText)
      utils.editAndSaveMenu(title, browser.params.cmsPublishButtonText)
      utils.checkMenuVersion(title, '1.1');
    });
    it('Published Menu To Draft Version - Major Increments', function() {
      var title = menuContentResources.createMenu(browser.params.cmsPublishButtonText)
      utils.editAndSaveMenu(title, browser.params.cmsSaveAsDraftButtonText)
      utils.checkMenuVersion(title, '2.0');
    });

    it('Published Menu To New Published Version - Major Increments', function() {
      var title = menuContentResources.createMenu(browser.params.cmsPublishButtonText)
      utils.editAndSaveMenu(title, browser.params.cmsSaveAsDraftButtonText)
      utils.checkMenuVersion(title, '2.0');
    });

  });

  //ALPHAPTLF-510
  describe('Verify Add Menu Items - Internal', function() {
    it('Display of Add New Menu Items overlay - Internal Items tab', function() {
      utils.goToCreateMenu();
      menuContentResources.displayMenuItems();
    });

    it('Switch to Remove once Add is clicked and vice versa', function() {
      utils.goToCreateMenu();
      menuContentResources.verifyAddRemoveItems();
    });

    it('Save Add Menu Items and redirects to main Add Menu form', function() {
      utils.goToCreateMenu();
      menuContentResources.saveAddMenuItems();
    });

    // it('Pagination - Next and Previous', function(){
    //     utils.goToCreateMenu();
    //     menuContentResources.paginationForMenuItems();
    });


    //ALPHAPTLF-577
    describe('Display of Add Menu Items - External Links', function() {
      it('Display of Add New Menu Items overlay - External Items tab', function() {
        utils.goToCreateMenu();
        menuContentResources.displayMenuItemsExternal();
      });

      it('Add Another Item Validation', function() {
        utils.goToCreateMenu();
        menuContentResources.addAnotherItem();
        menuContentResources.removeItem();
      });

      it('Save Add Menu Items and redirects to main Add Menu form', function() {
        utils.goToCreateMenu();
        menuContentResources.AddSaveExternaLink();
      });

      it('Save External Link- Missing Required Fields', function() {
        utils.goToCreateMenu();
        menuContentResources.MissingRequiredFields();
      });

  });

  //ALPHAPTLF-893 not yet resolved
//   describe('Edit Menu Items - External Links)', function() {
//     it('Display Edit Icon for Each External Item', function() {
//       utils.goToCreateMenu();
//       menuContentResources.AddSaveExternaLink();
//       menuContentResources.EditAddedItem();
//     });
//
//     it('Expand and Display External Link Form', function() {
//       utils.goToCreateMenu();
//       menuContentResources.AddSaveExternaLink();
//       menuContentResources.EditAddedItem();
//       menuContentResources.PrepopulatedExpandForm();
//     });
//
//     it('Save when Fields are Complete', function() {
//       utils.goToCreateMenu();
//       menuContentResources.AddSaveExternaLink();
//       menuContentResources.EditAddedItem();
//       menuContentResources.CollapseAndSave();
//
//     });
//
//     it('Cannot Save when Fields are Incomplete', function() {
//       utils.goToCreateMenu();
//       menuContentResources.AddSaveExternaLink();
//       menuContentResources.EditAddedItem();
//       menuContentResources.CollapseAndSaveWithMissingFields();
//     });
// });
//
//   //ALPHAPTLF-828 --> not yet resolved
//     describe('Display Player States on each Menu Items added', function() {
//       it('Display Player States - Menu', function() {
//         utils.goToCreateMenu();
//         menuContentResources.deselectAlltypes();
//         element(by.id('custom_menu')).click();
//         menuContentResources.addComponentSave();
//         menuContentResources.displayPlayerStates();
//         });
//
//       it('Display Player States - Content Page', function() {
//         utils.goToCreateMenu();
//         menuContentResources.deselectAlltypes();
//         element(by.id('content_page')).click();
//         menuContentResources.addComponentSave();
//         menuContentResources.displayPlayerStates();
//         });
//
//       it('Display Player States - Marketing Page', function() {
//         utils.goToCreateMenu();
//         menuContentResources.deselectAlltypes();
//         element(by.id('marketing_page')).click();
//         menuContentResources.addComponentSave();
//         menuContentResources.displayPlayerStates();
//         });
//
//       it('Display Player States - Casino Game Page', function() {
//         utils.goToCreateMenu();
//         menuContentResources.deselectAlltypes();
//         element(by.id('casino_game_page')).click();
//         menuContentResources.addComponentSave();
//         menuContentResources.displayPlayerStates();
//         });
//
//     });
//
//     //ALPHAPTLF-827 --> not yet resolved
//       describe('Display Player States on each Component added', function() {
//         it('Display Player States - Slide', function() {
//           utils.goToCreateMarketingContent();
//           menuContentResources.deselectAlltypes();
//           element(by.id('slide')).click();
//           menuContentResources.addComponentSave();
//           menuContentResources.displayPlayerStates();
//           });
//
//           it('Display Player States - Slideshow', function() {
//             utils.goToCreateMarketingContent();
//             menuContentResources.deselectAlltypes();
//             element(by.id('slideshow')).click();
//             menuContentResources.addComponentSave();
//             menuContentResources.displayPlayerStates();
//           });
//
//             it('Display Player States - Content Block', function() {
//               utils.goToCreateMarketingContent();
//               menuContentResources.deselectAlltypes();
//               element(by.id('content_block')).click();
//               menuContentResources.addComponentSave();
//               menuContentResources.displayPlayerStates();
//             });
//
//           it('Should Not Display Player States - Image', function() {
//             utils.goToCreateMarketingContent();
//             menuContentResources.deselectAlltypes();
//             element(by.id('image')).click();
//             menuContentResources.addComponentSave();
//             menuContentResources.doNotdisplayPlayerStates();
//           });
//
//         it('Should Not Display Player States - Content Page', function() {
//           utils.goToCreateMarketingContent();
//           menuContentResources.deselectAlltypes();
//           element(by.id('content_page')).click();
//           menuContentResources.addComponentSave();
//           menuContentResources.doNotdisplayPlayerStates();
//         });
//
//       });
//
//
//
//     //ALPHAPLTF-617
  describe('Internal Items - Verify Search By Name Field', function() {
    it('Search By Name - Searched Marketing Content Should Be Displayed', function() {
      var title = marketingResources.createMarketingPage(browser.params.cmsSaveAsDraftButtonText);
      menuContentResources.searchMenuContentInternalName(title);
      expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
    });
    it('Search By Name - Searched Menu Content Should Be Displayed', function() {
      var title = menuContentResources.createMenu(browser.params.cmsPublishButtonText);
      menuContentResources.searchMenuContentInternalName(title);
      expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
    });
    it('Search By Name - Searched Casino Game Content Should Be Displayed', function() {
      var title = gameResources.createGame('129',browser.params.cmsPublishButtonText);
      menuContentResources.searchMenuContentInternalName(title);
      expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
    });
    it('Search By Name - Searched Content Page Should Be Displayed', function() {
      var title = contentPageResources.createContent(browser.params.cmsPublishButtonText, 'Generic');
      menuContentResources.searchMenuContentInternalName(title);
      expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
    });
    it('Search By Name - "No Internal Pages Found" Should Be Displayed For No Matching Results', function() {
      menuContentResources.searchMenuContentInternalName('_');
      expect(element(by.css(browser.params.cmsNoSearchResult)).isDisplayed()).toBe(true);
      expect(element(by.css(browser.params.cmsNoSearchResult)).getText()).toEqual('No menu items found.');
    });
  });
  describe('Verify Multi Select Dropdown', function() {
    it('Search By Multi Select Dropdown - All Supported Content Types Should Be Displayed For "All Types Selected"', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('All Types Selected');
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      expect(element(by.id('custom_menu')).getAttribute('checked')).toEqual('true');
      expect(element(by.id('content_page')).getAttribute('checked')).toEqual('true');
      expect(element(by.id('marketing_page')).getAttribute('checked')).toEqual('true');
      expect(element(by.id('casino_game_page')).getAttribute('checked')).toEqual('true');
    });
    it('Search By Multi Select Dropdown - All Supported Content Types Should Not Be Displayed When "Deselect All" Link Is Clicked', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      expect(element(by.css('a.deselect-all')).isDisplayed()).toBe(true);
      element(by.css('a.deselect-all')).click();
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('No Type selected');

    });
    it('Search By Multi Select Dropdown - Marketing Contents Should Be Displayed When Marketing Is Checked', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      element(by.css('a.deselect-all')).click();
      browser.sleep(2000);
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMarketingCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Marketing Page');
      utils.checkFilteredList('Marketing Page', 'contentTypeList');
    });
    it('Search By Multi Select Dropdown - Menu Contents Should Be Displayed When Menu Is Checked', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      element(by.css('a.deselect-all')).click();
      browser.sleep(2000);
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Menu');
      utils.checkFilteredList('Menu', 'contentTypeList');
    });
    it('Search By Multi Select Dropdown - Casino Game Contents Should Be Displayed When Casino Game Page Is Checked', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      element(by.css('a.deselect-all')).click();
      browser.sleep(2000);
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsGameCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Casino Game Page');
      utils.checkFilteredList('Casino Game Page', 'contentTypeList');
    });
    it('Search By Multi Select Dropdown - Content Pages Should Be Displayed When Content Page Is Checked', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      element(by.css('a.deselect-all')).click();
      browser.sleep(2000);
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsContentCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('Content Page');
      utils.checkFilteredList('Content Page', 'contentTypeList');
    });
    it('Search By Multi Select Dropdown - Filtered 2 Content Types Should Be Displayed In Content List', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId, browser.params.cmsContentCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('2 Types Selected');
    });
    it('Search By Multi Select Dropdown - Filtered 3 Content Types Should Be Displayed In Content List', function() {
      utils.goToCreateMenu();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      element(by.css(browser.params.cmsMultiSelectDropdownByCss)).click();
      element(by.css('a.deselect-all')).click();
      slideContentResources.checkMultiSelectCheckbox(browser.params.cmsMultiSelectContainerByCss, [browser.params.cmsMenuCheckBoxId, browser.params.cmsContentCheckBoxId, browser.params.cmsMarketingCheckBoxId]);
      expect(element(by.css('input.selected-elements')).getAttribute('value')).toEqual('3 Types Selected');
    });
  });

  //Start: ALPHAPLTF-500
  describe('Beatrix CMS: View MENU List', function() {
    browser.driver.manage().window().maximize();
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.goToMenusList();

    it('Menu List should be displayed', function() {
      browser.driver.sleep(3000);
    });
  });

  describe('Verify Menus List: Secondary tabs and Table List', function() {
    var secondaryTabs = ["Published", "Draft", "Unpublished"];
    var secTabsLength = secondaryTabs.length;
    var tableList = ["Last Update\nDate/Time", "Name", "Author", "Languages", "Actions"];
    var tableListLength = tableList.length;

    function secondary_tabs_position(secondaryTabs, secTabsLength, tableListLength) {
      it(secondaryTabs[secTabsLength - 1] + ' Menus tab position: ' + secTabsLength, function() {
        var secondaryTabsLocator = browser.params.cmsMenusTabSecondaryTabs;
        var cmsMenusTabSecTabsArray = secondaryTabsLocator + '[' + secTabsLength + ']';
        element(by.xpath(cmsMenusTabSecTabsArray)).click();
        browser.driver.sleep(1000);
        expect(element(by.xpath(cmsMenusTabSecTabsArray)).isPresent()).toBe(true);
        expect(element.all(by.xpath(cmsMenusTabSecTabsArray)).getText()).toContain(secondaryTabs[secTabsLength - 1] + " Menus");
        console.log("\n");
      });
    }

    function secondary_tabs_table_list(tableList, tableListLength) {
      it('Table Header: ' + tableList[tableListLength - 1] + ' - position: ' + tableListLength, function() {
        var tableListLocator = browser.params.cmsMenusTableListHeader;
        var cmsMenusTableListHeaderArray = tableListLocator + '[' + tableListLength + ']';
        browser.driver.sleep(1000);
        expect(element(by.xpath(cmsMenusTableListHeaderArray)).isPresent()).toBe(true);
        expect(element.all(by.xpath(cmsMenusTableListHeaderArray)).getText()).toContain(tableList[tableListLength - 1]);
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

  //End: ALPHAPLTF-500

  describe('ALPHAPLTF-512 [New] Beatrix CMS: Create Menu - Menu Items', function() {
    it('Check the Menu Items Section', function() {
      //Add Menu Items
      utils.goToCreateMenu();
      utils.displayHeader('Create New Menu');

      //No Menu Added - Scenario 3
      expect(element.all(by.cssContainingText('h3', 'no menu items added.')).first().isDisplayed()).toBe(true);

      //Add Menu Item
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      cmsAdd.click();
      cmsSave.click();
      browser.waitForAngular();

      //Check the Menu Items - Scenario 1
      expect(cmsDisabledArrowUp.isDisplayed()).toBe(true);
      expect(cmsDisabledArrowDown.isDisplayed()).toBe(true);
      expect(cmsInternalColumn.isDisplayed()).toBe(true); //internal name of menu item
      //expect(element(by.css('th.bx-content-title > span')).isDisplayed()).toBe(true); //title name of menu item
      expect(cmsTypeColumn.isDisplayed()).toBe(true); //type of menu item
      expect(cmsLanguageColumn.isDisplayed()).toBe(true); //languages of menu item  cmsLanguageColumnCss
      expect(cmsStatusColumn.isDisplayed()).toBe(true);
      expect(cmsEditIcon.isDisplayed()).toBe(true);
      expect(cmsDeleteColumn.isDisplayed()).toBe(true);

      //Delete Added Menu Item - Scenario 2
      cmsDeleteColumn.click();
      element(by.css(browser.params.displayAddMenuItemButtonCSS)).click();
      expect(cmsAdd.isDisplayed()).toBe(true);
      }); //close it
    });  //close ALPHAPLTF-512

    //ALPHAPLTF-1038
    describe('[New] Beatrix CMS: Unpublish a Published Menu/Content', function(){
      var menuTab = element(by.css(browser.params.cmsMenuCss));
      var cmsPublished = element(by.css(browser.params.cmsPublishedCss));
      var menuName = element.all(by.css('td.bx-menulist-name > span'));
      var existingMenu = element(by.css('div.sub-navigation-content > nav > a:nth-child(1)'));
      var unpublishedLink = element.all(by.css('td.bx-menulist-delete > button > span'));
      var version = element(by.css('div.bx-panel-header-version'));
      var titleName = 'New Menu title CH' + random + date;
      var unpublishedList = element(by.css('bx-tabs > div > nav > ul > li:nth-child(3)'));
      it('Scenario 1: Display Unpublish CTA (tertiary) under Actions field', function(){
        //Navigate to Menu
        menuTab.click();
        browser.sleep(1000);
        //Check that Unpublished link is diplayed in every content before Delete link
        for(i=0; i<10; i++){
          expect(unpublishedLink.getText()).toContain('Unpublish');
          expect(element.all(by.css('td.bx-menulist-delete > a > span')).getText()).toContain('Delete');
        }
      });//CLOSE Scenario 1
      it('Scenario 2: User clicks Unpublish CTA (tertiary) on a specific published menu', function(){
        //Create a Menu and Publish
        utils.goToCreateMenu();
        gameResources.addInternalAndTitle(titleName);
        menuContentResources.addMenuItems();
        cmsPublished.click();
        browser.sleep(2000);
        //Click on the Menu again and check the Version
        expect(menuName.get(0).getText()).toContain(titleName);
        menuName.get(0).click();
        browser.sleep(500);
        var versionPublish = element(by.css('div.bx-panel-header-version')).getText();
        version.getText().then(console.log);
        //Navigate to Published tab
        existingMenu.click();
        browser.sleep(1000);
        //Click on Unpublished link of the previous created menu
        unpublishedLink.get(0).click();
        browser.sleep(1000);
        //Check that the Menu is not displayed anymore in Published Tab
        expect(menuName.get(0).getText()).not.toContain(titleName);
        //Navigate to Unpublished Tab
        unpublishedList.click();
        browser.sleep(1000);
        //Check that the Menu is in this List
        expect(menuName.get(0).getText()).toContain(titleName);
        //Click on the previous Menu
        menuName.get(0).click();
        browser.sleep(500);
        //Check the Version
        var versionUnpublish = element(by.css('div.bx-panel-header-version')).getText();
        version.getText().then(console.log);
        //Check tha the verion Publish and Unpublish is the same
          expect(versionPublish).toEqual(versionUnpublish);
      });//CLOSE Scenario 2
    });//CLOSE ALPHAPLTF-1038


// ALPHAPLTF-1178 Get By Status Duplicate Content
    describe('Verify Duplicate Content with Different Status', function() {
        it('Same content should not be displayed', function() {
        var contentName = element.all(by.id('contentManagementList'));
        var title = marketingResources.createMarketingPage(browser.params.cmsSaveAsDraftButtonText);
        expect(contentName.get(0).getText()).toContain(title);
        var publishedLink = element.all(by.cssContainingText('span.custom-link', 'Publish')).first();
        publishedLink.click();
        utils.goToCreateMenu();
        menuContentResources.searchMenuContentInternalName(title);
        expect(element.all(by.css('td.bx-content-name span')).getText()).toContain(title);
        expect(element.all(by.css('td.bx-content-name span')).getText()).not.toContain('Draft');

      });
    });

}); //parent

//Adding this temporary comment for CRON trigger. This will be deleted later. Thanks :)
