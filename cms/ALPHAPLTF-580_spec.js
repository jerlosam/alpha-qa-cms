var utils = require('../utils/utilities');

describe('Beatrix CMS: Add Page Type column on all Content  Lists', function() {
  var cmsPublishedContentTab = element(by.xpath(browser.params.cmsPublishedContentTabXpath));
  var cmsDraftContentTab = element(by.xpath(browser.params.cmsDraftContentTabXpath));
  var cmsUnpublishedTab = element(by.xpath(browser.params.cmsUnpublishedTabXpath));
  var cmsContentPageTypeLabel = element(by.id(browser.params.cmsContentPageTypeTitle));


  it('Should Display Page Type Column in Published Tab', function(){
       browser.manage().deleteAllCookies();
       utils.loginToCms();
       browser.driver.sleep(5000);
       expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/published')
       expect(cmsContentPageTypeLabel.isDisplayed()).toBe(true);

     });

  it('Should Display Page Type Column in Draft Content Tab', function(){
          browser.driver.sleep(5000);
          cmsDraftContentTab.click();
          expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/draft')
          expect(cmsContentPageTypeLabel.isDisplayed()).toBe(true);

    });

  it('Should Display Page Type Column in Draft Content Tab', function(){
            browser.driver.sleep(5000);
            cmsUnpublishedTab.click();
            expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/unpublished')
            expect(cmsContentPageTypeLabel.isDisplayed()).toBe(true);

    });
});
