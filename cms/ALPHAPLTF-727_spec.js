var utils = require('../utils/utilities');

describe('Beatrix CMS: Content pagination', function() {
  var cmsArrowNextPagination = element(by.xpath(browser.params.cmsArrowNextPaginationXpath));

  it('Should Display Enabled Arrow For Next Page If List is 10', function(){
       browser.manage().deleteAllCookies();
       utils.loginToCms();
       browser.driver.manage().window().maximize();
       browser.driver.sleep(5000);
       expect(browser.getCurrentUrl()).toBe(browser.params.cmsUrl + 'content/list/published');

       let contentList = element(by.id('contentManagementList')).all(by.tagName('tr'));
       expect(contentList.count()).toEqual(10);
       expect(cmsArrowNextPagination.isEnabled()).toBe(true);
      });

    it('Should Display Disabled Arrow For Next Page If List is Less Than 10', function(){

      let contentList = element(by.id('contentManagementList')).all(by.tagName('tr'));

      if(expect(contentList.count()).toEqual(10)){
        cmsArrowNextPagination.click();
      }  else {
        //if(expect(contentList.count()).not.toEqual(10));
        expect(cmsArrowNextPagination.isEnabled()).toBe(false);

      };
    });

});
