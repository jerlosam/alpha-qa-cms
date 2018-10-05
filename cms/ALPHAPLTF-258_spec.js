var utils = require('../utils/utilities');

describe('Beatrix CMS: View Unpublished Content List', function() {
  var cmsUnpublishedTab = element.all(by.xpath(browser.params.cmsUnpublishedMenu)).first();
  var cmsLastUpdateField = element(by.id(browser.params.cmsLastUpdate));
  var cmsUnpublishedNameField = element(by.id(browser.params.cmsUnpublishedName));
  var cmsUnpublishedTypeField = element(by.id(browser.params.cmsUnpublishedType));
  var cmsUnpublishedLanguageField = element(by.id(browser.params.cmsUnpublishedLanguage));
  var cmsUnpublishedActionsField = element(by.id(browser.params.cmsUnpublishedActions));
  var cmsUnpublishedAuthorField = element(by.id(browser.params.cmsUnpublishedAuthor));

 it('Should View Unpublished Content List', function(){
      browser.manage().deleteAllCookies();
      utils.loginToCms();
      browser.driver.sleep(5000);
      expect(cmsUnpublishedTab.isPresent()).toBe(true);
      cmsUnpublishedTab.click();
    });

it('Should List Last Update Field', function(){
      expect(cmsLastUpdateField.isPresent()).toBe(true);

    });

it('Should List Name Field', function(){
      expect(cmsUnpublishedNameField.isPresent()).toBe(true);

    });

it('Should List Author Field', function(){
      expect(cmsUnpublishedAuthorField.isPresent()).toBe(true);

    });

it('Should List Type Field', function(){
      expect(cmsUnpublishedTypeField.isPresent()).toBe(true);

   });

it('Should List Language Field', function(){
      expect(cmsUnpublishedLanguageField.isPresent()).toBe(true);

  });

it('Should List Actions Field', function(){
    expect(cmsUnpublishedActionsField.isPresent()).toBe(true);

  });
});
