var utils = require('../utils/utilities');

describe('Display "Slug" field on all Page Content forms', function(){

 it('Slug field is displayed - Content Page', function(){
  browser.manage().deleteAllCookies();
  utils.loginToCms();
  utils.createContentPage();
  browser.sleep(1000);
  let slug = element.all(by.css('label'));
  expect (slug.get(4).getText()).toEqual('Slug*');
  element.all(by.id('slug')).get(0).sendKeys('._-asdasdasf6557dsjahjaajd-_.sjhdjhsjshfjdsa._-asdasdasf6557dsjahjaajd-_.sjhdjhsjshfjdsaf456564e..er');
  browser.sleep(3000);

  });

  it('Slug field is displayed - Marketing Page', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
   utils.goToCreateMarketingContent();
   browser.sleep(1000);
   let slug = element.all(by.css('label'));
   expect (slug.get(3).getText()).toEqual('Slug*');
   element.all(by.id('slug')).get(0).sendKeys('._-asdasdasf6557dsjahjaajd-_.sjhdjhsjshfjdsa._-asdasdasf6557dsjahjaajd-_.sjhdjhsjshfjdsaf456564e..er');
   browser.sleep(3000);
   });

   it('Slug field is displayed - Game Page', function(){
    browser.manage().deleteAllCookies();
    utils.loginToCms();
    utils.createGameContent();
    browser.sleep(1000);
    let slug = element.all(by.css('label'));
    expect (slug.get(3).getText()).toEqual('Slug*');
    element.all(by.id('slug')).get(0).sendKeys('._-asdasdasf6557dsjahjaajd-_.sjhdjhsjshfjdsa._-asdasdasf6557dsjahjaajd-_.sjhdjhsjshfjdsaf456564e..er');
    browser.sleep(3000);
    });

});
