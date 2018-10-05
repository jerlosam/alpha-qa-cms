var utils = require('../utils/utilities');

describe('Beatrix CMS: Menus - Discard or Navigate away behavior', function() {
  var cmsMenu = element.all(by.css(browser.params.cmsMenuCss)).first();
  var cmsCreateNewMenu = element.all(by.xpath(browser.params.cmsCreateNewMenuXpath)).first();
  var cmsDraftMenu = element.all(by.xpath(browser.params.cmsDraftMenuXpath)).first();
  var cmsMenuThirdDraftList  = element.all(by.id(browser.params.cmsMenuThirdDraftListId));
  var cmsMenuContentList = element.all(by.xpath(browser.params.cmsMenuContentListXpath));
  var cmsExistingMenu = element.all(by.xpath(browser.params.cmsExistingMenuXpath));
  var cmsDiscardButton = element.all(by.buttonText(browser.params.cmsDiscardButtonText));
  var cmsCreateNewMenu = element.all(by.xpath(browser.params.cmsCreateNewMenuXpath));
  var cmsSaveChangesModal = element(by.xpath(browser.params.cmsSaveChangesModalXpath));
  var cmsSaveChangesNoButton = element(by.buttonText(browser.params.cmsSaveChangesNoButtonXpath));
  var cmsSaveChangesYesButton = element(by.buttonText(browser.params.cmsSaveChangesYesButtonXpath));
  var cmsInternalName = element.all(by.id(browser.params.cmsInternalNameId));
  var cmsSaveChangesCloseButton = element(by.css(browser.params.cmsSaveChangesCloseButtonCss));

  it('Should Edit a specific menu then navigate away with no change', function(){
       browser.manage().deleteAllCookies();
       utils.loginToCms();
       browser.driver.manage().window().maximize();
       browser.driver.sleep(5000);
       cmsMenu.click();
       cmsDraftMenu.click();
       cmsMenuContentList.click();
       browser.sleep(5000);
       var editLabel = element(by.cssContainingText('.bx-panel-header-title','Edit Menu'));
       expect(editLabel.isDisplayed()).toBe(true);
       cmsExistingMenu.click();
       expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/list/published')
      });

    it('Should Edit a specific menu then click discard CTA with no change', function(){
           cmsMenu.click();
           cmsDraftMenu.click();
           cmsMenuContentList.click();
           //expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/edit/7543db60-8b13-4ad4-8584-2353844910b4')
           browser.sleep(5000);
           var editLabel = element(by.cssContainingText('.bx-panel-header-title','Edit Menu'));
           expect(editLabel.isDisplayed()).toBe(true);
           cmsDiscardButton.click();
           expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/list/draft')
          });

          it('Should Create a specific menu then click discard CTA with no change', function(){
                 cmsMenu.click();
                 cmsCreateNewMenu.click();
                 browser.sleep(5000);
                 var createLabel = element(by.cssContainingText('.bx-panel-header-title','Create New Menu'));
                 expect(createLabel.isDisplayed()).toBe(true);
                 cmsDiscardButton.click();
                 expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/list/published')
                });

                it('Should Create a specific menu then navigate away with no change', function(){
                       cmsMenu.click();
                       cmsCreateNewMenu.click();
                       browser.sleep(5000);
                       var createLabel = element(by.cssContainingText('.bx-panel-header-title','Create New Menu'));
                       expect(createLabel.isDisplayed()).toBe(true);
                       cmsExistingMenu.click();
                       expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/list/published')
                      });
/*
                      it('Should Create a specific menu then navigate away with change discard CTA', function(){
                            browser.manage().deleteAllCookies();
                            utils.loginToCms();
                            browser.driver.manage().window().maximize();
                            browser.driver.sleep(5000);
                             cmsMenu.click();
                             cmsDraftMenu.click();
                             cmsMenuContentList.click();
                             browser.sleep(5000);
                             var editLabel = element(by.cssContainingText('.bx-panel-header-title','Edit Menu'));
                             expect(editLabel.isDisplayed()).toBe(true);
                             cmsInternalName.sendKeys('a');
                             browser.sleep(3000);
                             cmsDiscardButton.click();
                             expect(cmsSaveChangesModal.isDisplayed()).toBe(true);

                             cmsSaveChangesNoButton.click();
                             browser.sleep(5000);
                             //expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/list/draft')
                            });
                            it('Should Confirmation Modal Display Correct Elements', function(){
                                   expect(cmsSaveChangesNoButton.isDisplayed()).toBe(true); 
                                   expect(cmsSaveChangesYesButton.isDisplayed()).toBe(true); 
                                   expect(cmsSaveChangesCloseButton.isDisplayed()).toBe(true); 
                                   //expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'menu/list/published')
                                  });
*/
  });
